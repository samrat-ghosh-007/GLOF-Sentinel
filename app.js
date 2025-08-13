const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const lakeRoutes = require('./routes/lakeRoutes');
const alertRoutes = require('./routes/alertRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/lakes', lakeRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/simulate', require('./routes/simulateRoutes')); 

module.exports = app;
