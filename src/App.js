import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkiAreasContainer from './Components/SkiAreasContainer.js';
import GoogleMapsComponent from './Components/GoogleMapsComponent.js';

function App(props) {

  const [location, setLocation] = useState([0,0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation([position.coords.latitude, position.coords.longitude])
    }, (err) => {
      console.log(`Unable to locate user's location`)
    });
  },[]);

  return (
    <>
      <h1>
        Snow Day
      </h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <SkiAreasContainer userLocation={location}/>
          </div>
          <div class="col-sm">
            <GoogleMapsComponent userLocation={location}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;