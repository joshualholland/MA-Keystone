import React, { useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
var keyRing = require("../../keys.json");
import '../scss/custom/layout/maps.scss';

export default function GoogleJSMap() {
  const apiKey = keyRing.Google.apiKey;

  function Map() {
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 33.434926, lng: -86.665405 }}
      >
        <Marker
          name={"Morgan Ashley Salon"}
          position={{ lat: 33.434926, lng: -86.665405 }} 
        />
      </GoogleMap>
    );
  }
  const Wrapper = withScriptjs(withGoogleMap(Map));
  const url = `https://maps.googleapis.com/maps/api/js?&key=${apiKey}`;

  return (
    <>
      <div className='mapsContainer'>
        <Wrapper
          googleMapURL={url}
          loadingElement={
            <div className="loadingElement"  />
          }
          containerElement={
            <div className="containerElement" />
          }
          mapElement={<div className="mapElement"  />}
        />
      </div>
    </>
  );
}
