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
        <div class="col-sm">logo</div>
        <strong class="col-sm">{name}</strong>
        <em class="col-sm" style={{float: "right"}}>{`${Math.round(currentDistance)} mi.`}</em>
      </div>
      <div class="row">
        <WeatherWidget weatherData={weatherData}/>
      </div>
    </div>
  )
}

export default SkiAreaTile;
