import React from 'react';

function SortButton(props) {
  return (
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Sort by
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Distance</a></li>
        <li><a class="dropdown-item" href="#">Forecasted Snow</a></li>
        <li><a class="dropdown-item" href="#">Recent Snow</a></li>
      </ul>
    </div>
  )
}

export default SortButton;
