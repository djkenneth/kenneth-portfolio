import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const LearningTimeline = ({ timelineData, isVisible }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8">
        {timelineData?.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex items-start space-x-6"
          >
            {/* Timeline Dot */}
            <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-brand-sm ${
              item?.type === 'certification' ? 'bg-success text-white' :
              item?.type === 'course' ? 'bg-accent text-white' :
              item?.type === 'project'? 'bg-warning text-white' : 'bg-muted text-text-secondary'
            }`}>
              <Icon name={item?.icon} size={20} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-card rounded-lg p-6 border border-border shadow-brand-sm hover:shadow-brand-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">
                      {item?.title}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {item?.organization}
                    </p>
                  </div>
                  <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
                    {item?.date}
                  </span>
                </div>
                
                <p className="text-sm text-text-primary mb-4">
                  {item?.description}
                </p>

                {/* Skills/Technologies */}
                {item?.skills && (
                  <div className="flex flex-wrap gap-2">
                    {item?.skills?.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Certificate Link */}
                {item?.certificateUrl && (
                  <div className="mt-4">
                    <a
                      href={item?.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors duration-200"
                    >
                      <Icon name="ExternalLink" size={14} />
                      <span>View Certificate</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LearningTimeline;