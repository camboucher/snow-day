import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import SkiAreaTile from './SkiAreaTile.js';
import SortButton from './SortButton.js';
import axios from 'axios';

function SkiAreasContainer(props)  {
  const [sortOption, setSortOption] = useState('closest');
  const [skiAreas, setSkiAreas] = useState();
  const { userLocation } = props;

  function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d * .621371;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  // useEffect(getSkiAreaData(), []);

  return (
    <>
      <SortButton/>
      <div>
        <SkiAreaTile/>
        <SkiAreaTile/>
        <SkiAreaTile/>
      </div>
    </>
  )
};

export default SkiAreasContainer;