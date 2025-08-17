const express = require('express');
const dotenv = require('dotenv');
const cors=require('cors');
const connectDB = require('./config/db');
const cron = require('node-cron');
const updateLakesCore = require('./services/lakeUpdater');
const mongoose = require('mongoose');



dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const seedRecipients = require('./seed/seedRecipients');
seedRecipients();  



// Routes
app.use('/api/lakes', require('./routes/lakeRoutes'));
app.use('/api/alerts', require('./routes/alertRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));



cron.schedule('*/30 * * * *', async () => {
  try {
    console.log('Running scheduled lake update...');
    const summary = await updateLakesCore();
    console.log('Lake update summary:', summary);
  } catch (err) {
    console.error('Scheduled update failed:', err);
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


process.on('SIGINT', async () => {
  console.log('Shutting down (SIGINT)...');
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Shutting down (SIGTERM)...');
  await mongoose.connection.close();
  process.exit(0);
});