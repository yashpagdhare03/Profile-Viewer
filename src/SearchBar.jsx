// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ profiles, setFilteredProfiles }){
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(){
    const filtered = profiles.filter(profile => 
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="search-bar">
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search profiles" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
