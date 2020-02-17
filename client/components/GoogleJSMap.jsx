import React, { useEffect } from "react";
import config from '../../keys.json';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import '../scss/custom/layout/maps.scss';

const GoogleJSMap = React.memo(() =>{
  const apiKey = "AIzaSyB0XGTo6bEz5CbH5CD49hfNGpNFNyOUNFY";

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
      <div className='container-fluid px-0 mx-0'>
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
})

export default GoogleJSMap;
