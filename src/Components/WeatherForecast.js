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
            <h6 id="forecast-day-main">{Math.round(weatherData.temp.day)}°</h6>
            {/* <i class="wi forecast-icon" id="forecast-day-1-icon"><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img></i> */}
          </div>
        </div>
        <div class="row">
            <p><span class="prob-precipitation" id="forecast-day-1-ht">Precip: {Math.round(weatherData.pop * 100)}%
             {weatherData.snow ? ' ' + Math.round(weatherData.snow) :
                weatherData.rain ? ' ' + Math.round(weatherData.rain) : ' ' + 0} in.</span></p>
        </div>
      </div>
  )
}

export default WeatherForecast;