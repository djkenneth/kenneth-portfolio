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

      {/* ── Mobile: left-rail timeline ── Desktop: alternating center timeline ── */}
      <div className="relative">

        {/* Center line — desktop only */}
        <div className="hidden md:block absolute left-1/2 -translate-x-0.5 w-0.5 h-full bg-border" />

        {/* Left rail — mobile only */}
        <div className="md:hidden absolute left-5 top-0 w-0.5 h-full bg-border" />

        {timelineData?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative mb-10 md:mb-12 flex items-start md:items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* ── Timeline node ── */}
            {/* Mobile node — sits on the left rail */}
            <div className="md:hidden flex-shrink-0 w-10 flex justify-center">
              <div className="w-4 h-4 mt-5 bg-accent rounded-full border-4 border-background shadow-brand-sm z-10" />
            </div>

            {/* Desktop node — centred on the vertical line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-brand-sm z-10" />

            {/* ── Card ── */}
            {/* Mobile: full width after the node */}
            {/* Desktop: half-width on alternating sides */}
            <div className={`flex-1 md:w-5/12 md:flex-none ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
              <div className="bg-card rounded-xl p-5 shadow-brand-sm hover:shadow-brand-md transition-shadow duration-300 border border-border/50">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                    <Icon name={item?.icon} size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm md:text-base leading-tight">
                      {item?.title}
                    </h4>
                    <p className="text-xs text-text-secondary mt-0.5">{item?.period}</p>
                  </div>
                </div>

                <p className="text-sm text-text-primary leading-relaxed mb-3">
                  {item?.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item?.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-text-secondary px-2 py-0.5 rounded-full text-xs border border-border/60"
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
