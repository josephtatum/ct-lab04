const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  origin: {
    type: String,
    enum: ['North America', 'South America', 'Asia', 'Europe', 'Africa', 'Australia', 'Oceania'],
    required: true
  },

  shortDescription: {
    type: String,
    minlength: 25, 
    maxlength: 200,
    required: true
  }
});

module.exports = mongoose.model('Genre', schema);
