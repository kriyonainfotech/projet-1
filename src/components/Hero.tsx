import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Clock, Star } from 'lucide-react';
import { Features } from './Features';
import { Link } from 'react-scroll';
export const Hero = () => {
  return (
    <div className="relative">
      {/* Top Banner */}
     

      {/* Main Hero Section */}
      <section className="min-h-[calc(70vh-48px)] bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center space-y-8"
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-yellow-400">Launch Your</span> First or Next
            </h1>

            {/* Subheading */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
                <span className="text-yellow-400">"High Converting Website"</span>
                <br />
                Instant Setup, Start Attracting
                <br />
                Customers Using Our Website Bundle Kit
              </h2>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="py-8"
            >
              <p className="text-xl md:text-2xl mb-4">
                Build Any Website In Just 3 Hours Using Our 2000+ Customizable Premium WordPress Template
              </p>
              
              <p className="text-lg md:text-xl">
                Effortlessly Create any Website In{' '}
                <span className="text-yellow-400 font-bold">50+ Different Niches</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <motion.a
                href="#explore"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                <Link 
        to="razorpay-button-container " 
        smooth={true} 
        duration={500}
      >
        Get Started Now
      </Link>
              </motion.a>
              
              <motion.a
                href="#learn-more"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-5 h-5" />
                <Link to="" smooth={true} duration={200}>View Features</Link>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none"  >
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <Features />
    </div>
  );
};