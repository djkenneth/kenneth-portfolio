import React from 'react';


const BrandLogo = ({ onClick, className = "" }) => {
  return (
    <div 
      className={`flex items-center cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center shadow-brand-md group-hover:shadow-brand-lg transition-all duration-300 hover-lift">
          <span className="text-white font-bold text-xl font-jetbrains-mono">K</span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background animate-pulse"></div>
      </div>
      <div className="ml-4">
        <h3 className="text-2xl font-bold text-primary letter-spacing-breathe group-hover:text-accent transition-colors duration-300">
          Kenneth Ivan Pineda
        </h3>
        <p className="text-sm text-text-secondary -mt-1 group-hover:text-accent/80 transition-colors duration-300">
          Web Developer & Creative Technologist
        </p>
      </div>
    </div>
  );
};

export default BrandLogo;