import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={filterVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories?.map((category) => (
        <motion.button
          key={category?.id}
          variants={itemVariants}
          onClick={() => onCategoryChange(category?.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 touch-target ${
            activeCategory === category?.id
              ? 'bg-accent text-white shadow-brand-md'
              : 'bg-card text-text-primary hover:bg-accent/10 hover:text-accent border border-border'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon name={category?.icon} size={18} />
          <span>{category?.name}</span>
          <span className={`px-2 py-0.5 text-xs rounded-full ${
            activeCategory === category?.id
              ? 'bg-white/20 text-white' :'bg-muted text-text-secondary'
          }`}>
            {category?.count}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;