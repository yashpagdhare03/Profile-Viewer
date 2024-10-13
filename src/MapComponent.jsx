import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapComponent({ address }) {
  const mapStyles = { height: "400px", width: "100%" };
  const apiKey = import.meta.env.VITE_API_KEY;
  const defaultCenter = {
    lat: address.lat, lng: address.lng
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;

