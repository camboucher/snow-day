const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'../dist')));

// app.get('/test', (res, req) => {
//   res.send(navigator.geolocation.getCurrentPosition((data) => {
//     console.log(data)
//   }, (err) => {
//     console.log(err)
//   }))
// })

app.listen(port, () => {
  console.log('Server is listening on port 3000');
});