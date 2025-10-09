import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechFlow Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: `Kenneth delivered exceptional work on our React dashboard. His attention to detail and ability to translate complex requirements into clean, performant code was impressive. The project was completed ahead of schedule.`,
      rating: 5,
      project: 'Analytics Dashboard',
      date: 'October 2024'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupLab',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: `Working with Kenneth was a game-changer for our startup. He not only built our MVP but also provided valuable insights on user experience and performance optimization. Highly recommended!`,
      rating: 5,
      project: 'E-commerce Platform',
      date: 'September 2024'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      role: 'Design Director',
      company: 'Creative Studios',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: `Kenneth's ability to bring designs to life is remarkable. He understood our vision perfectly and implemented pixel-perfect interfaces with smooth animations. A true professional.`,
      rating: 5,
      project: 'Portfolio Website',date: 'August 2024'
    }
  ];

  const stats = [
    {
      icon: 'Users',
      value: '50+',
      label: 'Happy Clients',
      description: 'Successful collaborations'
    },
    {
      icon: 'Star',
      value: '4.9',
      label: 'Average Rating',
      description: 'Based on client feedback'
    },
    {
      icon: 'CheckCircle',
      value: '100%',
      label: 'Project Success',
      description: 'On-time delivery rate'
    },
    {
      icon: 'Repeat',
      value: '85%',
      label: 'Return Clients',
      description: 'Choose to work again'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl p-6 shadow-brand-lg border border-border"
      >
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-primary mb-2">Client Success Metrics</h3>
          <p className="text-text-secondary">Building trust through consistent delivery</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
              <div className="font-medium text-primary text-sm mb-1">{stat?.label}</div>
              <div className="text-xs text-text-secondary">{stat?.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card rounded-2xl p-6 shadow-brand-lg border border-border"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="MessageSquare" size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">Client Testimonials</h3>
            <p className="text-sm text-text-secondary">What clients say about working with me</p>
          </div>
        </div>

        <div className="space-y-6">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={testimonial?.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border rounded-lg p-6 hover:shadow-brand-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial?.name}</h4>
                      <p className="text-sm text-text-secondary">
                        {testimonial?.role} at {testimonial?.company}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial?.rating)}
                    </div>
                  </div>
                  
                  <blockquote className="text-text-primary mb-4 italic">
                    "{testimonial?.content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Briefcase" size={14} className="text-accent" />
                      <span className="text-text-secondary">Project: {testimonial?.project}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-accent" />
                      <span className="text-text-secondary">{testimonial?.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Testimonials */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.open('https://linkedin.com/in/kenneth-pineda', '_blank')}
            className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
          >
            <span className="text-sm font-medium">View more testimonials on LinkedIn</span>
            <Icon name="ExternalLink" size={14} />
          </button>
        </div>
      </motion.div>
      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-card rounded-2xl p-6 shadow-brand-lg border border-border"
      >
        <h3 className="text-lg font-semibold text-primary mb-4 text-center">Professional Credentials</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-muted rounded-lg">
            <Icon name="Shield" size={24} className="text-success mx-auto mb-2" />
            <p className="text-xs font-medium text-primary">Verified</p>
            <p className="text-xs text-text-secondary">Identity</p>
          </div>
          
          <div className="text-center p-4 bg-muted rounded-lg">
            <Icon name="Award" size={24} className="text-success mx-auto mb-2" />
            <p className="text-xs font-medium text-primary">Certified</p>
            <p className="text-xs text-text-secondary">Developer</p>
          </div>
          
          <div className="text-center p-4 bg-muted rounded-lg">
            <Icon name="Lock" size={24} className="text-success mx-auto mb-2" />
            <p className="text-xs font-medium text-primary">Secure</p>
            <p className="text-xs text-text-secondary">Communication</p>
          </div>
          
          <div className="text-center p-4 bg-muted rounded-lg">
            <Icon name="Clock" size={24} className="text-success mx-auto mb-2" />
            <p className="text-xs font-medium text-primary">Reliable</p>
            <p className="text-xs text-text-secondary">Delivery</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;