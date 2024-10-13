import React, { useState } from 'react';

function AdminPanel({ profiles, setProfiles }) {
  const [newProfile, setNewProfile] = useState({
    name: '',
    age: '',
    email: '',
    photo: '',
    description: '',
    about:'',
    address: { lat: '', lng: '' },
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === 'lat' || name === 'lng') {
      setNewProfile((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else {
      setNewProfile((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function addProfile() {
    const lat = parseFloat(newProfile.address.lat);
    const lng = parseFloat(newProfile.address.lng);

    if (
      newProfile.name &&
      newProfile.age &&
      newProfile.email &&
      newProfile.photo &&
      newProfile.description &&
      newProfile.about &&
      !isNaN(lat) &&
      !isNaN(lng)
    ) {
      setProfiles((prevProfiles) => {
        const updatedProfiles = [
          ...prevProfiles,
          {
            ...newProfile,
            id: prevProfiles.length + 1,
            address: { lat, lng },
          },
        ];
        console.log('Updated Profiles:', updatedProfiles);
        return updatedProfiles;
      });

      setNewProfile({
        name: '',
        age: '',
        email: '',
        photo: '',
        description: '',
        about: '',
        address: { lat: '', lng: '' },
      });
    } else {
      alert('Please fill out all fields and ensure latitude and longitude are valid numbers');
    }
  }

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <input name="name" value={newProfile.name} onChange={handleChange} placeholder="Name" />
      <input name="age" value={newProfile.age} onChange={handleChange} placeholder="Age" />
      <input name="email" value={newProfile.email} onChange={handleChange} placeholder="Email" />
      <input name="photo" value={newProfile.photo} onChange={handleChange} placeholder="Photo URL" />
      <input name="description" value={newProfile.description} onChange={handleChange} placeholder="Description" />
      <input name="about" value={newProfile.about} onChange={handleChange} placeholder="About"/>
      <input name="lat" value={newProfile.address.lat} onChange={handleChange} placeholder="Latitude" />
      <input name="lng" value={newProfile.address.lng} onChange={handleChange} placeholder="Longitude" />
      <button onClick={addProfile}>Add Profile</button>
    </div>
  );
}

export default AdminPanel;

