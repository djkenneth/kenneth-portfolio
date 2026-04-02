import React from 'react';
import { motion } from 'framer-motion';

const TechStackCloud = ({ technologies, onTechFilter }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-8 mb-16 shadow-brand-sm"
    >
      <h3 className="text-xl font-semibold text-primary mb-6 text-center">
        Technologies Used
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {technologies?.map((tech, index) => (
          <motion.button
            key={tech?.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTechFilter && onTechFilter(tech?.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              tech?.level === 'expert'
                ? 'bg-gradient-accent text-dark shadow-brand-sm'
                : tech?.level === 'advanced'
                ? 'bg-accent/15 text-accent border border-accent/30 dark:bg-accent/20 dark:text-blue-300 dark:border-blue-400/30'
                : 'bg-muted text-text-secondary border border-border hover:bg-accent/5 hover:text-accent dark:hover:text-blue-300'
            }`}
          >
            {tech?.name}
            <span className={`ml-2 text-xs font-semibold ${
              tech?.level === 'expert' ? 'text-dark/90' : 'opacity-60'
            }`}>
              {tech?.projectCount}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStackCloud;