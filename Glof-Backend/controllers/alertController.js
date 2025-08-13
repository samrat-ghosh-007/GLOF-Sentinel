const Alert = require('../models/Alert');

exports.getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find()
      .populate('lake', 'name location status') 
      .sort({ createdAt: -1 }); 

    res.json(alerts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to fetch alerts', error: err.message });
  }
};

