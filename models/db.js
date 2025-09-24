// models/db.js
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/capstone';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('✅ MongoDB connected successfully');
});

module.exports = mongoose;
