import React from 'react';

const SoftSkills = () => {
  const softSkills = ['Team Player', 'Good Decision Maker', 'Strong Communicator', 'Active Listener'];

  return (
    <div className="bg-white rounded-2xl p-4 shadow-card hover:shadow-lg hover:border-2 hover:border-gold-400 transition-all duration-300 cursor-default">
      <h2 className="text-sm font-bold text-navy-800 mb-3 flex items-center font-sans uppercase tracking-wide">
        <span className="mr-2">★</span> SOFT SKILLS
      </h2>
      <div className="flex flex-wrap gap-2">
        {softSkills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-gray-100 text-navy-800 rounded-full text-xs font-medium font-sans"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
