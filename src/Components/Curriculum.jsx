import { useState } from 'react';
import { faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import curriculumPDF from '../assets/curriculum.pdf'; // Import your PDF file

const Curriculum = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openPDF = () => {
    // Open PDF in new tab
    window.open(curriculumPDF, '_blank');
  };

  return (
    <section id="curriculum" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
          Our STEM Curriculum
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Download our comprehensive curriculum designed to ignite creativity and innovation in young minds.
        </p>

        {/* Animated Download Button */}
        <button
          onClick={openPDF}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group overflow-hidden px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg transition-all duration-500"
          style={{
            background: isHovered 
              ? 'radial-gradient(circle at center, #7e22ce, #6b21a8)' 
              : 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
          }}
        >
          {/* Floating PDF icon */}
          <div className={`absolute -top-4 -left-4 text-5xl text-white/20 transition-all duration-700 ${isHovered ? 'translate-x-8 translate-y-8' : ''}`}>
            <FontAwesomeIcon icon={faFilePdf} />
          </div>

          {/* Main button content */}
          <div className="relative z-10 flex items-center justify-center gap-3">
            <FontAwesomeIcon 
              icon={faDownload} 
              className={`transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`} 
            />
            <span>Download Curriculum (PDF)</span>
          </div>

          {/* Animated border */}
          <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-700 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}></div>

          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-full bg-white/10 blur-md transition-all duration-500 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-95'}`}></div>
        </button>

        {/* File info */}
        {/* <p className="mt-4 text-sm text-gray-500">
          File size: 2.4MB • Updated: June 2024
        </p> */}
      </div>
    </section>
  );
};

export default Curriculum;