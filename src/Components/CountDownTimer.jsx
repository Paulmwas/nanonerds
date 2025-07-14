import { useState, useEffect, useCallback, useMemo } from 'react';

const CountdownTimer = () => {
  // Memoize the launch date calculation
  const launchDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + (date.getDay() + 6) % 10); // Next Friday
    date.setHours(0, 0, 0, 0); // Set to midnight
    return date;
  }, []);

  // Memoize the time calculation function
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = launchDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [launchDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="bg-purple-50 p-6 rounded-xl shadow-lg w-full ">
      <h3 className="text-2xl md:text-3xl font-bold text-purple-900 text-center mb-6">
        We Launch In
      </h3>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        {/* Days */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl md:text-4xl font-bold text-purple-700">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-purple-500 mt-1">
            Days
          </div>
        </div>
        
        {/* Hours */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl md:text-4xl font-bold text-purple-700">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-purple-500 mt-1">
            Hours
          </div>
        </div>
        
        {/* Minutes */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl md:text-4xl font-bold text-purple-700">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-purple-500 mt-1">
            Minutes
          </div>
        </div>
        
        {/* Seconds */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl md:text-4xl font-bold text-purple-700">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-purple-500 mt-1">
            Seconds
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all shadow-md">
          Get Notified on Launch
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;