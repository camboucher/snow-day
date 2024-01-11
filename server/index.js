const express = require('express');
const path = require('path');
const db = require('../db');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 6969;

app.use(express.static(path.join(__dirname,'../dist')));
app.use(cors());

// routes
app.get('/ski-area-data', (req, res) => {
  db.query(`SELECT * from "ski-areas" WHERE relevance = 1;`)
  .then((data) => {
    res.send(data.rows);
  })
  .catch((err) => console.log(err));
});

app.get('/ski-map', (req, res) => {
  axios.get(`https://skimap.org/SkiAreas/view/${req.query.id}.json`,{
    headers: {
      "Accept": "*/*"
    }
  })
  .then((data) => {
    console.log(data.data)
    res.send(data.data.ski_maps[0].media.image.url)
  })
  .catch((err) => console.log(err))
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
