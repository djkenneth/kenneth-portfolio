import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-xl overflow-hidden shadow-brand-md hover:shadow-brand-lg transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Live Demo Badge */}
        {project?.liveUrl && (
          <div className="absolute top-4 right-4">
            <div className="bg-success/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span>Live</span>
            </div>
          </div>
        )}

        {/* Overlay Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center space-x-4"
        >
          {project?.liveUrl && (
            <Button
              variant="default"
              size="sm"
              iconName="ExternalLink"
              iconPosition="left"
              className="bg-white/90 text-primary hover:bg-white"
              onClick={() => window.open(project?.liveUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
          {project?.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              iconPosition="left"
              className="bg-white/90 text-primary border-white/20 hover:bg-white"
              onClick={() => window.open(project?.githubUrl, '_blank')}
            >
              Code
            </Button>
          )}
        </motion.div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
              {project?.title}
            </h3>
            <p className="text-sm text-text-secondary">{project?.category}</p>
          </div>
          {project?.featured && (
            <div className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium">
              Featured
            </div>
          )}
        </div>

        {/* Project Description */}
        <p className="text-text-primary text-sm leading-relaxed mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.techStack?.slice(0, 4)?.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-muted text-text-secondary px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project?.techStack?.length > 4 && (
            <span className="text-text-secondary text-xs px-2 py-1">
              +{project?.techStack?.length - 4} more
            </span>
          )}
        </div>

        {/* Project Metrics */}
        {project?.metrics && (
          <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted rounded-lg">
            {project?.metrics?.map((metric, metricIndex) => (
              <div key={metricIndex} className="text-center">
                <div className="text-lg font-semibold text-accent">{metric?.value}</div>
                <div className="text-xs text-text-secondary">{metric?.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Project Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4 text-xs text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{project?.year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{project?.duration}</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            className="text-accent hover:text-accent/80"
          >
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;