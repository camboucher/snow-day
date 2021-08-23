import React, { useState, useEffect} from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherWidget from './WeatherWidget.js'

function SkiAreaTile(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">logo</div>
        <strong class="col-sm">mountain name</strong>
        <em class="col-sm" style={{float: "rigth"}}>XX miles away</em>
      </div>
      <div class="row">
        <WeatherWidget/>
      </div>
    </div>
  )
}

export default SkiAreaTile;
