const govtDataService = require('./govtDataService.js');
const alertService = require('./alertService');
const Lake = require('../models/Lake');

async function updateLakesCore() {
  try {
    const govtData = await govtDataService.fetchLakeData();
    if (!govtData || !Array.isArray(govtData) || govtData.length === 0) {
      console.warn('No valid data received from API');
      return { updatedCount: 0, alertsTriggered: 0 };
    }

    await Promise.all(
      govtData.map(data =>
        Lake.findOneAndUpdate(
          { name: data.name },
          { ...data, lastUpdated: new Date() },
          { upsert: true, new: true }
        )
      )
    );

    const alerts = await alertService.checkForAlerts();

    return {
      updatedCount: govtData.length,
      alertsTriggered: alerts.length,
      lastUpdate: new Date()
    };
  } catch (err) {
    console.error('Error updating lakes:', err);
    return { error: err.message };
  }
}

module.exports = updateLakesCore;
