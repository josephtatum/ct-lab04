const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  yearEstablished: {
    type: Number,
    required: true
  },

  artistsSigned: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Label', schema);
