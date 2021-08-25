import React from 'react';
import '../../style.css';

function WeatherForecast(props) {
  const { weatherData, forecastDay } = props;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (

    <div class="col-md day-weather-box">
        <div class="col-md forecast-main">
          <p id="forecast-day-name">{days[(new Date().getDay() + forecastDay + 7) % 7]}</p>
          <div class="row">
            <h6 id="forecast-day-main">{weatherData.temp.day}°</h6>
            {/* <i class="wi forecast-icon" id="forecast-day-1-icon"><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img></i> */}
          </div>
        </div>
        <div class="row">
          <div class="col-md forecast-min-low">
            <p><span class="prob-precipitation" id="forecast-day-1-ht">{weatherData.pop * 100}%</span></p>
          </div>
          <div class="col-md forecast-min-low">
            <p><span class="precip-amount" id="forecast-day-1-lt">{
              weatherData.snow ? Math.round(weatherData.snow) :
                weatherData.rain ? Math.round(weatherData.rain) : 0} in</span></p>
          </div>
      </div>
      </div>
  )
}

export default WeatherForecast;