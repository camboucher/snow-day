import React, { useState, useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkiAreaTile from './SkiAreaTile.js';

function SkiAreasContainer(props)  {
  const [sortOption, setSortOption] = useState('closest');

  return (
    <>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort by
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Closest</a>
          <a class="dropdown-item" href="#">Most Snow</a>
          <a class="dropdown-item" href="#">Recent Snow</a>
        </div>
      </div>
      <div>
        <SkiAreaTile/>
        <SkiAreaTile/>
        <SkiAreaTile/>
      </div>
    </>
  )
};

export default SkiAreasContainer;