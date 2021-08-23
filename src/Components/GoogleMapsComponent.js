import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import TOKENS from '../../config.js';

function GoogleMapsComponent(props) {

  const { userLocation } = props;
  const mapStyles = {
    height: "60vh",
    width: "100%"};

  const defaultCenter = {
    lat: userLocation[0], lng: userLocation[1]
    // lat: 41.3851, lng: 2.1734
  }

  return (
    <div>Replace this with commented out text later. Placeholder to save API calls</div>
    //  <LoadScript
    //    googleMapsApiKey={TOKENS.googleMapsKey}>
    //     <GoogleMap
    //       mapContainerStyle={mapStyles}
    //       zoom={13}
    //       center={defaultCenter}
    //     />
    //  </LoadScript>
  )
}

export default GoogleMapsComponent;