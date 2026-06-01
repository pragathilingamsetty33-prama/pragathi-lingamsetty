import React from 'react';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Smart Attendance using AI',
      techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'AI Integration'],
      bullets: [
        'Developed an automated, AI-driven verification system for seamless and contactless attendance tracking.',
        'Engineered real-time data processing to eliminate manual entry errors and ensure high reliability.',
        'Built a robust backend architecture to securely manage and scale institutional data records.',
        'Streamlined administrative workflows by delivering instant, accurate reporting and analytics.'
      ],
      repoLink: 'https://github.com/pragathilingamsetty33-prama/smartAttendance'
    },
    {
      title: 'Prama Secure Messaging Platform',
      techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
      bullets: [
        'Architected a secure, end-to-end messaging platform guaranteeing strict data confidentiality.',
        'Implemented real-time, low-latency data exchange protocols for seamless instant communication.',
        'Designed a highly scalable backend to efficiently handle concurrent user connections and message routing.',
        'Created an intuitive, responsive user interface balancing robust security with an exceptional user experience.'
      ],
      repoLink: 'https://github.com/pragathilingamsetty33-prama/prama'
    }
  ];

  return (
    <div>
      <h2 className="text-sm font-bold text-navy-800 mb-3 font-sans uppercase tracking-wide">FEATURED PROJECTS</h2>
      
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-card hover:shadow-lg hover:border-2 hover:border-gold-400 transition-all duration-300 cursor-default">
            <h3 className="text-xl font-bold text-navy-800 mb-2 font-serif">{project.title}</h3>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-2">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1.5 bg-beige-100 border-2 border-navy-800 text-navy-800 rounded-full text-xs font-medium font-sans"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bullet Points */}
            <ul className="space-y-1 mb-3">
              {project.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="text-navy-800 text-sm font-sans flex items-start">
                  <span className="text-navy-800 mr-2 mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* View Repository Button */}
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-200 text-navy-800 rounded-lg text-sm font-medium font-sans hover:bg-gray-300 transition-colors"
            >
              <span className="print-show-url hidden">{project.repoLink}</span>
              <span className="no-print">View Repository</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 no-print" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
