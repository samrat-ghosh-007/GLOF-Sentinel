// models/Recipient.js
const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ['NDMA', 'CWC', 'SDMA', 'DDMA'] },
  level: { type: String, enum: ['national', 'state', 'district'] },
  state: String,   
  district: String, 
  email: String,
  phone: String
});

module.exports = mongoose.model('Recipient', recipientSchema);
