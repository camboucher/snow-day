import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { TOKENS } from '../../config.js';

function GoogleMapsComponent(props) {
  const [rerender, setRerender] = useState(false);
  const [zoom, setZoom] = useState(13)

  const { userLocation, mappedSkiAreas } = props;
  const mapStyles = {
    height: "60vh",
    width: "100%"};

  const defaultCenter = {
    lat: userLocation[0], lng: userLocation[1]
  }

  return (
    <>
      <LoadScript
       googleMapsApiKey={TOKENS.googleMapsKey}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={zoom} center={defaultCenter}>
          {mappedSkiAreas.map((area) => {
            return <Marker title={area.name} position={area.location}/>
          })}
        </GoogleMap>
     </LoadScript>
      <input class="btn btn-primary" type="reset" value="Reset Map"></input>
    </>
  )
}

export default GoogleMapsComponent;