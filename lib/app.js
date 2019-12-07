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

app.get('/artists', (req, res) => {
  Artist.find()
    .then(foundArtists => {
      res.send(foundArtists);
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

app.put('/artist/:id', (req, res) => {
  Artist.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedArtist => {
      res.send(updatedArtist);
    });
});

app.delete('/artist/:id', (req, res) => {
  console.log(req)
  Artist.findByIdAndDelete(req.params.id)
    .then(deletedArtist => {
      res.send(deletedArtist);
    });
});

module.exports = app;
