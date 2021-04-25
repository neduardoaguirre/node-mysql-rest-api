const express = require('express');
const database = require('./config/database');

const app = express();

database
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
