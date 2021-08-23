import React, { useState, useEffect} from 'react';
import 'bootstrap';

function WeatherWidget(props) {
  return (
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="..." alt="Card image cap"></img>
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default WeatherWidget;