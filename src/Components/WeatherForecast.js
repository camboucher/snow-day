import React from 'react';
// import 'bootstrap';
import '../../style.css';

function WeatherForecast(props) {
  const { current, daily } = props.weatherData;
  const { name, currentDistance } = props
  return (
    <div class="container" id="wrapper">
      <div class="container-fluid" id="current-weather">
        <div class="row">

      {/* <!-- Right panel --> */}
      <div class="col-md-4 col-sm-5">
        <h5><span id="cityName">{name}</span></h5>
        <h6 id="localDate">{new Date().toDateString()}</h6>
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

      {/* <!-- Left panel --> */}
      <div class="col-xs-12 col-sm-12 col-md-3 row" id="leftpanel">
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Humidity: <span id="humidity"></span>{Math.round(current.humidity)}%</h6>
        </div>
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Wind: <span id="wind"></span>{Math.round(current.wind_speed)} mph</h6>
        </div>
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>High: <span id="mainTempHot"></span>{Math.round(daily[0].temp.max)}°</h6>
        </div>
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Low: <span id="mainTempLow"></span>{Math.round(daily[0].temp.min)}°</h6>
        </div>
      </div>

  {/* <!-- Modal --> */}
  {/* <div class="modal fade" id="protocol-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <p>Due to weather api restrictions, data can only be shown via HTTP request.</p>
          <p>Sorry for the inconvenience.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div> */}

  {/* <!-- 4 days forecast --> */}
  {/* <div class="container-fluid">
    <div class="row" style="padding: 2px;"> */}

      {/* <!-- Day 1 --> */}
      {/* <div class="col-md-3 col-sm-6 day-weather-box">
        <div class="col-sm-12 day-weather-inner-box">
          <div class="col-sm-8 forecast-main">
            <p id="forecast-day-1-name"></p>
            <div class="row">
              <h5 id="forecast-day-1-main">°</h5>
              <i class="wi forecast-icon" id="forecast-day-1-icon"></i>
            </div>
          </div>
          <div class="col-sm-4 forecast-min-low">
            <p><spam class="high-temperature" id="forecast-day-1-ht"></spam></p>
            <p><spam class="low-temperature" id="forecast-day-1-lt"></spam></p>
          </div>
        </div>
      </div> */}

      {/* <!-- Day 2 --> */}
      {/* <div class="col-md-3 col-sm-6 day-weather-box">
        <div class="col-sm-12 day-weather-inner-box">
          <div class="col-sm-8 forecast-main">
            <p id="forecast-day-2-name"></p>
            <div class="row">
              <h5 id="forecast-day-2-main">°</h5>
              <i class="wi forecast-icon" id="forecast-day-2-icon"></i>
            </div>
          </div>
          <div class="col-sm-4 forecast-min-low">
            <p><spam class="high-temperature" id="forecast-day-2-ht"></spam></p>
            <p><spam class="low-temperature" id="forecast-day-2-lt"></spam></p>
          </div>
        </div>
      </div> */}

      {/* <!-- Day 3 --> */}
      {/* <div class="col-md-3 col-sm-6 day-weather-box">
        <div class="col-sm-12 day-weather-inner-box">
          <div class="col-sm-8 forecast-main">
            <p id="forecast-day-3-name"></p>
            <div class="row">
              <h5 id="forecast-day-3-main">°</h5>
              <i class="wi forecast-icon" id="forecast-day-3-icon"></i>
            </div>
          </div>
          <div class="col-sm-4 forecast-min-low">
            <p><spam class="high-temperature" id="forecast-day-3-ht"></spam></p>
            <p><spam class="low-temperature" id="forecast-day-3-lt"></spam></p>
          </div>
        </div>
      </div> */}

      {/* <!-- Day 4 --> */}
      {/* <div class="col-md-3 col-sm-6 day-weather-box">
        <div class="col-sm-12 day-weather-inner-box">
          <div class="col-sm-8 forecast-main">
            <p id="forecast-day-4-name"></p>
            <div class="row">
              <h5 id="forecast-day-4-main">°</h5>
              <i class="wi forecast-icon" id="forecast-day-4-icon"></i>
            </div>
          </div>
          <div class="col-sm-4 forecast-min-low">
            <p><spam class="high-temperature" id="forecast-day-4-ht"></spam></p>
            <p><spam class="low-temperature" id="forecast-day-4-lt"></spam></p>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  </div>
  )
}

export default WeatherForecast;