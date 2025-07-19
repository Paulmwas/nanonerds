import { faChalkboardUser, faCertificate, faHandsHelping, faLaptopCode, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

const TrainerTraining = () => {
  const trainingPrograms = [
    {
      icon: faChalkboardUser,
      title: "STEM Teaching Methodologies",
      description: "Master innovative teaching techniques for robotics, coding, and electronics with hands-on practice sessions.",
      duration: "2 Weeks"
    },
    {
      icon: faLaptopCode,
      title: "Curriculum Development",
      description: "Learn to design engaging STEM curricula aligned with educational standards and student needs.",
      duration: "1 Week"
    },
    {
      icon: faCertificate,
      title: "Certification Program",
      description: "Become a certified STEM trainer with our internationally recognized accreditation program.",
      duration: "4 Weeks"
    },
    {
      icon: faHandsHelping,
      title: "Mentorship Program",
      description: "Receive ongoing support from industry experts to enhance your teaching practice.",
      duration: "Ongoing"
    }
  ];

  const benefits = [
    { icon: faUsers, text: "Join our network of 250+ certified trainers" },
    { icon: faCertificate, text: "Receive internationally recognized certification" },
    { icon: faLightbulb, text: "Access to exclusive teaching resources and tools" },
    { icon: faHandsHelping, text: "Continuous professional development opportunities" }
  ];

  // Initialize scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.training-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="trainer-training" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="training-item opacity-0 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Training for STEM Trainers
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Elevate your teaching skills with our comprehensive STEM training program designed specifically for educators.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <div 
              key={index}
              className="training-item opacity-0 bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                  <FontAwesomeIcon 
                    icon={program.icon} 
                    className="text-purple-600 text-2xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <div className="bg-purple-50 inline-block px-3 py-1 rounded-full text-sm text-purple-700 font-medium">
                  Duration: {program.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="training-item opacity-0 bg-purple-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Train With Us?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-start opacity-0 training-item"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <FontAwesomeIcon 
                    icon={benefit.icon} 
                    className="text-yellow-300 mt-1 mr-4 text-xl" 
                  />
                  <span className="text-lg">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="training-item opacity-0 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">Program Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-700 font-bold">01</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Hands-on Workshops</h4>
                  <p className="text-gray-600">Practical sessions with the latest STEM teaching tools</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-700 font-bold">02</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Peer Learning</h4>
                  <p className="text-gray-600">Collaborate with fellow educators across East Africa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-700 font-bold">03</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Digital Resources</h4>
                  <p className="text-gray-600">Access to our exclusive online teaching portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="training-item opacity-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Teaching?</h3>
          <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
            Join our next cohort of STEM educators and become a certified trainer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-700 hover:bg-purple-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300">
              Request Information
            </button>
          </div>
        </div>
      </div>

      {/* Add to your global CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TrainerTraining;