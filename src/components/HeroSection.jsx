import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { Download, Mail, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { name, titles, introduction } = PORTFOLIO_DATA.personalInfo;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-[var(--color-tertiary)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[20%] left-[30%] w-72 h-72 bg-[var(--color-quinary)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-[var(--accent-color)]">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 text-[var(--accent-color)] break-words">{name}</h1>

            <div className="h-12 mb-6">
              <motion.div
                key={titles[0]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-medium text-gradient"
              >
                {titles[0]} {/* Can be expanded to cycle through titles */}
              </motion.div>
            </div>

            <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 opacity-80 leading-relaxed">
              {introduction}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="#projects" className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="/Ezhilkumaran_M_Resume-1.pdf" download="Ezhilkumaran_M_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 glass rounded-full font-medium hover:bg-[var(--border-color)] transition-colors flex items-center gap-2">
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-tertiary)] rounded-full blur-2xl opacity-40 animate-pulse"></div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/20 overflow-hidden glass p-2 z-10 shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt={name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-2xl flex items-center gap-2 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <span className="text-2xl">🚀</span>
                <span className="font-semibold text-sm">AI Enthusiast</span>
              </motion.div>

              <motion.div
                className="absolute top-4 -right-8 glass px-4 py-2 rounded-2xl flex items-center gap-2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <span className="text-2xl">💻</span>
                <span className="font-semibold text-sm">Developer</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
