import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SkiAreasContainer(props)  {

  return (
    <div>
      {props.userLocation}
    </div>
  )
};

export default SkiAreasContainer;