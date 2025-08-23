const fs = require('fs');
const csv = require('csvtojson');
const axios = require('axios');


let staticLakeData = null;

async function loadStaticLakeData() {
  if (staticLakeData) return staticLakeData; 

  const csvData = fs.readFileSync('./data/lakes.csv', 'utf8');
  const lakes = await csv().fromString(csvData);

  staticLakeData = lakes.map(lake => ({
    name: lake.name || "Unknown Lake",
    latitude: parseFloat(lake.latitude || lake.lat) || 0,
    longitude: parseFloat(lake.longitude || lake.lng) || 0,
    volume: Number(lake.volume) || 0,
    freeboard: Number(lake.freeboard) || 0,
    damType: lake.damType || "unknown"
  }));

  return staticLakeData;
}

async function fetchDynamicWeather(lake) {
  const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
  let temperature = 0, pressure = 0, rainfall = 0, humidity = 0, windSpeed = 0;

  if (lake.latitude && lake.longitude) {
    try {
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lake.latitude}&lon=${lake.longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
      );
      temperature = weatherRes.data.main.temp || 0;
      pressure = weatherRes.data.main.pressure || 0;
      humidity = weatherRes.data.main.humidity || 0;
      windSpeed = weatherRes.data.wind?.speed || 0;
      rainfall = weatherRes.data.rain?.["1h"] || 0;
    } catch (err) {
      console.error(`Failed to fetch weather for ${lake.name}:`, err.message);
    }
  }

  return { temperature, pressure, rainfall, humidity, windSpeed };
}

async function fetchLakeData() {
  const lakes = await loadStaticLakeData();

  const cleanedLakes = await Promise.all(
    lakes.map(async lake => {
      const weather = await fetchDynamicWeather(lake);

      const status = getStatus({ 
        ...weather, 
        volume: lake.volume, 
        freeboard: lake.freeboard, 
        damType: lake.damType 
      });

      return {
        ...lake,
        ...weather,
        status,
        lastUpdated: new Date()
      };
    })
  );

  return cleanedLakes;
}


function getStatus({ temperature, pressure, rainfall, humidity, windSpeed, volume, freeboard, damType }) {
  let score = 0;

  if (temperature > 30) score += 3;
  else if (temperature > 25) score += 2;

  if (pressure < 950) score += 3;
  else if (pressure < 980) score += 2;

  if (rainfall > 50) score += 3;
  else if (rainfall > 20) score += 2;

  if (humidity > 80) score += 1;
  if (windSpeed > 15) score += 2;

  if (volume > 10) score += 3;
  else if (volume > 5) score += 2;

  if (freeboard < 5) score += 3;
  else if (freeboard < 10) score += 2;

  const type = damType ? damType.toLowerCase() : "";

  if (type.includes("moraine")) score += 3;
  else if (type.includes("ice")) score += 2;

  if (score >= 12) return "CRITICAL";
  if (score >= 7) return "WARNING";
  return "NORMAL";
}


module.exports = {fetchLakeData, getStatus };