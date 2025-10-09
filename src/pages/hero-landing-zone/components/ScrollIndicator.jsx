import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ScrollIndicator = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    onNavigate('/about');
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: scrollY < 100 ? 1 : 0, y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
    >
      <button
        onClick={handleScrollDown}
        className="flex flex-col items-center space-y-2 text-text-secondary hover:text-accent transition-colors duration-300 group"
        aria-label="Scroll to next section"
      >
        <span className="text-sm font-medium">Discover More</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-border group-hover:border-accent transition-colors duration-300"
        >
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </button>
    </motion.div>
  );
};

export default ScrollIndicator;