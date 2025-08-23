const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  state: String,
  isVerified: { type: Boolean, default: false },
  otp: String,
  otpExpiry: Date,
  resetOtp: String,        // Add this field
  resetOtpExpiry: Date,    // Add this field
});

module.exports = mongoose.model('User', userSchema);
