import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${skill?.proficiency}%`,
      transition: {
        duration: 1.2,
        delay: (index * 0.1) + 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative p-6 bg-card rounded-xl border border-border shadow-brand-sm hover:shadow-brand-md transition-all duration-300 ${
        isHovered ? 'transform -translate-y-2' : ''
      }`}>
        {/* Skill Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
            skill?.category === 'frontend' ? 'bg-blue-50 text-blue-600' :
            skill?.category === 'backend' ? 'bg-green-50 text-green-600' :
            skill?.category === 'tools' ? 'bg-purple-50 text-purple-600' :
            skill?.category === 'design'? 'bg-pink-50 text-pink-600' : 'bg-gray-50 text-gray-600'
          }`}>
            <Icon name={skill?.icon} size={24} />
          </div>
          
          {skill?.isNew && (
            <span className="px-2 py-1 text-xs font-medium bg-success/10 text-success rounded-full">
              New
            </span>
          )}
        </div>

        {/* Skill Name & Description */}
        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
          {skill?.name}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {skill?.description}
        </p>

        {/* Proficiency Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-text-secondary">Proficiency</span>
            <span className="text-xs font-semibold text-primary">{skill?.proficiency}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <motion.div
              variants={progressVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className={`h-full rounded-full ${
                skill?.proficiency >= 90 ? 'bg-success' :
                skill?.proficiency >= 70 ? 'bg-accent' :
                skill?.proficiency >= 50 ? 'bg-warning': 'bg-destructive'
              }`}
            />
          </div>
        </div>

        {/* Experience & Projects */}
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{skill?.experience}</span>
          </span>
          {/* <span className="flex items-center space-x-1">
            <Icon name="FolderOpen" size={12} />
            <span>{skill?.projects} projects</span>
          </span> */}
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-accent opacity-0 rounded-xl transition-opacity duration-300 ${
          isHovered ? 'opacity-5' : ''
        }`} />
      </div>
    </motion.div>
  );
};

export default SkillCard;