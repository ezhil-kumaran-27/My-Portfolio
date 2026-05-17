import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const { name, linkedin, github, instagram } = PORTFOLIO_DATA.personalInfo;
  
  return (
    <footer className="glass border-t border-[var(--border-color)] py-8 mt-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-center md:text-left">
          <p className="font-bold text-lg mb-1">{name}</p>
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-1 text-sm font-medium opacity-80">
          Built with <Heart size={16} className="text-red-500 fill-current" /> Passion and Creativity
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-[var(--color-primary)] transition-colors">Home</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-[var(--color-primary)] transition-colors">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-[var(--color-primary)] transition-colors">Contact</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
