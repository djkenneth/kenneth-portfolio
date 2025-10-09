import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophyPrinciples = [
    {
      icon: "Target",
      title: "Problem-First Approach",
      description: "I believe in understanding the problem deeply before writing a single line of code. Every solution should address real user needs and business objectives.",
      color: "text-blue-500"
    },
    {
      icon: "Users",
      title: "Human-Centered Design",
      description: "Technology should serve people, not the other way around. I prioritize accessibility, usability, and inclusive design in every project I build.",
      color: "text-green-500"
    },
    {
      icon: "Zap",
      title: "Performance Matters",
      description: "Fast, efficient applications create better user experiences. I optimize for performance from the ground up, not as an afterthought.",
      color: "text-yellow-500"
    },
    {
      icon: "RefreshCw",
      title: "Continuous Evolution",
      description: "The web evolves rapidly, and so should we. I embrace new technologies while maintaining a solid foundation in proven practices.",
      color: "text-purple-500"
    },
    {
      icon: "Heart",
      title: "Quality Craftsmanship",
      description: "Clean, maintainable code is a form of respect—for users, teammates, and future developers. I take pride in writing code that others can understand and build upon.",
      color: "text-red-500"
    },
    {
      icon: "MessageSquare",
      title: "Collaborative Spirit",
      description: "Great software is built by great teams. I value clear communication, knowledge sharing, and creating an environment where everyone can contribute their best work.",
      color: "text-indigo-500"
    }
  ];

  return (
    <div className="bg-surface/50 rounded-2xl p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
          Development Philosophy
        </h3>
        <p className="text-text-secondary max-w-3xl mx-auto">
          These core principles guide every decision I make as a developer, from architecture choices to user interface design.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {philosophyPrinciples?.map((principle, index) => (
          <motion.div
            key={principle?.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-md transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Icon name={principle?.icon} size={20} className={principle?.color} />
              </div>
              <h4 className="text-lg font-semibold text-primary">{principle?.title}</h4>
            </div>
            <p className="text-text-primary leading-relaxed">{principle?.description}</p>
          </motion.div>
        ))}
      </div>
      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-brand rounded-xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-4 left-4 opacity-20">
            <Icon name="Quote" size={48} />
          </div>
          <blockquote className="text-lg lg:text-xl font-medium mb-4 relative z-10">
            "Great code is not just about making things work—it's about making them work beautifully, efficiently, and sustainably for everyone who will interact with them."
          </blockquote>
          <cite className="text-sm opacity-90">— Kenneth Ivan Pineda</cite>
        </div>
      </motion.div>
    </div>
  );
};

export default PhilosophySection;