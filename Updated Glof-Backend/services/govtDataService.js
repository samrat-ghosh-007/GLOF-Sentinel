const fs = require('fs');
const csv = require('csvtojson');
const axios = require('axios');


const fetchLakeData = async () => {
  try {
    const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
    const csvData = fs.readFileSync('./data/lakes.csv', 'utf8');
    const lakes = await csv().fromString(csvData);

    const cleanedLakes = await Promise.all(
      lakes.map(async (lake) => {
        const latitude = parseFloat(lake.latitude || lake.lat);
        const longitude = parseFloat(lake.longitude || lake.lng);

        let temperature = parseFloat(lake.temperature || lake.temp || 0);
        let pressure = parseFloat(lake.pressure || lake.pres || 0);

        
        if (!isNaN(latitude) && !isNaN(longitude)) {
          try {
            const weatherRes = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
            );

            temperature = weatherRes.data.main.temp;
            pressure = weatherRes.data.main.pressure;
          } catch (err) {
            console.error(`Failed to fetch weather for ${lake.name}:`, err.message);
          }
        }

        return {
          name: lake.name || lake.LakeName || 'Unknown Lake',
          latitude,
          longitude,
          temperature,
          pressure,
          status: getStatus(temperature, pressure),
          lastUpdated: new Date()
        };
      })
    );

    return cleanedLakes;
  } catch (error) {
    console.error('Error fetching lake data:', error.message);
    return [];
  }
};


function getStatus(temperature, pressure) {
  if (temperature > 30 && pressure < 950) return 'CRITICAL';
  if (temperature > 25) return 'WARNING';
  return 'NORMAL';
}


module.exports = {fetchLakeData, getStatus };
