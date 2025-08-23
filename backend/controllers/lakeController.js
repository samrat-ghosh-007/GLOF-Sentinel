const Lake = require('../models/Lake');
const govtDataService = require('../services/govtDataService');
const alertService = require('../services/alertService');

exports.getAllLakes = async (req, res) => {
  try {
    const lakes = await Lake.find().sort({ name: 1 }).lean();
    res.json(lakes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching lakes' });
  }
};


