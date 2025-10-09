import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories?.map((category, index) => (
        <motion.div
          key={category?.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Button
            variant={activeFilter === category?.id ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(category?.id)}
            className={`transition-all duration-300 ${
              activeFilter === category?.id
                ? "bg-gradient-accent border-0 text-white shadow-brand-md"
                : "hover:border-accent hover:text-accent"
            }`}
          >
            {category?.name}
            {category?.count > 0 && (
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeFilter === category?.id
                  ? "bg-white/20 text-white" :"bg-muted text-text-secondary"
              }`}>
                {category?.count}
              </span>
            )}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectFilter;