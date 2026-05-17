import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 relative bg-opacity-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Education</span></h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Education Timeline */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-[var(--color-primary)]" size={28} />
              Academic Background
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-primary)] before:via-[var(--color-secondary)] before:to-transparent">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-primary)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                    <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                    <h5 className="text-[var(--color-primary)] font-medium mb-2">{edu.institution}</h5>
                    <div className="flex justify-between text-sm opacity-80 mt-4">
                      <span>{edu.year}</span>
                      <span className="font-semibold">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="text-[var(--color-secondary)]" size={28} />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--color-secondary)] to-transparent opacity-20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                  <Award className="text-[var(--color-secondary)] mb-4 opacity-50" size={24} />
                  <h4 className="font-semibold text-md mb-2">{cert.name}</h4>
                  <p className="text-sm opacity-70 mb-2">{cert.provider}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--color-secondary)] text-white rounded-full">
                    {cert.grade}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
