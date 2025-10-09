import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalCredentials = () => {
  const credentials = [
    {
      id: 1,
      category: "Frontend Mastery",
      items: [
        { name: "React 18+ Expert", level: "Advanced", icon: "Code" },
        { name: "TypeScript Proficient", level: "Intermediate", icon: "FileCode" },
        { name: "Next.js Specialist", level: "Advanced", icon: "Zap" }
      ]
    },
    {
      id: 2,
      category: "Development Tools",
      items: [
        { name: "Git & GitHub", level: "Expert", icon: "GitBranch" },
        { name: "Vite & Webpack", level: "Advanced", icon: "Package" },
        { name: "Testing Libraries", level: "Intermediate", icon: "CheckCircle" }
      ]
    },
    {
      id: 3,
      category: "Design Systems",
      items: [
        { name: "Tailwind CSS", level: "Expert", icon: "Palette" },
        { name: "Framer Motion", level: "Advanced", icon: "Play" },
        { name: "Responsive Design", level: "Expert", icon: "Smartphone" }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-success bg-success/10';
      case 'Advanced':
        return 'text-accent bg-accent/10';
      case 'Intermediate':
        return 'text-warning bg-warning/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h4 className="text-lg font-semibold text-primary mb-2">
          Technical Expertise
        </h4>
        <p className="text-sm text-text-secondary max-w-md mx-auto">
          Continuous learning and mastery of modern web development technologies
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {credentials?.map((category) => (
          <div key={category?.id} className="space-y-4">
            <h5 className="font-medium text-primary text-center pb-2 border-b border-border">
              {category?.category}
            </h5>
            <div className="space-y-3">
              {category?.items?.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:shadow-brand-sm transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                      <Icon 
                        name={item?.icon} 
                        size={16} 
                        className="text-accent" 
                      />
                    </div>
                    <span className="text-sm font-medium text-text-primary">
                      {item?.name}
                    </span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(item?.level)}`}>
                    {item?.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalCredentials;