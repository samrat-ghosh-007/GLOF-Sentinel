const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  state: String,
  isVerified: { type: Boolean, default: false },
  otp: String,
  otpExpiry: Date,
  resetOtp: String,        
  resetOtpExpiry: Date
});

module.exports = mongoose.model('User', userSchema);
