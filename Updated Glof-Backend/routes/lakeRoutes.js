const express = require('express');
const { getAllLakes, updateLakesFromGovt } = require('../controllers/lakeController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getAllLakes);


module.exports = router;
