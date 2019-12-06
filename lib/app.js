const express = require('express');
const app = express();
const Artist = require('../lib/models/Artist.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ norskGreeting: 'Hei!' });
});

app.get('/artist/:id', (req, res) => {
  Artist.findById(req.params.id)
    .then(foundArtist => {
      res.send(foundArtist);
    });
});
  
app.post('/artist', (req, res) => {

  Artist.create({
    name: req.body.name,
    birthdate: req.body.birthdate,
    origin: req.body.origin
  })
    .then(createdArtist => {
      res.send(createdArtist);
    });
});

app.post('/', (req, res) => {

});

app.put('/', (req, res) => {

});

app.delete('/', (req, res) => {

});

module.exports = app;
