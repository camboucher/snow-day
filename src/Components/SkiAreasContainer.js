import React, { useState, useEffect } from "react";
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
import SkiAreaTile from './SkiAreaTile.js';
import SortButton from './SortButton.js';

function SkiAreasContainer(props)  {
  const [sortOption, setSortOption] = useState('closest');

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