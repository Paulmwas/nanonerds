import React from 'react';

const CountdownTimer = () => {
  // Set your launch date (YYYY-MM-DD format)
  const launchDate = "2024-12-31";
  
  return (
    <div className="py-12 px-4 bg-purple-50 rounded-xl shadow-inner">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-2">
          Our Platform Launches In
        </h3>
        <p className="text-purple-700">
          Get ready for an exciting STEM learning experience!
        </p>
      </div>
      
      {/* TickCounter Widget Container */}
      <div 
        className="max-w-3xl mx-auto"
        style={{
          left: 0,
          width: '100%',
          height: 0,
          position: 'relative',
          paddingBottom: '25%',
          margin: '0 auto'
        }}
      >
        <iframe 
          src={`https://www.tickcounter.com/widget/countdown/${launchDate.replace(/-/g, '')}`}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            border: 0,
            overflow: 'hidden',
            borderRadius: '12px'
          }}
          title="STEM Platform Countdown"
          allowFullScreen
        />
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all">
          Notify Me on Launch
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;