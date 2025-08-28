const mongoose = require('mongoose');

const historyPointSchema = new mongoose.Schema({
  ts: { type: Date, default: Date.now },
  surfaceArea: { type: Number } // km²
}, { _id: false });

const lakeSchema = new mongoose.Schema({
  // Basic Info
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  district: { type: String, default: "Unknown" },
  state: { type: String, default: "Unknown" },

  // Dam / Lake Physical Metrics
  volume: { type: Number, default: 0 },        
  freeboard: { type: Number, default: 0 },     
  damType: { type: String, default: "unknown" },
  damHeight: { type: Number, default: 0 },    
  materialType: { type: String, default: "moraine" },
  surfaceArea: { type: Number, default: 0 },   
  perimeter: { type: Number, default: 0 },     
  history: { type: [historyPointSchema], default: [] },
  areaChangeRate: { type: Number, default: 0 },
  shapeFactor: { type: Number, default: 0 },
  bathymetryEstimate: { type: Number, default: 0 },

  // Glacier Features
  glacierProximity: { type: Number, default: 5 },     
  glacierRetreatRate: { type: Number, default: 10 },  

  // Hydrology Trends
  cumulativeRain7d: { type: Number, default: 0 },    
  snowMeltIndex: { type: Number, default: 0 },

  // Seismicity
  seismicityIndex: { type: Number, default: 0 },

  // Weather / Terrain (dynamic, fetched from APIs)
  temperature: { type: Number, default: 0 },
  rainfall: { type: Number, default: 0 },
  humidity: { type: Number, default: 0 },
  windSpeed: { type: Number, default: 0 },
  pressure: { type: Number, default: 0 },
  terrainFactor: { type: Number, default: 0 },
  snowDepth: { type: Number, default: 0 },
  snowfall: { type: Number, default: 0 },
  riverDischarge: { type: Number, default: 0 },

  // Risk
  status: { type: String, enum: ['NORMAL','WARNING','CRITICAL'], default: 'NORMAL' },
  confidence: { type: Number, default: 0 },

  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lake', lakeSchema);

