const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.json({ success: 1, message: 'This is resp api working' });
});

app.listen(4000, () => {
  console.log('Server running');
});
