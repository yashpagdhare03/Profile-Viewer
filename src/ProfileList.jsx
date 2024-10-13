import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import MapComponent from './MapComponent';

function ProfileList({ profiles }) {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const showOnMap = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div>
      <div className="profile-list">
        {profiles.map(profiles => (
          <ProfileCard key={profiles.id} profile={profiles} onShowMap={showOnMap} />
        ))}
      </div>
      {selectedAddress && <MapComponent address={selectedAddress} />}
    </div>
  );
}

export default ProfileList;

