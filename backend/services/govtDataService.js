const fs = require('fs').promises;
const csv = require('csvtojson');
const axios = require('axios');

let staticLakeData = null;

// Caches
const terrainCache = {};
const hydroCache = {};      
const seismicCache = {};    
const cacheTTL = {
    hydro: 30 * 60 * 1000,   
    seismic: 24 * 3600 * 1000 
};

// ---- Load static lake data ----
async function loadStaticLakeData() {
    if (staticLakeData) return staticLakeData;
    try {
        const csvData = await fs.readFile('./data/lakes.csv', 'utf8');
        const lakes = await csv().fromString(csvData);

        staticLakeData = lakes.map(lake => ({
            name: lake.name || "Unknown Lake",
            latitude: parseFloat(lake.latitude || lake.lat) || 0,
            longitude: parseFloat(lake.longitude || lake.lng) || 0,
            district: lake.district || "Unknown",
            state: lake.state || "Unknown",
            volume: Number(lake.volume) || 0,
            freeboard: Number(lake.freeboard) || 0,
            damType: lake.damType || "unknown",
            surfaceArea: Number(lake.surfaceArea) || 0,
            history: [],
            glacierProximity: Number(lake.glacierProximity) || 5,
            glacierRetreatRate: Number(lake.glacierRetreatRate) || 10,
            damHeight: Number(lake.damHeight) || 20,
            materialType: lake.materialType || "moraine"
        }));

        return staticLakeData;
    } catch (err) {
        console.error("Error loading lake CSV:", err);
        return [];
    }
}

// ---- Fetch weather + hydro (30 min caching) ----
async function fetchHydroWeather(lake) {
    const key = lake.name;
    const now = Date.now();
    if (hydroCache[key] && (now - hydroCache[key].ts < cacheTTL.hydro)) return hydroCache[key].data;

    try {
        
        const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: { lat: lake.latitude, lon: lake.longitude, appid: process.env.OPENWEATHER_API_KEY, units: 'metric' }
        });
        const weather = {
            temperature: weatherRes.data.main.temp || 0,
            pressure: weatherRes.data.main.pressure || 0,
            rainfall: weatherRes.data.rain?.['1h'] || 0,
            humidity: weatherRes.data.main.humidity || 0,
            windSpeed: weatherRes.data.wind?.speed || 0
        };

       
        const hydroRes = await axios.get("https://api.open-meteo.com/v1/forecast", {
            params: {
                latitude: lake.latitude,
                longitude: lake.longitude,
                daily: ["snowfall_sum", "temperature_2m_max", "precipitation_sum"],
                timezone: "auto"
            }
        });
        const daily = hydroRes.data.daily || {};
        const snowfall = daily.snowfall_sum?.[0] || 0;
        const cumulativeRain7d = daily.precipitation_sum?.slice(0, 7).reduce((a, b) => a + b, 0) || 0;
        const riverDischarge = cumulativeRain7d * 0.1;
        const snowDepth = 0;

        const data = { ...weather, snowfall, snowDepth, riverDischarge, cumulativeRain7d };
        hydroCache[key] = { ts: now, data };
        return data;
    } catch (err) {
        console.warn(`Hydro/Weather fetch failed for ${lake.name}:`, err.message);
        return { temperature: 0, rainfall: 0, windSpeed: 0, snowfall: 0, snowDepth: 0, riverDischarge: 0, cumulativeRain7d: 0 };
    }
}

// ---- Fetch terrain factor (cached indefinitely) ----
async function fetchTerrainFactor(lake) {
    if (terrainCache[lake.name]) return terrainCache[lake.name];
    try {
        const res = await axios.get("https://api.open-meteo.com/v1/elevation", {
            params: { latitude: lake.latitude, longitude: lake.longitude }
        });
        const terrainFactor = res.data.elevation > 2000 ? 1 : 0.5;
        terrainCache[lake.name] = terrainFactor;
        return terrainFactor;
    } catch {
        return 0.5;
    }
}

// ---- Fetch seismicity (24h caching) ----
async function fetchSeismicity(lake, days = 30) {
    const cacheKey = lake.name;
    const now = Date.now();
    if (seismicCache[cacheKey] && (now - seismicCache[cacheKey].ts < cacheTTL.seismic)) return seismicCache[cacheKey].data;

    try {
        const res = await axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query", {
            params: {
                format: "geojson",
                starttime: new Date(Date.now()-days*24*3600*1000).toISOString(),
                endtime: new Date().toISOString(),
                latitude: lake.latitude,
                longitude: lake.longitude,
                maxradiuskm: 50
            }
        });
        const normalized = Math.min(res.data.features?.length / 10, 1);
        seismicCache[cacheKey] = { ts: now, data: normalized };
        return normalized;
    } catch {
        return 0;
    }
}

// ---- Morphology & helper functions ----
function computeAreaChangeRate(history, windowDays=30) {
    const now = Date.now();
    const windowStart = now - windowDays*24*3600*1000;
    const points = (history||[]).filter(p=>p.surfaceArea!=null && new Date(p.ts).getTime()>=windowStart)
        .sort((a,b)=>new Date(a.ts)-new Date(b.ts));
    if(points.length<2) return 0;
    const first = points[0], last = points[points.length-1];
    const pct = ((last.surfaceArea-first.surfaceArea)/Math.max(first.surfaceArea,1e-6))*100;
    const days = (new Date(last.ts)-new Date(first.ts))/(24*3600*1000);
    return (pct/Math.max(days,1e-6))*30;
}
function computeShapeFactor(surfaceArea, perimeter) {
    if(!surfaceArea||!perimeter) return 0;
    return 1 - (4*Math.PI*surfaceArea)/(perimeter*perimeter);
}
function estimateBathymetry(volume, surfaceArea) {
    if(!volume||!surfaceArea) return 0;
    return (volume*1e6)/(surfaceArea*1e6);
}

// ---- Heuristic risk score ----
function calculateScore(params) {
    const {
        volume, freeboard, damType, temperature, rainfall, windSpeed, terrainFactor,
        snowDepth, snowfall, riverDischarge,
        areaChangeRateScore=0, glacierProximityScore=0, damHeightScore=0,
        seismicityIndex=0, shapeFactor=0, bathymetryEstimate=0
    } = params;

    const volumeScore = Math.min(volume / 25, 1);
    const freeboardScore = Math.min(Math.max((15 - freeboard) / 15, 0), 1);
    const damMaterialScore = damType?.toLowerCase().includes("moraine") ? 1 :
                             damType?.toLowerCase().includes("ice") ? 0.7 : 0.3;
    const damHeightScoreNorm = Math.min(damHeightScore, 1);

    const rainfallScore = Math.min(rainfall / 100, 1);
    const snowMeltScore = Math.min((snowfall + snowDepth) / 50, 1);
    const temperatureScore = Math.min(Math.max((temperature - 15) / 15, 0), 1);
    const windScore = Math.min(windSpeed / 20, 1);
    const dischargeScore = Math.min(riverDischarge / 100, 1);

    const terrainScore = terrainFactor;
    const seismicScore = seismicityIndex;
    const areaChangeScore = Math.min(areaChangeRateScore / 5, 1);
    const glacierScore = 1 - Math.min(glacierProximityScore, 1);
    const shapeScore = shapeFactor;
    const bathymetryScore = Math.min(bathymetryEstimate / 50, 1);

    const totalScore = 
        0.2 * volumeScore +
        0.15 * freeboardScore +
        0.1 * damMaterialScore +
        0.1 * rainfallScore +
        0.07 * snowMeltScore +
        0.05 * temperatureScore +
        0.05 * windScore +
        0.03 * dischargeScore +
        0.05 * terrainScore +
        0.05 * seismicScore +
        0.05 * areaChangeScore +
        0.05 * glacierScore +
        0.05 * damHeightScoreNorm +
        0.05 * shapeScore +
        0.05 * bathymetryScore;

    return Math.min(Math.max(totalScore, 0), 1);
}

function getStatus(params) {
    const score = calculateScore(params);
    let status = 'NORMAL';
    if(score >= 0.7) status = 'CRITICAL';
    else if(score >= 0.4) status = 'WARNING';
    return { status, confidence: Math.round(score*100) };
}

// ---- Main function ----
async function fetchLakeData() {
    const lakes = await loadStaticLakeData();

    const cleaned = await Promise.all(lakes.map(async lake=>{
        const [hydroWeather, terrain, seismicity] = await Promise.all([
            fetchHydroWeather(lake),
            fetchTerrainFactor(lake),
            fetchSeismicity(lake)
        ]);

        const latestSurfaceArea = lake.surfaceArea || (lake.volume*0.1);
        lake.history.push({ ts: new Date(), surfaceArea: latestSurfaceArea });
        if(lake.history.length>180) lake.history.shift();
        lake.surfaceArea = latestSurfaceArea;
        lake.areaChangeRate = computeAreaChangeRate(lake.history);
        lake.shapeFactor = computeShapeFactor(lake.surfaceArea, lake.surfaceArea*4);
        lake.bathymetryEstimate = estimateBathymetry(lake.volume, lake.surfaceArea);

        const params = {
            ...lake,
            temperature: hydroWeather.temperature,
            rainfall: hydroWeather.rainfall,
            windSpeed: hydroWeather.windSpeed,
            terrainFactor: terrain,
            snowDepth: hydroWeather.snowDepth,
            snowfall: hydroWeather.snowfall,
            riverDischarge: hydroWeather.riverDischarge,
            areaChangeRateScore: lake.areaChangeRate/10,
            glacierProximityScore: 1-Math.min(lake.glacierProximity/10,1),
            damHeightScore: Math.min(lake.damHeight/30,1),
            seismicityIndex: seismicity,
            shapeFactor: lake.shapeFactor,
            bathymetryEstimate: lake.bathymetryEstimate
        };

        const { status, confidence } = getStatus(params);
        return { ...lake, ...hydroWeather, terrainFactor: terrain, status, confidence, lastUpdated: new Date() };
    }));

    return cleaned;
}

module.exports = { fetchLakeData, getStatus };
