import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialProofSection = () => {
  const socialProofItems = [
    {
      id: 1,
      icon: "Github",
      label: "Open Source Contributions",
      value: "150+ commits",
      description: "Active contributor to React ecosystem"
    },
    {
      id: 2,
      icon: "Users",
      label: "Professional Network",
      value: "500+ connections",
      description: "LinkedIn verified developer profile"
    },
    {
      id: 3,
      icon: "Award",
      label: "Project Success Rate",
      value: "98% completion",
      description: "On-time delivery with quality standards"
    },
    {
      id: 4,
      icon: "TrendingUp",
      label: "Performance Improvements",
      value: "40% avg boost",
      description: "Consistent optimization results"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h4 className="text-lg font-semibold text-primary mb-2">
          Proven Track Record
        </h4>
        <p className="text-sm text-text-secondary max-w-md mx-auto">
          Building digital experiences that deliver measurable results and exceed expectations
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {socialProofItems?.map((item) => (
          <div 
            key={item?.id}
            className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-brand-md transition-all duration-300 hover-lift group"
          >
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors duration-300">
              <Icon 
                name={item?.icon} 
                size={20} 
                className="text-accent group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <div className="font-semibold text-primary text-lg mb-1">
              {item?.value}
            </div>
            <div className="text-sm font-medium text-text-primary mb-1">
              {item?.label}
            </div>
            <div className="text-xs text-text-secondary">
              {item?.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProofSection;