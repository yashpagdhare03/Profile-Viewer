import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileCard({ profile, onShowMap }) {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate(`/profile-info/${profile.id}`);
  };

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button className="btn draw-border" onClick={() => onShowMap(profile.address)}>
        Location
      </button>
      <button className="btn draw-border" onClick={handleInfoClick}>
        Info
      </button>
    </div>
  );
}

export default ProfileCard;

