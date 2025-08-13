const express = require('express');
const router = express.Router();
const { simulateLakeData } = require('../middleware/simulate');
const { auth, isAdmin } = require('../middleware/auth');

router.post('/tick', auth, isAdmin, async (req, res) => {
  try {
    await simulateLakeData();
    res.status(200).json({ msg: 'Simulation tick completed successfully.' });
  } catch (err) {
    res.status(500).json({ msg: 'Simulation failed.', error: err.message });
  }
});

module.exports = router;
