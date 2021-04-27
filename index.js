const express = require('express');
const connectDB = require('./config/connectDB');

const app = express();
connectDB();
app.use(express.json({ extended: true }));

const port = process.env.PORT || 4000;

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/customers', require('./routes/customers'));

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
