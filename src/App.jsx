import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import ProfileInfo from './ProfileInfo';

function App() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'JAKE', age: 28, email: 'jake@example.com', photo: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-avatar-job-businessman-flat-portrait-of-man-png-image_11608099.png', description: 'Software Engineer',
      about:'As a software engineer, I focus on solving complex technical challenges and building efficient, scalable software solutions. My role often involves coding, debugging, and collaborating with teams to deliver high-quality applications.', address: { lat: 37.7749, lng: -122.4194 } },
    { id: 2, name: 'SAMUEL', age: 32, email: 'samuel@example.com', photo: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-avatar-job-businessman-flat-portrait-of-man-png-image_11608100.png', description: 'UI/UX Designer',
      about:'As a UI/UX designer, I specialize in creating intuitive, user-centered designs that enhance the overall user experience. My work involves wireframing, prototyping, and collaborating closely with development teams to ensure visually appealing and functional interfaces.', address: { lat: 34.0522, lng: -118.2437 } },
    { id: 3, name: 'ANDERSON', age: 40, email: 'anderson@example.com', photo: 'https://png.pngtree.com/png-clipart/20240321/original/pngtree-avatar-job-student-flat-portrait-of-man-png-image_14639683.png', description: 'Project Manager',
      about:'As a project manager, I oversee the planning, execution, and successful completion of projects. My role involves coordinating teams, managing timelines and resources, and ensuring that project goals are met within scope and budget.', address: { lat: 40.7128, lng: -74.0060 } },
  ]);

  return (
    <Router>
      <div>
        <div className="container">
          <Routes>
            {/* Homepage route */}
            <Route path="/" element={<Homepage profiles={profiles} />} />

            {/* Profile Info route */}
            <Route path="/profile-info/:id" element={<ProfileInfo profiles={profiles} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


