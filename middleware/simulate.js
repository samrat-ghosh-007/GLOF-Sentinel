const sendEmail = require('../utils/sendEmail');
const User = require('../models/User');
const Lake=require('../models/Lake');
const Alert = require('../models/Alert');


const simulateLakeData = async () => {
  const lakes = await Lake.find();
  const admins = await User.find({ role: 'admin' });
  const TEN_MINUTES = 10 * 60 * 1000;  

  for (const lake of lakes) {
    
      const randomFluctuation = (min, max) => Math.random() * (max - min) + min;


      lake.waterLevel += randomFluctuation(-5, 5);
      lake.temp += randomFluctuation(-1, 1);
      lake.pressure += randomFluctuation(-2, 2);

      lake.waterLevel = Math.max(0, lake.waterLevel);
      lake.temp = Math.max(-30, lake.temp); 
      lake.pressure = Math.max(0, lake.pressure);



    const isCritical =
      lake.waterLevel > 30 ||      
      lake.temp > 20 ||            
      lake.pressure < 850;         


    if (isCritical && lake.status !== 'CRITICAL' && (!lake.lastAlert || Date.now() - lake.lastAlert.getTime() > TEN_MINUTES)) {
      lake.status = 'CRITICAL';
      lake.lastAlert = new Date();
      await Alert.create({
        lake: lake._id,
        message: `⚠️ CRITICAL: ${lake.name} is at risk of outburst!`
      });

      for (const admin of admins) {
        try{
            await sendEmail(
            admin.email,
            `🚨 CRITICAL: ${lake.name}`,
            `Dear ${admin.name}, lake ${lake.name} has entered CRITICAL state.`
        )
      } catch (err) {
          console.error(`Failed to send email to ${admin.email}:`, err);
    }};
    
    } else if (!isCritical) {
      lake.status = 'NORMAL';
    }

    await lake.save();
  }
};

module.exports = { simulateLakeData };
