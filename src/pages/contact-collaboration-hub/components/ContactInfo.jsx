import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'kenneth.pineda@email.com',
      description: 'Best for detailed project discussions',
      action: () => window.open('mailto:kenneth.pineda@email.com', '_blank'),
      primary: true
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9AM-6PM PST',
      action: () => window.open('tel:+15551234567', '_blank')
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'San Francisco, CA',
      description: 'Open to remote collaboration worldwide',
      action: null
    },
    {
      icon: 'Clock',
      label: 'Response Time',
      value: 'Within 24 hours',
      description: 'Usually much faster during business hours',
      action: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/kenneth-pineda',
      description: 'Professional network & recommendations',
      color: 'text-blue-600'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/kenneth-pineda',
      description: 'Code repositories & contributions',
      color: 'text-gray-700'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/kenneth_codes',
      description: 'Tech insights & industry updates',
      color: 'text-blue-400'
    },
    {
      name: 'Dribbble',
      icon: 'Dribbble',
      url: 'https://dribbble.com/kenneth-pineda',
      description: 'Design portfolio & UI inspiration',
      color: 'text-pink-500'
    }
  ];

  const availabilityStatus = {
    status: 'available',
    message: 'Available for new projects',
    nextAvailable: 'January 2025',
    responseTime: '< 24 hours'
  };

  return (
    <div className="space-y-8">
      {/* Availability Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl p-6 shadow-brand-lg border border-border"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-success rounded-full animate-ping opacity-75"></div>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Currently Available</h3>
            <p className="text-sm text-text-secondary">Ready to start new projects</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-text-secondary">Next Available:</span>
            <p className="font-medium text-primary">{availabilityStatus?.nextAvailable}</p>
          </div>
          <div>
            <span className="text-text-secondary">Response Time:</span>
            <p className="font-medium text-primary">{availabilityStatus?.responseTime}</p>
          </div>
        </div>
      </motion.div>
      {/* Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-card rounded-2xl p-6 shadow-brand-lg border border-border"
      >
        <h3 className="text-lg font-semibold text-primary mb-6">Get In Touch</h3>
        
        <div className="space-y-4">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 p-4 rounded-lg transition-colors ${
                method?.action ? 'hover:bg-muted cursor-pointer' : ''
              } ${method?.primary ? 'bg-accent/5 border border-accent/20' : ''}`}
              onClick={method?.action}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                method?.primary ? 'bg-accent text-white' : 'bg-muted text-text-primary'
              }`}>
                <Icon name={method?.icon} size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-primary">{method?.label}</h4>
                  {method?.primary && (
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      Primary
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-text-primary">{method?.value}</p>
                <p className="text-xs text-text-secondary">{method?.description}</p>
              </div>
              {method?.action && (
                <Icon name="ExternalLink" size={16} className="text-text-secondary" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card rounded-2xl p-6 shadow-brand-lg border border-border"
      >
        <h3 className="text-lg font-semibold text-primary mb-6">Connect & Follow</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted transition-colors group"
            >
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name={social?.icon} size={20} className={social?.color} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-primary group-hover:text-accent transition-colors">
                  {social?.name}
                </h4>
                <p className="text-xs text-text-secondary">{social?.description}</p>
              </div>
              <Icon name="ExternalLink" size={16} className="text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </motion.div>
      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-card rounded-2xl p-6 shadow-brand-lg border border-border"
      >
        <h3 className="text-lg font-semibold text-primary mb-6">Quick Actions</h3>
        
        <div className="space-y-3">
          <Button
            variant="outline"
            fullWidth
            iconName="Download"
            iconPosition="left"
            onClick={() => {
              // Simulate resume download
              const link = document.createElement('a');
              link.href = '/assets/resume/Kenneth-Pineda-Resume.pdf';
              link.download = 'Kenneth-Pineda-Resume.pdf';
              link?.click();
            }}
          >
            Download Resume
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.open('https://calendly.com/kenneth-pineda', '_blank')}
          >
            Schedule Consultation
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open('https://wa.me/15551234567', '_blank')}
          >
            WhatsApp Chat
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;