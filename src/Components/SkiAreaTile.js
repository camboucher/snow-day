import React, { useState, useEffect} from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherWidget from './WeatherWidget.js'
import { getWeatherData } from '../../helperFuncs.js';

function SkiAreaTile(props) {

  const { id } = props;
  const [weatherData, setWeatherData] = useState();
  const { lat, long, name, website, currentDistance } = props.areaData;

  // useEffect(() => {
  //   return getWeatherData(lat, long)
  //   .then((res) => {
  //     setWeatherData(res.data);
  //   })
  // },[])

  return (
  <div class="container">
    <div class="row">
      <strong class="col-sm" style={{float: "left"}}>{name}</strong>
      <em class="col-sm" style={{float: "right"}}>{`${Math.round(currentDistance)} mi.`}</em>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="row">
          <a class="btn btn-primary btn-sm" style={{width: "40%", margin: "3px"}} role="button">Add to Map</a>
        </div>
        <div class="row">
          <a class="btn btn-primary btn-sm" style={{width: "40%", margin: "3px"}} role="button">Trail Map</a>
        </div>
        <div class="row">
          <a class="btn btn-primary btn-sm" style={{width: "40%", margin: "3px"}} role="button">Lift Lines</a>
        </div>
      </div>
      <div class="col-sm">
        <WeatherWidget weatherData={weatherData}/>
      </div>
    </div>
  </div>
  )
}

export default SkiAreaTile;
