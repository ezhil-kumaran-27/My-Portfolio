import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';

const AboutSection = () => {
  const { description, goal, strengths } = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)] opacity-10 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">My Journey</h3>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                {description}
              </p>
              
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Personal Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <motion.div 
                  key={index}
                  className="glass p-4 rounded-xl flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-quinary)] flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <span className="font-medium">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
