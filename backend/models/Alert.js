const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  lake: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lake', 
    required: true
  },
  message: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH'], 
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  pressure: {
    type: Number,
    required: true
  }
}, { timestamps: true }); 

module.exports = mongoose.model('Alert', alertSchema);
