import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 relative bg-opacity-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-primary)] before:via-[var(--color-secondary)] before:to-transparent">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-secondary)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-secondary)] to-transparent opacity-10 rounded-bl-full"></div>
                
                <h3 className="font-bold text-xl mb-1 text-[var(--color-primary)]">{exp.title}</h3>
                <h4 className="font-semibold text-md mb-2">{exp.company}</h4>
                <div className="inline-block px-3 py-1 bg-[var(--border-color)] rounded-full text-xs font-medium mb-4">
                  {exp.duration}
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm opacity-80">
                      <span className="text-[var(--color-primary)] mt-1">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
