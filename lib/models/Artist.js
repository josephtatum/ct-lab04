const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  birthdate: {
    type: Number,
    required: true
  },

  origin: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Artist', schema);
