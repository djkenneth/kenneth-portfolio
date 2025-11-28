import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CallToActionSection = () => {
  const navigate = useNavigate();

  const actionItems = [
    {
      icon: "Download",
      title: "Download Resume",
      description: "Get a detailed overview of my experience, skills, and achievements",
      action: () => {
        // Mock resume download
        const link = document.createElement('a');
        link.href = '/assets/Kenneth_Pineda_Resume.pdf';
        link.download = 'Kenneth_Pineda_Resume.pdf';
        link?.click();
      },
      buttonText: "Download PDF",
      variant: "outline"
    },
    {
      icon: "Linkedin",
      title: "Connect on LinkedIn",
      description: "Let\'s connect and grow our professional network together",
      action: () => {
        window.open('https://www.linkedin.com/in/kenneth-ivan-pineda', '_blank');
      },
      buttonText: "Connect Now",
      variant: "default"
    },
    {
      icon: "MessageCircle",
      title: "Start a Conversation",
      description: "Ready to discuss your next project or collaboration opportunity?",
      action: () => {
        navigate('/contact-collaboration-hub');
      },
      buttonText: "Let\'s Talk",
      variant: "default"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-accent/5 to-purple-500/5 rounded-2xl p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
          Let's Build Something Amazing Together
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Whether you're looking for a dedicated team member, a project collaborator, or just want to connect with a fellow developer, I'd love to hear from you.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {actionItems?.map((item, index) => (
          <motion.div
            key={item?.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-brand-md transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Icon name={item?.icon} size={24} className="text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">{item?.title}</h4>
            <p className="text-text-secondary mb-6 text-sm leading-relaxed">{item?.description}</p>
            <Button
              variant={item?.variant}
              onClick={item?.action}
              iconName={item?.icon}
              iconPosition="left"
              className="w-full"
            >
              {item?.buttonText}
            </Button>
          </motion.div>
        ))}
      </div>
      {/* Additional Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 pt-8 border-t border-border text-center"
      >
        <p className="text-text-secondary mb-4">
          Prefer email? Reach me directly at
        </p>
        <a
          href="mailto:dj.kenneth.pineda@gmail.com"
          className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-medium transition-colors duration-200"
        >
          <Icon name="Mail" size={16} />
          <span>dj.kenneth.pineda@gmail.com</span>
        </a>
      </motion.div>
    </div>
  );
};

export default CallToActionSection;