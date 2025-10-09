import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectTimeline = ({ timelineData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
        Development Journey
      </h3>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-border"></div>
        
        {timelineData?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-brand-sm z-10"></div>
            
            {/* Content Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <div className="bg-card rounded-lg p-6 shadow-brand-sm hover:shadow-brand-md transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Icon name={item?.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{item?.title}</h4>
                    <p className="text-sm text-text-secondary">{item?.period}</p>
                  </div>
                </div>
                <p className="text-sm text-text-primary leading-relaxed mb-3">
                  {item?.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item?.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-text-secondary px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectTimeline;