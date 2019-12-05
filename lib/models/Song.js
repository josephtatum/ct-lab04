const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  
  song: {
    type: String,
    required: true
  },

  favorite: {
    type: Boolean
  }
});

module.exports = mongoose.model('Song', schema);
