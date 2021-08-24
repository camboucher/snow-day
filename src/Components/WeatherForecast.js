import React from 'react';
import '../../style.css';

function WeatherForecast(props) {
  const { weatherData, forecastDay } = props;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (

    <div class="col-md-3  day-weather-box">
      <div class="col-sm-12 day-weather-inner-box">
        <div class="col-sm-8 forecast-main">
          <p id="forecast-day-name">{days[(new Date().getDay() + forecastDay + 7) % 7]}</p>
          <div class="row">
            <h5 id="forecast-day-main">{weatherData.temp.day}°</h5>
            <i class="wi forecast-icon" id="forecast-day-1-icon"><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img></i>
            </div>
          </div>
          <div class="col-sm-4 forecast-min-low">
            <p><span class="high-temperature" id="forecast-day-1-ht">{weatherData.temp.max}</span></p>
            <p><span class="low-temperature" id="forecast-day-1-lt">{weatherData.temp.min}</span></p>
          </div>
        </div>
      </div>
  )
}

export default WeatherForecast;