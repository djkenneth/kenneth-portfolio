import React from 'react';
import Icon from '../../../components/AppIcon';

const CopyrightSection = () => {
  const currentYear = new Date()?.getFullYear();
  
  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" }
  ];

  const handleLinkClick = (path) => {
    // For demo purposes, these would navigate to actual legal pages
    console.log(`Navigate to: ${path}`);
  };

  return (
    <div className="border-t border-border pt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        {/* Copyright */}
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <Icon name="Copyright" size={16} />
          <span>
            {currentYear} Kenneth Ivan Pineda. All rights reserved.
          </span>
        </div>

        {/* Legal Links */}
        <div className="flex items-center space-x-6">
          {legalLinks?.map((link, index) => (
            <React.Fragment key={link?.name}>
              <button
                onClick={() => handleLinkClick(link?.path)}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
              >
                {link?.name}
              </button>
              {index < legalLinks?.length - 1 && (
                <span className="text-text-secondary">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Built With */}
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <span>Built with</span>
          <Icon name="Heart" size={16} className="text-destructive animate-pulse" />
          <span>using React & Tailwind CSS</span>
        </div>
      </div>
      {/* Additional Info */}
      <div className="mt-6 pt-4 border-t border-border/50 text-center">
        <p className="text-xs text-text-secondary max-w-2xl mx-auto">
          This portfolio showcases modern web development practices including responsive design, 
          accessibility compliance, performance optimization, and semantic HTML. 
          Built as a testament to clean code and user-centered design principles.
        </p>
      </div>
    </div>
  );
};

export default CopyrightSection;