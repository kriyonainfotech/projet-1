import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  {
    title: '600+ Customizable Premium WordPress Template',
    category: 'left'
  },
  {
    title: 'Premium WordPress Plugins',
    category: 'left'
  },
  {
    title: 'Video Training Course On How To Use This Template',
    category: 'left'
  },
  {
    title: '500+ Premium Shopify Templates',
    category: 'left'
  },
  {
    title: 'Premium Whats App Pro Community Access',
    category: 'right'
  },
  {
    title: 'Provide 100% Best Price Guarantee',
    category: 'right'
  },
  {
    title: 'Provide Lifetime Access With Updates',
    category: 'right'
  },
  {
    title: '400+ Sales Page for Digital Product',
    category: 'right'
  }
];

export function WhatYouGet() {
  return (
    <section className="bg-slate-900 py-20 ">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Here's What You Will Get :
        </motion.h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            {features
              .filter(feature => feature.category === 'left')
              .map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-6 rounded-lg border-2 border-dashed border-slate-700"
                >
                  <div className="bg-green-500/20 rounded-full p-1 mt-1">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-lg text-gray-300">{feature.title}</p>
                </motion.div>
              ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {features
              .filter(feature => feature.category === 'right')
              .map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-6 rounded-lg border-2 border-dashed border-slate-700"
                >
                  <div className="bg-green-500/20 rounded-full p-1 mt-1">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-lg text-gray-300">{feature.title}</p>
                </motion.div>
              ))}
          </div>
        </div>

        {/* CTA Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white text-2xl md:text-3xl font-bold px-12 py-6 rounded-lg shadow-lg transition-colors duration-300"
          >
            Yes I want The Website Bundle
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}