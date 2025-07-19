import { useState, useEffect, useRef } from 'react';

// Import team images (you'll need to replace these with your actual images)
import peter from '../assets/peter.jpg';
import billy from '../assets/billy1.jpg';
import mary from '../assets/manager.jpg';
import paul from '../assets/paul.jpg';
import maureen from '../assets/maureen.jpg'

const Team = () => {
  const teamMembers = [
    {
      name: "Peter Kirumba",
      role: "Full stack, Embedded Systems",
      image: peter,
      linkedin: "https://www.linkedin.com/in/peter-kirumba-20a25628a/",
      bio: "Expert in IoT systems and web development with 8+ years experience.",
      skills: ["JavaScript", "Python", "Embedded C", "React", "Node.js"]
    },
    {
      name: "Billy Bradley",
      role: "Mechatronics Trainer",
      image: billy,
      linkedin: "#",
      bio: "Passionate robotics educator specializing in hands-on STEM programs.",
      skills: ["Arduino", "3D Printing", "Curriculum Design", "Robotics"]
    },
    {
      name: "Mary Njoroge",
      role: "Outreach Manager",
      image: mary,
      linkedin: "#",
      bio: "Connects schools with cutting-edge STEM resources.",
      skills: ["Community Engagement", "Grant Writing", "Project Management"]
    },
    {
      name: "Paul Mwangi",
      role: "Curriculum Development",
      image: paul,
      linkedin: "https://www.linkedin.com/in/paul-mwangi-software/",
      bio: "Develops interactive learning platforms.",
      skills: ["React", "EdTech", "Instructional Design", "UI/UX"]
    },
        {
      name: "Maureen Wanjiku",
      role: "Marketing and Finance",
      image: maureen,
      linkedin: "https://www.linkedin.com/in/maureen-wanjiku-356a6734a/",
      bio: "Drives business growth through strategic marketing and financial planning.",
      skills: ["Digital Marketing", "Financial Analysis", "Brand Strategy", "Budgeting"]
    }
  ];

  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll effect for mobile carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [teamMembers.length]);

  const getRoleIcon = (role) => {
    if (role.includes("Full stack")) return "fas fa-code";
    if (role.includes("Mechatronics")) return "fas fa-robot";
    if (role.includes("Outreach")) return "fas fa-handshake";
    return "fas fa-user-tie";
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      
      <section 
        ref={sectionRef}
        id="our-team" 
        className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-100 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-indigo-200 rotate-45 opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-purple-900 mb-4 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Team</span>
            </h2>
            <p className={`text-lg md:text-xl text-purple-700 mb-2 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Passionate STEM experts dedicated to transforming education
            </p>
            <div className={`w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden mb-8">
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden mx-4">
              <div className="relative h-80">
                <img 
                  src={teamMembers[currentIndex].image} 
                  alt={teamMembers[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{teamMembers[currentIndex].name}</h3>
                  <div className="flex items-center mb-2">
                    <i className={`${getRoleIcon(teamMembers[currentIndex].role)} mr-2 text-purple-300`}></i>
                    <p className="text-purple-200">{teamMembers[currentIndex].role}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-700 mb-4">{teamMembers[currentIndex].bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[currentIndex].skills.map((skill, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={teamMembers[currentIndex].linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <i className="fab fa-linkedin mr-2"></i>
                  Connect on LinkedIn
                </a>
              </div>

              {/* Navigation arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 rounded-full p-2 shadow-lg transition-all"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 rounded-full p-2 shadow-lg transition-all"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-purple-600' : 'bg-purple-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <div className="flex items-center">
                      <i className={`${getRoleIcon(member.role)} mr-2 text-purple-300 text-sm`}></i>
                      <p className="text-purple-200 text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{member.bio}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Modal */}
        {selectedMember && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div 
              className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <button 
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
                  onClick={() => setSelectedMember(null)}
                >
                  <i className="fas fa-times"></i>
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{selectedMember.name}</h3>
                  <div className="flex items-center">
                    <i className={`${getRoleIcon(selectedMember.role)} mr-2 text-purple-300`}></i>
                    <p className="text-purple-200">{selectedMember.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedMember.bio}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-purple-800 mb-3 text-lg">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, i) => (
                      <span key={i} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={selectedMember.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                  >
                    <i className="fab fa-linkedin mr-2"></i>
                    Connect on LinkedIn
                  </a>
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="inline-flex items-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <i className="fas fa-times mr-2"></i>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Team;