require('dotenv').config();
const PORT = process.env.PORT;
const app = require('./lib/app.js');

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT} 👀`);
});
