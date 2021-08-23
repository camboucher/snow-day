import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SkiAreaContainer(props)  {

  return (
    <div>
      {props.userLocation}
    </div>
  )
};

export default SkiAreaContainer;