const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  lake: { type: mongoose.Schema.Types.ObjectId, ref: 'Lake' },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', alertSchema);
