const mongoose = require('mongoose');

const lakeSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lon: Number,
  waterLevel: Number,
  temp: Number,
  pressure: Number,
  status: { type: String, enum: ['NORMAL', 'CRITICAL'], default: 'NORMAL' },
  lastAlert: { type: Date }
});

module.exports = mongoose.model('Lake', lakeSchema);
