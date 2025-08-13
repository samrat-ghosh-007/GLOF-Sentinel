const Lake = require('../models/Lake');

exports.getAllLakes = async (req, res) => {
    try{
  const { status } = req.query;
  const filter = status ? { status: status.toUpperCase() } : {};

  const lakes = await Lake.find(filter);
  res.json(lakes);
  }catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};


exports.getLakeById = async (req, res) => {
  try {
    const lake = await Lake.findById(req.params.id);
    if (!lake) return res.status(404).json({ msg: 'Lake not found' });

    res.json(lake);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};


exports.createLake = async (req, res) => {
  const { name, location, lat, lon, waterLevel, temp, pressure } = req.body;
    try {
   
    if (!name || !lat || !lon) {
      return res.status(400).json({ msg: 'Name, latitude, and longitude are required.' });
    }

    const lake = await Lake.create({
      name,
      location,
      lat,
      lon,
      waterLevel: waterLevel || 0,
      temp: temp || 0,
      pressure: pressure || 0,
      status: 'NORMAL'
    });

    res.status(201).json(lake);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};


exports.updateLake = async (req, res) => {
  try {
    const updatedLake = await Lake.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedLake) {
      return res.status(404).json({ msg: 'Lake not found' });
    }

    res.json(updatedLake);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};



exports.deleteLake = async (req, res) => {
  try {
    const lake = await Lake.findByIdAndDelete(req.params.id);

    if (!lake) {
      return res.status(404).json({ msg: 'Lake not found' });
    }

    res.json({ msg: `Lake ${lake.name} deleted successfully.` });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

