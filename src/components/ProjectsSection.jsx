import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { ExternalLink, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = () => {
  const { projects } = PORTFOLIO_DATA;
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative bg-opacity-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div 
            className="glass rounded-3xl overflow-hidden mb-16 flex flex-col lg:flex-row group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] rounded-full text-xs font-bold mb-4 w-fit">
                <Activity size={14} /> Featured Project
              </div>
              <h3 className="text-3xl font-bold mb-4">{featuredProject.title}</h3>
              <p className="opacity-80 leading-relaxed mb-6">
                {featuredProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-2 opacity-70 uppercase tracking-wider">Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featuredProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-[var(--color-primary)]">▹</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                {featuredProject.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a href={featuredProject.demo} className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary)] text-white rounded-full font-medium hover:opacity-90 transition-opacity">
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a href={featuredProject.github} className="flex items-center gap-2 px-6 py-2.5 glass rounded-full font-medium hover:bg-[var(--border-color)] transition-colors">
                  <FaGithub size={18} /> Code
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 bg-[var(--color-bg-dark)]/5 min-h-[300px] lg:min-h-full relative overflow-hidden flex items-center justify-center p-8">
               {/* Abstract placeholder for project image/animation */}
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-tertiary)]/20"></div>
               
               <motion.div 
                 className="w-full max-w-md aspect-[4/3] glass rounded-2xl shadow-2xl border-4 border-white/10 relative z-10 flex items-center justify-center overflow-hidden"
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.4 }}
               >
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#1f2937] to-[#111827] flex flex-col">
                   <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="flex-1 p-6 flex flex-col justify-center items-center text-white/50">
                     <Activity size={48} className="mb-4 text-[var(--color-primary)] opacity-80" />
                     <p className="font-mono text-sm text-center px-4">Loading Data Dashboard...<br/><br/>[Interactive Preview Available in Demo]</p>
                   </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="glass p-8 rounded-3xl flex flex-col h-full group hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                  <ExternalLink size={24} />
                </div>
                <a href={project.github} className="opacity-50 hover:opacity-100 hover:text-[var(--color-primary)] transition-colors">
                  <FaGithub size={24} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">{project.title}</h3>
              <p className="opacity-70 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="text-xs font-mono opacity-60">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
