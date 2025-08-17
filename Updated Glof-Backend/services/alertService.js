const Lake = require('../models/Lake');
const Alert = require('../models/Alert');
const User = require('../models/User');
const emailService = require('./emailService');
const Recipient = require('../models/Recipient');
const { getStatus } = require('./govtDataService'); 



exports.checkForAlerts = async () => {
  const createdAlerts = [];
  try {
    const lakes = await Lake.find();

    for (const lake of lakes) {
      const status = getStatus(lake.temperature, lake.pressure);

      if (status === 'CRITICAL') {
        const alert = await Alert.create({
          lake: lake._id,
          message: `${lake.name} is in CRITICAL status`,
          severity: 'HIGH',
          temperature: lake.temperature,
          pressure: lake.pressure
        });

        createdAlerts.push(alert);

        const users = await User.find({ state: lake.state }, 'email');


        for (const user of users) {
          await emailService.sendEmail(
            user.email,
            `Critical Alert for ${lake.name} - Immediate Attention Required`,
            `Dear Recipient,

            The monitoring system has detected a critical status for ${lake.name} (State: ${lake.state}).

            🌡️ Temperature: ${lake.temperature} °C

            🌬️ Pressure: ${lake.pressure} hPa

            This indicates a high risk of a potential Glacial Lake Outburst Flood (GLOF).
            We urge nearby residents to take immediate precautionary measures.

            Stay safe,
            GLOF Sentinel System`
          );
        }
        const national = await Recipient.find({ level: 'national' });
        const stateRecipients = await Recipient.find({
            role: 'SDMA',
            state: lake.state
      });

      const recipients = [...national, ...stateRecipients];
      
      for (const r of recipients) {
          await emailService.sendEmail(
            r.email,
            `🚨 GLOF ALERT 🚨`,
            `Lake: ${lake.name}
            District: ${lake.district}, ${lake.state}
            Coordinates: ${lake.latitude}, ${lake.longitude}
            Risk Level: ${severity}

            Action Required: Please coordinate emergency preparedness immediately.

            - GLOF Sentinel System`
        );
      }


      }
    }
  } catch (err) {
    console.error('Error in checkForAlerts:', err);
  }

  return createdAlerts; 
};
