import React, { useState } from 'react';

const ProfileHeader = () => {
  // CHANGE YOUR PROFILE PICTURE HERE - Replace the URL below with your image URL
  const profileImageUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face";
  const useCustomImage = false; // Set to true to use your custom image URL above, false to use silhouette
  
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-card hover:shadow-lg hover:border-2 hover:border-gold-400 transition-all duration-300 cursor-default">
      {/* Status Badge */}
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-badge-green-bg text-badge-green-text text-sm font-medium mb-4">
        <span className="w-2 h-2 bg-badge-green-text rounded-full mr-2"></span>
        Open to new opportunities
      </div>

      {/* Profile Block - Left-to-Right Layout */}
      <div className="flex items-start justify-between mb-4">
        {/* Text (Left Column) */}
        <div className="flex-1 pr-4">
          <h1 className="text-3xl font-bold text-navy-800 mb-2 font-serif">Pragathi Lingamsetty</h1>
          <p className="text-base text-navy-800 font-sans font-medium">
            Passionate Developer · Backend & Software Engineering
          </p>
        </div>

        {/* Profile Image (Right Column) */}
        <div className="flex-shrink-0 relative">
          <div 
            className="w-24 h-24 rounded-full border-4 border-gold-400 flex items-center justify-center bg-gray-200 overflow-hidden cursor-pointer"
            onClick={handleImageClick}
          >
            {useCustomImage ? (
              // Custom profile image
              <img
                src={profileImageUrl}
                alt="Pragathi Lingamsetty"
                className="w-full h-full object-cover"
              />
            ) : (
              // Grey silhouette placeholder
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Biography Text */}
      <p className="text-navy-800 font-sans font-medium leading-relaxed text-sm">
        A dedicated software developer driven by a passion for building robust, scalable applications. With a strong foundation in backend architecture and a continuous desire to learn, I thrive on solving complex problems and delivering impactful digital solutions.
      </p>

      {/* Full Screen Modal */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleCloseFullScreen}
        >
          <div className="relative max-w-4xl max-h-4xl p-4">
            <img
              src={profileImageUrl}
              alt="Pragathi Lingamsetty - Full Screen"
              className="max-w-full max-h-screen object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={handleCloseFullScreen}
              className="absolute top-2 right-2 text-white text-4xl hover:text-gray-300 focus:outline-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
