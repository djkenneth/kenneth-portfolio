import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkillMeter = ({ skill, isVisible, delay = 0 }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedValue(skill?.proficiency);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill?.proficiency, delay]);

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

  const getColorByProficiency = (proficiency) => {
    if (proficiency >= 90) return '#10b981'; // success
    if (proficiency >= 70) return '#3b82f6'; // accent
    if (proficiency >= 50) return '#d69e2e'; // warning
    return '#dc2626'; // destructive
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="flex flex-col items-center p-4 bg-card rounded-lg border border-border hover:shadow-brand-md transition-shadow duration-300"
    >
      {/* Circular Progress */}
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-muted"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={getColorByProficiency(skill?.proficiency)}
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isVisible ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, delay: delay / 1000, ease: "easeOut" }}
          />
        </svg>
        
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: (delay / 1000) + 0.5 }}
            className="text-lg font-bold text-primary"
          >
            {animatedValue}%
          </motion.span>
        </div>
      </div>
      {/* Skill Name */}
      <h4 className="text-sm font-semibold text-primary text-center mb-1">
        {skill?.name}
      </h4>
      {/* Experience */}
      <p className="text-xs text-text-secondary text-center">
        {skill?.experience}
      </p>
    </motion.div>
  );
};

export default SkillMeter;