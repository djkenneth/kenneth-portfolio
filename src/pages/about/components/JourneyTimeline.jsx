import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const JourneyTimeline = () => {
  const journeySteps = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Started my journey into web development with HTML, CSS, and JavaScript. Built my first responsive website and discovered my passion for creating digital experiences.",
      icon: "Rocket",
      color: "bg-blue-500"
    },
    {
      year: "2022",
      title: "React Mastery",
      description: "Dove deep into React ecosystem, learning hooks, state management, and component architecture. Completed several projects using modern development practices.",
      icon: "Code",
      color: "bg-green-500"
    },
    {
      year: "2023",
      title: "Professional Growth",
      description: "Joined development teams, collaborated on enterprise projects, and honed skills in performance optimization, testing, and deployment strategies.",
      icon: "TrendingUp",
      color: "bg-purple-500"
    },
    {
      year: "2024",
      title: "Innovation Focus",
      description: "Embracing cutting-edge technologies, contributing to open-source projects, and mentoring junior developers while building scalable applications.",
      icon: "Lightbulb",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
          My Development Journey
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          From curious beginner to passionate professional, here's how I've grown as a developer and problem solver.
        </p>
      </motion.div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-8 lg:space-y-12">
          {journeySteps?.map((step, index) => (
            <motion.div
              key={step?.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                <div className={`w-8 h-8 ${step?.color} rounded-full flex items-center justify-center shadow-brand-md`}>
                  <Icon name={step?.icon} size={16} className="text-white" />
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 lg:ml-0 lg:w-5/12 ${
                index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
              }`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-brand-sm hover:shadow-brand-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl font-bold text-accent">{step?.year}</span>
                    <div className="h-px bg-border flex-1"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3">{step?.title}</h4>
                  <p className="text-text-primary leading-relaxed">{step?.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;