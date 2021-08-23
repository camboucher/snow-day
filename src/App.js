import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  const [location, setLocation] = useState([0,0]);

  const locationSuccess = (position) => {
    setLocation[position.coords.latitude, position.coords.longitude]
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(locationSuccess, (err) => {
      console.log(`Unable to locate user's location`)
    });
  });

  return (
    <>
      <h1>
        Hello
      </h1>
      <button type="button" class="btn btn-primary">
        This is a bootstrap button
      </button>
    </>
  );
}

export default App;