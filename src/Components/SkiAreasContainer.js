import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import SkiAreaTile from './SkiAreaTile.js';
import SortButton from './SortButton.js';
import axios from 'axios';
import { getSkiAreaData } from '../../helperFuncs.js';

function SkiAreasContainer(props)  {
  const [sortOption, setSortOption] = useState('closest');
  const [skiAreas, setSkiAreas] = useState([]);
  const [count, setCount] = useState(8);
  const { userLocation } = props;

  useEffect(() => {
    getSkiAreaData(userLocation, count)
    .then((res) => { setSkiAreas(res) });
  },[userLocation]);

  return (
    <>
      <SortButton/>
      <div>
        {skiAreas.map((areaData) => {
          return <SkiAreaTile key={areaData.id} areaData={areaData}/>
        })}
      </div>
    </>
  )
};

export default SkiAreasContainer;