const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ norskGreeting: 'Hei!' });
});

app.get('/artist', (req, res) => {
  res.send(res.body);
});

app.post('/artist', (req, res) => {
  res.send(req.body);
});

app.post('/', (req, res) => {

});

app.put('/', (req, res) => {

});

app.delete('/', (req, res) => {

});

module.exports = app;
