import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Clock } from 'lucide-react';

export const ThinkAboutIt = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Just Think <span className="text-yellow-400">About It !</span>
          </h2>

          {/* Question */}
          <p className="text-2xl md:text-4xl text-white mb-12">
            How Much Time It will Take To Build A New Website From Scratch ?
          </p>

          {/* Imagine Text */}
          <div className="mb-12 space-y-4">
            <p className="text-xl md:text-2xl text-white">
              Imagine If You Have{' '}
              <span className="text-yellow-400 font-bold">
                2000+ Premium Elementor Website in 50+ Niches
              </span>
            </p>
            <p className="text-xl md:text-2xl text-white">
              You Just Need To Upload And Start Customizing, We Have Done The Hard Work For You
            </p>
          </div>

          {/* Timer Section */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Time is Running Out. Purchase Now !
            </h3>
            
            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-slate-800 p-4 rounded-lg min-w-[100px]">
                <div className="text-4xl font-bold text-yellow-400">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
              <div className="text-4xl font-bold text-yellow-400">:</div>
              <div className="bg-slate-800 p-4 rounded-lg min-w-[100px]">
                <div className="text-4xl font-bold text-yellow-400">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400">Minutes</div>
              </div>
              <div className="text-4xl font-bold text-yellow-400">:</div>
              <div className="bg-slate-800 p-4 rounded-lg min-w-[100px]">
                <div className="text-4xl font-bold text-yellow-400">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400">Seconds</div>
              </div>
            </div>
            
            <p className="text-xl text-white mb-8">
              Price Will Increase To{' '}
              <span className="text-red-500 font-bold">Rs 2,000</span>{' '}
              Once The Timer Hits To{' '}
              <span className="text-red-500 font-bold">Zero</span>.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center gap-4">
            <ArrowDown className="text-yellow-400 w-8 h-8 animate-bounce" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white text-xl md:text-2xl font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
            >
              Yes, I Want The DFY Website Bundles
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};