import { faBullseye, faEye, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const MissionSection = () => {
  const [missionText, setMissionText] = useState('');
  const fullMissionText = "To train 1000+ students and trainers in cutting-edge STEM disciplines through hands-on learning experiences.";
  
  // Initialize scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          // Start typewriter effect when mission card comes into view
          if (entry.target.classList.contains('mission-card')) {
            startTypewriter();
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.mission-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Typewriter effect for mission text
  const startTypewriter = () => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullMissionText.length) {
        setMissionText(fullMissionText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Adjust typing speed here (lower = faster)
  };

  return (
    <section id="mission" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mission-item opacity-0 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        {/* Mission Card with Typewriter Effect */}
        <div className="mission-item mission-card opacity-0 flex flex-col md:flex-row items-center mb-16 bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-purple-200 transition-all duration-500">
          <div className="md:w-1/3 bg-purple-600 p-8 text-white flex flex-col items-center justify-center">
            <FontAwesomeIcon 
              icon={faBullseye} 
              className="text-5xl mb-6 pulse-animate text-purple-300" 
            />
            <h3 className="text-2xl font-bold">Mission</h3>
          </div>
          <div className="md:w-2/3 p-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="text-purple-600 font-semibold">
                {missionText || "\u00A0"} {/* &nbsp; to maintain height when empty */}
              </span>
              <span className="typewriter-caret">|</span>
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="mission-item opacity-0 flex flex-col md:flex-row-reverse items-center mb-16 bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-purple-200 transition-all duration-500 delay-100">
          <div className="md:w-1/3 bg-purple-700 p-8 text-white flex flex-col items-center justify-center">
            <FontAwesomeIcon 
              icon={faEye} 
              className="text-5xl mb-6 float-animate" 
            />
            <h3 className="text-2xl font-bold">Vision</h3>
          </div>
          <div className="md:w-2/3 p-8">
            <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
              "To ignite a lifelong passion for science, technology, engineering, and mathematics 
              in every child, empowering the next generation of innovators."
            </blockquote>
          </div>
        </div>

        {/* Motto Card */}
        <div className="mission-item opacity-0 relative bg-purple-900 rounded-xl p-10 text-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-700/30 ping-animate"></div>
          
          <div className="relative z-10">
            <FontAwesomeIcon 
              icon={faLightbulb} 
              className="text-5xl mb-6 bounce-in text-yellow-300" 
            />
            <h3 className="text-2xl font-bold text-white mb-4">Our Motto</h3>
            <p className="text-3xl md:text-4xl font-bold text-purple-200">
              Inspiring Young Minds, <span className="text-yellow-300">Building Bright Futures.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Add these styles to your global CSS */}
      <style jsx>{`
        .typewriter-caret {
          animation: blink-caret 0.75s step-end infinite;
          color: #9333ea; /* purple-600 */
          font-weight: bold;
        }
        
        @keyframes blink-caret {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default MissionSection;