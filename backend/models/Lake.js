const mongoose = require('mongoose');

const lakeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  temperature: { type: Number, default: null }, 
  pressure: { type: Number, default: null },  
  status: {
    type: String,
    enum: ['Safe', 'Warning', 'Critical']
  },      
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lake', lakeSchema);
