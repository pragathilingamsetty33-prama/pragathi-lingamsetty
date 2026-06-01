import React from 'react';

const Education = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-card hover:shadow-lg hover:border-2 hover:border-gold-400 transition-all duration-300 cursor-default">
      <h2 className="text-sm font-bold text-navy-800 mb-3 flex items-center font-sans uppercase tracking-wide">
        <span className="mr-2">🎓</span> EDUCATION
      </h2>
      <div className="space-y-2">
        {/* Line 1: MTech */}
        <div className="flex justify-between items-center">
          <span className="text-navy-800 font-semibold font-sans">MTech</span>
          <span className="text-navy-800 font-sans">VFSTR · Pursuing</span>
        </div>
        {/* Line 2: MCA */}
        <div className="flex justify-between items-center">
          <span className="text-navy-800 font-semibold font-sans">MCA</span>
          <span className="text-navy-800 font-sans">VFSTR · 2026</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
