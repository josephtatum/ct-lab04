require('dotenv').config();
const PORT = process.env.PORT;
const app = require('./lib/app.js');

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT} 👀`);
});
