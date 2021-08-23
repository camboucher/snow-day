const express = require('express');
const path = require('path');
const db = require('../db');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'../dist')));

// routes

app.get('/ski-area-data', (req, res) => {
  db.query(`SELECT * from "ski-areas";`)
  .then((data) => {
    res.send(data.rows);
  })
  .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log('Server is listening on port 3000');
});