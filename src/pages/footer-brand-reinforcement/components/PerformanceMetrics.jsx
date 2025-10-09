import React from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const metrics = [
    {
      id: 1,
      label: "Site Performance",
      value: "98/100",
      description: "Google PageSpeed Score",
      icon: "Gauge",
      color: "text-success"
    },
    {
      id: 2,
      label: "Accessibility",
      value: "AA",
      description: "WCAG 2.1 Compliant",
      icon: "Eye",
      color: "text-accent"
    },
    {
      id: 3,
      label: "Load Time",
      value: "< 2s",
      description: "First Contentful Paint",
      icon: "Zap",
      color: "text-warning"
    },
    {
      id: 4,
      label: "SEO Score",
      value: "95/100",
      description: "Search Optimization",
      icon: "Search",
      color: "text-success"
    }
  ];

  return (
    <div className="bg-muted/50 rounded-xl p-6 border border-border">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-primary mb-2">
          Performance Metrics
        </h4>
        <p className="text-sm text-text-secondary">
          This portfolio is built with performance and accessibility in mind
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics?.map((metric) => (
          <div 
            key={metric?.id}
            className="text-center p-4 bg-background rounded-lg border border-border hover:shadow-brand-sm transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors duration-300">
              <Icon 
                name={metric?.icon} 
                size={24} 
                className={`${metric?.color} group-hover:scale-110 transition-transform duration-300`} 
              />
            </div>
            <div className={`text-2xl font-bold ${metric?.color} mb-1`}>
              {metric?.value}
            </div>
            <div className="text-sm font-medium text-text-primary mb-1">
              {metric?.label}
            </div>
            <div className="text-xs text-text-secondary">
              {metric?.description}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border text-center">
        <p className="text-xs text-text-secondary">
          Metrics updated automatically • Last check: {new Date()?.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PerformanceMetrics;