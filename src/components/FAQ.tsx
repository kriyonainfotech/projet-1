import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Are These Template Editable ?',
    answer: 'Yes, These Are 100% Customisable & Editable Templates On Elementor.'
  },
  {
    question: 'Can I Use These Templates On My Existing Website?',
    answer: 'Yes, The Templates In This Bundle Can Be Used On Existing WordPress Websites And Can Be Easily Customized To Match Your Brand And Style.'
  },
  {
    question: 'How Can I Get Support If I Have Any Questions Or Issues?',
    answer: 'If You Have Any Doubth Please Feel Free To Contact Us +91 9219318383 And Email Id – hello@omkarshukla.com'
  },
  {
    question: 'Are The Templates Mobile-Friendly?',
    answer: 'Yes, All Themes Are Responsive And Mobile-Friendly, Ensuring That Your Website Will Look Great And Function Seamlessly On Any Device.'
  },
  {
    question: 'Can I Use The Templates For Commercial Purpose?',
    answer: 'Yes, You Can Use The Themes For Commercial Purpose And Sell The Website Or Services Built On These Templates. However, Please Check The Specific License Agreement Of The Theme You Are Using.'
  },
  {
    question: 'I Am A Completely Non-Techy Guy, Is This For Me?',
    answer: 'Absolutely, You Don\'t Need Any Prior Technical Knowledge To Use These Templates. You Will Be Able To Build A Website After Watching The Crash Course Provided With This Bundle.'
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-green-500">Frequently</span>{' '}
            <span className="text-white">Asked Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-800/50 rounded-lg"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6">
                  <h3 className="text-lg font-semibold text-white pr-6">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-white transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};