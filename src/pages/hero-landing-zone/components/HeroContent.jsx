import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';


const HeroContent = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Status Badge */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-success/10 border border-success/20 rounded-full text-success text-sm font-medium">
          <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
          Available for new opportunities
        </div>
      </motion.div>
      {/* Main Heading */}
      <motion.div variants={itemVariants} className="mb-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 letter-spacing-breathe">
          Frontend Developer
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-secondary mb-6">
          Building Digital Experiences
          <span className="block text-accent mt-2">That Matter</span>
        </h2>
      </motion.div>
      {/* Description */}
      <motion.div variants={itemVariants} className="mb-8">
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          I blend technical excellence with creative vision to craft modern web applications. 
          Specializing in React ecosystem, component architecture, and performance optimization 
          to deliver solutions that solve real problems.
        </p>
      </motion.div>
      {/* Key Skills Tags */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {[
            'React 18+',
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Node.js',
            'Performance Optimization'
          ]?.map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-medium text-text-primary hover:bg-accent/5 hover:border-accent/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
      {/* CTA Buttons */}
      <motion.div variants={ctaVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          variant="default"
          size="lg"
          onClick={() => onNavigate('/projects-portfolio')}
          iconName="FolderOpen"
          iconPosition="left"
          className="bg-gradient-accent border-0 text-white px-8 py-4 text-lg font-semibold hover-lift"
        >
          View My Work
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={() => onNavigate('/contact-collaboration-hub')}
          iconName="MessageCircle"
          iconPosition="left"
          className="px-8 py-4 text-lg font-semibold hover-lift"
        >
          Let's Collaborate
        </Button>
      </motion.div>
      {/* Social Proof */}
      <motion.div
        variants={itemVariants}
        className="mt-16 pt-8 border-t border-border"
      >
        <p className="text-sm text-text-secondary mb-4">Trusted by startups and established companies</p>
        <div className="flex justify-center items-center space-x-8 opacity-60">
          <div className="text-xs font-medium text-text-secondary">5+ Years Experience</div>
          <div className="w-1 h-1 bg-text-secondary rounded-full"></div>
          <div className="text-xs font-medium text-text-secondary">50+ Projects Delivered</div>
          <div className="w-1 h-1 bg-text-secondary rounded-full"></div>
          <div className="text-xs font-medium text-text-secondary">100% Client Satisfaction</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;