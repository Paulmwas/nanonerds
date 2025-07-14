import heroBg from '../assets/hero-bg.webp';

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-purple-900/40"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-purple-900/70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Igniting Young <span className="text-purple-300">Innovators</span> in STEM!
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 animate-fadeIn delay-100">
            Hands-on robotics, coding & science programs for schools allover Kenya
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-200">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              Download Curriculum
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;