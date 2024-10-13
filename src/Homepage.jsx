import React, { useState, useEffect } from "react";
import ProfileList from './ProfileList';
import SearchBar from './SearchBar';  // Import the SearchBar component
import AdminPanel from './AdminPanel';
import GeocodeLocation from "./GeocodeLocation";

function Homepage() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'JAKE', age: 28, email: 'john@example.com', photo: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-avatar-job-businessman-flat-portrait-of-man-png-image_11608099.png', description: 'Software Engineer',
        about:'As a software engineer, I focus on solving complex technical challenges and building efficient, scalable software solutions. My role often involves coding, debugging, and collaborating with teams to deliver high-quality applications.', address: { lat: 37.7749, lng: -122.4194 } },
      { id: 2, name: 'SAMUEL', age: 32, email: 'jane@example.com', photo: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-avatar-job-businessman-flat-portrait-of-man-png-image_11608100.png', description: 'UI/UX Designer',
        about:'As a UI/UX designer, I specialize in creating intuitive, user-centered designs that enhance the overall user experience. My work involves wireframing, prototyping, and collaborating closely with development teams to ensure visually appealing and functional interfaces.', address: { lat: 34.0522, lng: -118.2437 } },
      { id: 3, name: 'ANDERSON', age: 40, email: 'sam@example.com', photo: 'https://png.pngtree.com/png-clipart/20240321/original/pngtree-avatar-job-student-flat-portrait-of-man-png-image_14639683.png', description: 'Project Manager',
        about:'As a project manager, I oversee the planning, execution, and successful completion of projects. My role involves coordinating teams, managing timelines and resources, and ensuring that project goals are met within scope and budget.', address: { lat: 40.7128, lng: -74.0060 } },
  ]);

  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  // Update the filteredProfiles when profiles change
  useEffect(() => {
    setFilteredProfiles(profiles);
  }, [profiles]);

  return (
    <div>
        <div className="head">
            <h1>Profile Viewer</h1>
            <SearchBar profiles={profiles} setFilteredProfiles={setFilteredProfiles} />
        </div>
            <ProfileList profiles={filteredProfiles} />
        < div className='order'>
            <AdminPanel profiles={profiles} setProfiles={setProfiles} />
            <GeocodeLocation />
        </div>
    </div>
  );
}

export default Homepage;
