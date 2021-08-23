import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkiAreasContainer from './Components/SkiAreasContainer.js'

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
      <SkiAreasContainer userLocation={location}/>
    </>
  );
}

export default App;