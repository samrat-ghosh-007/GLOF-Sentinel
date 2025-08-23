const mongoose = require("mongoose");

const lakeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  temperature: { type: Number, default: 0 },   
  pressure: { type: Number, default: 0 },
  rainfall: { type: Number, default: 0 },      
  humidity: { type: Number, default: 0 },      
  windSpeed: { type: Number, default: 0 },     
  volume: { type: Number, default: 0 },        
  freeboard: { type: Number, default: 0 },     
  damType: { type: String, default: "unknown" },
  status: {
    type: String,
    enum: ["NORMAL", "WARNING", "CRITICAL"],
    default: "NORMAL"
  },
  lastUpdated: { type: Date, default: Date.now }
});