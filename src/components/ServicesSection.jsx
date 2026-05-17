import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import * as Icons from 'lucide-react';

const ServicesSection = () => {
  const { services } = PORTFOLIO_DATA;

  // Function to dynamically render Lucide icons
  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName] || Icons.Code;
    return <IconComponent size={32} className="text-[var(--color-primary)]" />;
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Services</span></h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {renderIcon(service.icon)}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="opacity-70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
