const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  birthdate: {
    type: String,
    required: true
  },

  origin: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Artist', schema);
