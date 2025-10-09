import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CertificationBadge = ({ certification, index, isVisible }) => {
  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 90
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const getBadgeColor = (level) => {
    switch (level) {
      case 'expert':
        return 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white';
      case 'advanced':
        return 'bg-gradient-to-br from-blue-500 to-blue-700 text-white';
      case 'intermediate':
        return 'bg-gradient-to-br from-green-500 to-green-700 text-white';
      default:
        return 'bg-gradient-to-br from-gray-500 to-gray-700 text-white';
    }
  };

  return (
    <motion.div
      variants={badgeVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="group cursor-pointer"
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`relative p-6 rounded-xl shadow-brand-md hover:shadow-brand-lg transition-all duration-300 ${getBadgeColor(certification?.level)}`}>
        {/* Badge Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full">
          <Icon name={certification?.icon} size={32} className="text-white" />
        </div>

        {/* Certification Name */}
        <h3 className="text-lg font-bold text-center mb-2">
          {certification?.name}
        </h3>

        {/* Issuer */}
        <p className="text-sm text-center opacity-90 mb-3">
          {certification?.issuer}
        </p>

        {/* Date & Status */}
        <div className="flex items-center justify-between text-xs opacity-80">
          <span className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{certification?.date}</span>
          </span>
          {certification?.verified && (
            <span className="flex items-center space-x-1">
              <Icon name="CheckCircle" size={12} />
              <span>Verified</span>
            </span>
          )}
        </div>

        {/* Level Badge */}
        <div className="absolute -top-2 -right-2">
          <span className={`px-2 py-1 text-xs font-bold rounded-full ${
            certification?.level === 'expert' ? 'bg-yellow-500 text-white' :
            certification?.level === 'advanced' ? 'bg-blue-500 text-white' :
            certification?.level === 'intermediate'? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
          }`}>
            {certification?.level?.toUpperCase()}
          </span>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default CertificationBadge;