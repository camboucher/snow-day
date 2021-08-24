import React, { useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap';
import WeatherWidget from './WeatherWidget.js';
import WeatherForecast from './WeatherForecast.js';
import { getWeatherData, getTrailMap } from '../../helperFuncs.js';

function SkiAreaTile(props) {

  const { addToMap, mappedSkiAreas } = props;
  const { id, lat, long, name, website, currentDistance } = props.areaData;
  const [weatherData, setWeatherData] = useState({
    "lat": 40.7273,
    "lon": -73.9967,
    "timezone": "America/New_York",
    "timezone_offset": -14400,
    "current": {
      "dt": 1629904239,
      "sunrise": 1629886592,
      "sunset": 1629934794,
      "temp": 85.68,
      "feels_like": 88.56,
      "pressure": 1020,
      "humidity": 54,
      "dew_point": 67.12,
      "uvi": 5.73,
      "clouds": 1,
      "visibility": 10000,
      "wind_speed": 1.99,
      "wind_deg": 315,
      "wind_gust": 4,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ]
    },
    "daily": [
      {
        "dt": 1629907200,
        "sunrise": 1629886592,
        "sunset": 1629934794,
        "moonrise": 1629941700,
        "moonset": 1629897720,
        "moon_phase": 0.61,
        "temp": {
          "day": 86.16,
          "min": 75.58,
          "max": 92.5,
          "night": 82.9,
          "eve": 90.9,
          "morn": 75.58
        },
        "feels_like": {
          "day": 88.12,
          "night": 84.52,
          "eve": 90.36,
          "morn": 76.32
        },
        "pressure": 1020,
        "humidity": 50,
        "dew_point": 65.35,
        "wind_speed": 6.96,
        "wind_deg": 335,
        "wind_gust": 14.85,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 1,
        "pop": 0,
        "uvi": 7.7
      },
      {
        "dt": 1629907200,
        "sunrise": 1629886592,
        "sunset": 1629934794,
        "moonrise": 1629941700,
        "moonset": 1629897720,
        "moon_phase": 0.61,
        "temp": {
          "day": 86.16,
          "min": 75.58,
          "max": 92.5,
          "night": 82.9,
          "eve": 90.9,
          "morn": 75.58
        },
        "feels_like": {
          "day": 88.12,
          "night": 84.52,
          "eve": 90.36,
          "morn": 76.32
        },
        "pressure": 1020,
        "humidity": 50,
        "dew_point": 65.35,
        "wind_speed": 6.96,
        "wind_deg": 335,
        "wind_gust": 14.85,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 1,
        "pop": 0,
        "uvi": 7.7
      },
      {
        "dt": 1629907200,
        "sunrise": 1629886592,
        "sunset": 1629934794,
        "moonrise": 1629941700,
        "moonset": 1629897720,
        "moon_phase": 0.61,
        "temp": {
          "day": 86.16,
          "min": 75.58,
          "max": 92.5,
          "night": 82.9,
          "eve": 90.9,
          "morn": 75.58
        },
        "feels_like": {
          "day": 88.12,
          "night": 84.52,
          "eve": 90.36,
          "morn": 76.32
        },
        "pressure": 1020,
        "humidity": 50,
        "dew_point": 65.35,
        "wind_speed": 6.96,
        "wind_deg": 335,
        "wind_gust": 14.85,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 1,
        "pop": 0,
        "uvi": 7.7
      },
      {
        "dt": 1629907200,
        "sunrise": 1629886592,
        "sunset": 1629934794,
        "moonrise": 1629941700,
        "moonset": 1629897720,
        "moon_phase": 0.61,
        "temp": {
          "day": 86.16,
          "min": 75.58,
          "max": 92.5,
          "night": 82.9,
          "eve": 90.9,
          "morn": 75.58
        },
        "feels_like": {
          "day": 88.12,
          "night": 84.52,
          "eve": 90.36,
          "morn": 76.32
        },
        "pressure": 1020,
        "humidity": 50,
        "dew_point": 65.35,
        "wind_speed": 6.96,
        "wind_deg": 335,
        "wind_gust": 14.85,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 1,
        "pop": 0,
        "uvi": 7.7
      },
      {
        "dt": 1629993600,
        "sunrise": 1629973051,
        "sunset": 1630021101,
        "moonrise": 1630029480,
        "moonset": 1629987840,
        "moon_phase": 0.64,
        "temp": {
          "day": 90.91,
          "min": 78.13,
          "max": 93.36,
          "night": 84.4,
          "eve": 89.33,
          "morn": 78.13
        },
        "feels_like": {
          "day": 93.61,
          "night": 88.77,
          "eve": 92.16,
          "morn": 78.94
        },
        "pressure": 1020,
        "humidity": 44,
        "dew_point": 65.14,
        "wind_speed": 11.36,
        "wind_deg": 193,
        "wind_gust": 14.38,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": 17,
        "pop": 0,
        "uvi": 7.78
      },
    ]
  });

  const handleAddToMap = (e) => {
    e.preventDefault();
    // if (JSON.stringify(mappedSkiAreas).indexOf(JSON.stringify({
    //   location: {
    //   lat: lat,
    //   lng: long,
    // },
    // name: name})) !== -1) {
      addToMap({
      location: {
        lat: lat,
        lng: long,
      },
      name: name
  })}
  // useEffect(() => {
  //   return getWeatherData(lat, long)
  //   .then((res) => {
  //     setWeatherData(res.data);
  //   })
  // },[])

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          {/* <WeatherWidget weatherData={weatherData} name={name} currentDistance={currentDistance}/> */}
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <a class="btn btn-primary btn-sm" style={{margin: "3px"}} role="button" onClick={handleAddToMap}>Add to Map</a>
        </div>
        <div class="col-sm">
          <a class="btn btn-primary btn-sm" style={{margin: "3px"}} role="button" onClick={(e) => {
            e.preventDefault();
            getTrailMap(id);}}>Trail Map</a>
        </div>
        <div class="col-sm">
          <a class="btn btn-primary btn-sm" style={{margin: "3px"}} role="button">Lift Lines</a>
        </div>
      </div>
    </div>
  )
}

export default SkiAreaTile;