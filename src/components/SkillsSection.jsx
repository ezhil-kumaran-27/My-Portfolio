import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { Code2, Layout, Database, Wrench, Lightbulb, Users } from 'lucide-react';

const SkillsSection = () => {
  const { programming, frameworks, database, tools, coreConcepts, softSkills } = PORTFOLIO_DATA.skills;

  const skillCategories = [
    { title: "Programming", icon: <Code2 />, skills: programming, color: "var(--color-primary)" },
    { title: "Frameworks & Tech", icon: <Layout />, skills: frameworks, color: "var(--color-secondary)" },
    { title: "Databases", icon: <Database />, skills: database, color: "var(--color-tertiary)" },
    { title: "Tools", icon: <Wrench />, skills: tools, color: "var(--color-primary)" },
    { title: "Core Concepts", icon: <Lightbulb />, skills: coreConcepts, color: "var(--color-secondary)" },
    { title: "Soft Skills", icon: <Users />, skills: softSkills, color: "var(--accent-color)" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="glass p-6 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Decorative background element */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700 blur-2xl"
                style={{ backgroundColor: category.color }}
              ></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-2 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, idx) => (
                  <motion.span 
                    key={idx}
                    variants={itemVariants}
                    className="px-4 py-2 bg-[var(--bg-color)] rounded-full text-sm font-medium border border-[var(--border-color)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
