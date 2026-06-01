import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import SoftSkills from './components/SoftSkills';
import FeaturedProjects from './components/FeaturedProjects';
import ActionLinks from './components/ActionLinks';

function App() {
  return (
    <div className="min-h-screen bg-warm-off-white py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section with Profile Card */}
        <div className="mb-4">
          <ProfileHeader />
        </div>

        {/* Sub-Cards: Education and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {/* Education Card */}
          <div className="md:col-span-1">
            <Education />
          </div>

          {/* Technical Skills Card */}
          <div className="md:col-span-1">
            <TechnicalSkills />
          </div>

          {/* Soft Skills Card */}
          <div className="md:col-span-1">
            <SoftSkills />
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-4">
          <FeaturedProjects />
        </div>

        {/* Connect Section */}
        <div className="mb-4">
          <ActionLinks />
        </div>

        {/* Copyright */}
        <div className="text-center text-navy-800 text-xs font-sans no-print">
          <p>© 2026 Pragathi Lingamsetty</p>
        </div>
      </div>
    </div>
  );
}

export default App;
