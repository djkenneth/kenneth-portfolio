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
              tech?.level === 'expert' ?'bg-gradient-accent text-white shadow-brand-sm'
                : tech?.level === 'advanced' ?'bg-accent/10 text-accent border border-accent/20' :'bg-muted text-text-secondary hover:bg-accent/5 hover:text-accent'
            }`}
          >
            {tech?.name}
            <span className="ml-2 text-xs opacity-75">
              {tech?.projectCount}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStackCloud;