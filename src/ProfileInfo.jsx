// ProfileInfo.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function ProfileInfo({ profiles }) {
  const { id } = useParams(); // Get profile ID from the URL
  const profile = profiles.find((profile) => profile.id === parseInt(id));

  if (!profile) {
    return <div>Profile not found!</div>;
  }

  return (
    <div className="profile-info">
      <div className='type'>
        <h1>About</h1>
        <p className='ab'>{profile.about}</p>
      </div>
      <div>
        <img className='i' src={profile.photo} alt={profile.name} />
      </div>
      <div className='type'>
        <div className='Profile-detail'>
          <h1>{profile.name}</h1>
          <p>Age: {profile.age}</p>
          <p>Email: {profile.email}</p>
          <p>Description: {profile.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;

