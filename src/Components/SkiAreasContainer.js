import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import SkiAreaTile from './SkiAreaTile.js';
import SortButton from './SortButton.js';
import GoogleMapsComponent from './GoogleMapsComponent.js';
import axios from 'axios';
import { getSkiAreaData } from '../../helperFuncs.js';


function SkiAreasContainer(props)  {
  const [sortOption, setSortOption] = useState('closest');
  const [skiAreas, setSkiAreas] = useState([]);
  const [count, setCount] = useState(2);
  const [mappedSkiAreas, setMappedSkiAreas] = useState([{location:{lat:41.058804,lng:-74.19601},name:"Campgaw Mountain"}]);
  const { userLocation } = props;

  const addToMap = (skiArea) => {
    const currentMap = mappedSkiAreas;
    currentMap.push(skiArea);
    setMappedSkiAreas(currentMap);
  };

  useEffect(() => {
    getSkiAreaData(userLocation, count)
    .then((res) => { setSkiAreas(res) });
  },[userLocation]);

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <SortButton/>
          <div>
            {skiAreas.map((areaData) => {
              return <SkiAreaTile key={areaData.id} areaData={areaData} addToMap={addToMap} mappedSkiAreas={mappedSkiAreas}/>
            })}
          </div>
        </div>
        <div class="col-lg">
          <GoogleMapsComponent userLocation={userLocation} mappedSkiAreas={mappedSkiAreas}/>
        </div>
      </div>
    </div>
  )
};

export default SkiAreasContainer;