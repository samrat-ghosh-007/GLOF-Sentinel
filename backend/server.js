require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cron = require('node-cron');

const connectDB = require('./config/db');
const updateLakesCore = require('./services/lakeUpdater');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Seed initial data (optional)
const seedRecipients = require('./seed/seedRecipients');
seedRecipients();

// API routes
app.use('/api/lakes', require('./routes/lakeRoutes'));
app.use('/api/alerts', require('./routes/alertRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Scheduled task: run every 30 minutes
cron.schedule('*/30 * * * *', async () => {
  try {
    console.log('Running scheduled lake update...');
    const summary = await updateLakesCore();
    console.log('Lake update summary:', summary);
  } catch (err) {
    console.error('Scheduled update failed:', err);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Graceful shutdown on SIGINT or SIGTERM
async function shutdown(signal) {
  console.log(`Shutting down (${signal})...`);
  await mongoose.connection.close();
  process.exit(0);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
