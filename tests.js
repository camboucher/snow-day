var db = require('./db');
const axios = require('axios');

function calcDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d * .621371;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}



const coords = [42.201817, -74.22167, 40.7273472, -73.9966976];

// const getWeatherData = (lat, lon) => {
//   axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid`)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
// };

// getWeatherData(coords[0], coords[1])
const getSkiMaps = (skiAreaId) => {
  axios.get(`https://skimap.org/SkiAreas/view/${skiAreaId}.json`)
  .then((res) => {
    // console.log(res.data)
    return res.data.ski_maps[0].media.image.url
  })
  .catch((err) => console.log(err))
};
getSkiMaps(315);
