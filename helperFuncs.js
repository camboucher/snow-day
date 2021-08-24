const axios = require('axios');
import TOKENS from './config.js';

const { openWeatherToken } = TOKENS;

// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
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

const getSkiAreaData = (userLocation, count) => {
  return axios.get('http://localhost:3000/ski-area-data')
  .then((res) => {
    for (var i = 0; i < res.data.length; i ++) {
      const { lat, long } = res.data[i]
      res.data[i].currentDistance = calcDistance(userLocation[0], userLocation[1], lat, long);
    }
    res.data.sort((a, b) => {
      return a.currentDistance - b.currentDistance
    })
    return res.data.slice(0, count);
  })
  .catch((err) => console.log(err));
};

const getWeatherData = (lat, lon) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=${openWeatherToken}`)
}

export { getSkiAreaData, getWeatherData };

