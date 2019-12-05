const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  artist: {
    type: String,
    required: true
  },

  release: {
    type: Number,
    required: true
  },

  label: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Album', schema);
