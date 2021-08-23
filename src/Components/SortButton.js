import React from 'react';

function SortButton(props) {
  return (
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Sort by
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item">Closest</a>
        <a class="dropdown-item">Most Snow</a>
        <a class="dropdown-item">Recent Snow</a>
      </div>
    </div>
  )
}

export default SortButton;
