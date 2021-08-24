import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap';

function TrailMapModal (props) {
  const { name } = props;

  return (
    <div class="modal fade" id="trailmap" tabindex="-1" role="dialog" aria-labelledby="trailmaplabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{name} Trail Map</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="https://skimap.org/data/315/3535/1618775636jpg_render.jpg"></img>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrailMapModal;