import React, { useState, useEffect} from 'react';
import '../../style.css';
import WeatherForecast from './WeatherForecast.js'

function WeatherWidget(props) {
  const { current, daily } = props.weatherData;
  const { name, currentDistance } = props

  return (
    <>
    <div class="container" id="wrapper">
      <div class="container-fluid" id="current-weather">
        <div class="row">

      {/* <!-- Left panel --> */}
      <div class="col-md-4 col-sm-5">
        <h5><span id="cityName">{name}</span></h5>
        <h6 id="localDate">{new Date().toDateString()}</h6>
        <h6><i>{Math.round(currentDistance)} miles away</i></h6>
        {/* <h5 id="localTime">{`${new Date().getHours() % 12}:${new Date().getMinutes()}`}</h5> */}
        <a id="refreshButton" href="#"><i class="fa fa-refresh fa-fw" aria-hidden="true"></i>Refresh</a>
      </div>

      {/* <!-- Center panel --> */}
      <div class="col-md-5 col-sm-7" style={{margin: "10px auto", padding:"0"}}>
        <div class="row">
          <i class="wi" id ="main-icon"><img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}></img></i>
          <div class="col-md">
            <span id="mainTemperature">{Math.round(current.temp)}</span>
            <p id="tempDescription">{current.weather[0].main}</p>
          </div>
          <p class="col-md"><a id="farenheit">°F</a></p>
        </div>
      </div>

      {/* <!-- Right panel --> */}
      <div class="col-xs-12 col-sm-12 col-md-3 row" id="leftpanel">
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Current Prec: <span id="humidity"></span>{Math.round(current.snow ?
            Math.round(current.snow) : current.rain ? Math.round(current.rain) : 0)}in</h6>
        </div>
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Past 48hr: <span id="wind"></span>{Math.round(current.wind_speed)}in.</h6>
        </div>
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Wind: <span id="wind"></span>{Math.round(current.wind_speed)} mph</h6>
        </div>
        {/* <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Visibility: <span id="mainTempLow"></span>{(current.visibility * 3.3).toLocaleString()}ft</h6>
        </div> */}
      </div>
    </div>
    </div>
  </div>
  <div class="container justify-content-center">
    <div class="row">
      {[1, 2, 3].map((day) => {
        return <WeatherForecast weatherData={daily[day]} forecastDay={day}/>
      })}
    </div>
  </div>

</>
  )
}

export default WeatherWidget;

// F = 9/5(K - 273) + 32