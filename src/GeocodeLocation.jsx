import React, { useState } from 'react';
import './index.css'

function GeocodeLocation(){
  const [address, setAddress] = useState('');
  const [latLng, setLatLng] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY; // Ensure your API key is set

  const handleGeocode = async () => {
    setError(null); // Reset error state
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
      );
      const data = await response.json();

      // Check if results exist and set the latLng state
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setLatLng({ lat, lng });
      } else {
        setError("No location found for the provided address.");
        setLatLng({ lat: null, lng: null });
      }
    } catch (err) {
      console.error('Geocode error:', err);
      setError("An error occurred while fetching the location.");
    }
  };

  return (
    <div className='geocode-container'>
      <h2>Geocode Location</h2>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleGeocode}>Get Coordinates</button>
      
      {latLng.lat !== null && latLng.lng !== null && (
        <div>
          <h3>Coordinates:</h3>
          <p>Latitude: {latLng.lat}</p>
          <p>Longitude: {latLng.lng}</p>
        </div>
      )}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default GeocodeLocation;
