const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
const { auth } = require('../middleware/auth')

router.post('/register', register);
router.post('/login', login);
router.post('/verify', auth, (req, res) => {
  res.status(200).json({
    valid: true,
    user: req.user 
  });
});

module.exports = router;
