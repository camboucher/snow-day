import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkiAreasContainer from './Components/SkiAreasContainer.js';
import GoogleMapsComponent from './Components/GoogleMapsComponent.js';
import NavBar from './Components/NavBar.js';
import Pagination from './Components/Pagination.js';

function App(props) {

  const [location, setLocation] = useState([40.7273472, -73.9966976]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation([position.coords.latitude, position.coords.longitude])
    }, (err) => {
      console.log(`Unable to locate user's location`)
    });
  },[]);

  return (
    <>
    <div>
      <NavBar/>
    </div>
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
      <Pagination/>
    </>
  );
}

export default App;