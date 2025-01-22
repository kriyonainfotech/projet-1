import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowDown, User, Building2, MonitorSmartphone, Code2, Users, Briefcase } from 'lucide-react';

const features = [
  { text: '600+ Customizable Premium WordPress Template' },
  { text: 'Premium WordPress Plugins' },
  { text: 'Video Training Course On How To Use This Template' },
  { text: '500+ Premium Shopify Templates' },
  { text: 'Premium Whats App Pro Community Access' },
  { text: 'Provide 100% Best Price Guarantee' },
  { text: 'Provide Lifetime Access With Updates' },
  { text: '400+ Sales Page for Digital Product' },
];

const bonusFeatures = [
  { title: 'Premium Pro\nPlugins Kit', worth: '3000' },
  { title: 'Video Course\nOn How To Use\nTemplate', worth: '2000' },
  { title: '400+ Landing\nPage For\nDigital Product', worth: '3000' },
  { title: 'Whats App\nPro\nCommunity\nAccess', worth: '2000' },
];

const targetAudience = [
  { icon: User, text: 'Anyone Trying to lean how to built websites' },
  { icon: Building2, text: 'For Small Business Owner Who Want To Create Thier Website Itself' },
  { icon: MonitorSmartphone, text: 'WordPress Developers' },
  { icon: Code2, text: 'Web Design Agencies/ Web Developers' },
  { icon: Briefcase, text: 'Freelancers' },
  { icon: Users, text: 'People Who want to run a web design agency' },
];

export const Features = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59);
      const diff = endOfDay.getTime() - now.getTime();

      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to create and mount Razorpay button
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_PlaJNpU6R5HYCU');
    script.async = true;
    
    const form = document.createElement('form');
    form.appendChild(script);
    
    const buttonContainer = document.getElementById('razorpay-button-container');
    if (buttonContainer) {
      buttonContainer.innerHTML = '';
      buttonContainer.appendChild(form);
    }

    return () => {
      if (buttonContainer) {
        buttonContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Bonus Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12">
              Get It Now To Unlock Bonus{' '}
              <span className="text-yellow-400">Worth ₹ 10,000/-</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {bonusFeatures.map((bonus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-2 border-dashed border-yellow-400/30 rounded-lg p-6 text-center"
                >
                  <div className="text-white text-xl font-semibold mb-4 whitespace-pre-line">
                    {bonus.title}
                  </div>
                  <div className="text-yellow-400 text-lg font-bold">
                    Worth ₹{bonus.worth}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Who Should Buy Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">
              <span className="text-green-500">Who</span>{' '}
              <span className="text-white">Should Buy This Website Bundle Kit ?</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-6 last:border-0"
                >
                  <item.icon className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <p className="text-xl text-white text-left">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Section */}
          <div className="space-y-8" id='s1'>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Download, Install And Thanks Me Later As You'll Find It{' '}
              <span className="text-red-500">Value For Time And Money</span>
            </motion.h2>

            <p className="text-xl text-gray-300">
              Get Lifetime Access To Done-For-You Proven Website Templates With Step By Step Video Training
            </p>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Launch Offer : 90% OFF</h3>
              <div className="space-y-2">
                <p className="text-xl text-gray-400 line-through">General Price : ₹24,651/-</p>
                <p className="text-xl text-red-500 line-through">Offer Price : ₹3,999/-</p>
                <p className="text-4xl font-bold text-green-400">Today Only : ₹249/-</p>
              </div>
            </div>

            {/* Razorpay Button Container */}
            <div id="razorpay-button-container" className="flex justify-center pt-8">
              {/* Razorpay button will be mounted here */}
            </div>

          
          </div>
        </motion.div>
      </div>
    </section>
  );
};