const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register user
router.post('/register', authController.register);

// Login user
router.post('/login', authController.login);

// Verify OTP
router.post('/verify-otp', authController.verifyOtp);

// Resend OTP
router.post('/resend-otp', authController.resendOtp);

// Forgot password (send OTP to email)
router.post('/forgot-password', authController.forgotPassword);

// Reset password (verify OTP and set new password)
router.post('/reset-password', authController.resetPassword);

module.exports = router;
