import React from 'react';

const Skills = () => {
  const technicalSkills = ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Python'];
  const softSkills = ['Team Player', 'Good Decision Maker', 'Strong Communicator', 'Active Listener'];

  return (
    <div className="bento-card bg-white rounded-2xl p-5 shadow-md hover:shimmer-effect border-2 border-transparent transition-all duration-300">
      <h2 className="text-lg font-bold text-navy-800 mb-3 flex items-center">
        <span className="mr-2">⚡</span> SKILLS
      </h2>
      
      {/* Technical Skills */}
      <div className="mb-3">
        <h3 className="text-xs font-semibold text-sapphire-600 mb-2 uppercase tracking-wide">Technical</h3>
        <div className="flex flex-wrap gap-2">
          {technicalSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-navy-800 text-white rounded-full text-xs font-medium hover:bg-sapphire-600 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-xs font-semibold text-sapphire-600 mb-2 uppercase tracking-wide">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-white border-2 border-navy-800 text-navy-800 rounded-full text-xs font-medium hover:bg-navy-800 hover:text-white transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
