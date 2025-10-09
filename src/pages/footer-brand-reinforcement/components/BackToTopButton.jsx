import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement?.scrollTop;
      const maxHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Progress Ring */}
        <svg 
          className="absolute inset-0 w-12 h-12 transform -rotate-90" 
          viewBox="0 0 36 36"
        >
          <path
            className="text-border"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-accent transition-all duration-300"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={`${scrollProgress}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        
        {/* Button */}
        <Button
          variant="default"
          size="icon"
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-background border-2 border-border shadow-brand-lg hover:shadow-brand-xl hover:border-accent transition-all duration-300 hover-lift"
          aria-label="Back to top"
        >
          <Icon 
            name="ArrowUp" 
            size={20} 
            className="text-accent" 
          />
        </Button>
      </div>
    </div>
  );
};

export default BackToTopButton;