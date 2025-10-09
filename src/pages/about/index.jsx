import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from '../contact-collaboration-hub/components/ContactForm';
import ContactInfo from '../contact-collaboration-hub/components/ContactInfo';
import LocationMap from '../contact-collaboration-hub/components/LocationMap';
import TestimonialsSection from '../contact-collaboration-hub/components/TestimonialsSection';

const ContactCollaborationHub = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Collaboration Hub - Kenneth Ivan Pineda | Frontend Developer</title>
        <meta name="description" content="Get in touch with Kenneth Ivan Pineda for your next web development project. Available for React development, UI/UX implementation, and technical consulting. Fast response time guaranteed." />
        <meta name="keywords" content="contact frontend developer, hire react developer, web development services, Kenneth Pineda contact, project collaboration" />
        <meta property="og:title" content="Contact Kenneth Ivan Pineda - Frontend Developer" />
        <meta property="og:description" content="Ready to start your next project? Contact Kenneth for professional web development services with guaranteed quality and timely delivery." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Kenneth Ivan Pineda - Frontend Developer" />
        <meta name="twitter:description" content="Professional frontend developer available for new projects. Specializing in React, modern web technologies, and user experience optimization." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative py-20 lg:py-32 overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-success/5"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-success/10 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center space-x-3 mb-6"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-brand-lg">
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </div>
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-success">Available for new projects</span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 letter-spacing-breathe"
                >
                  Let's Build Something
                  <span className="block text-transparent bg-gradient-accent bg-clip-text">
                    Amazing Together
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  Ready to transform your ideas into exceptional digital experiences? 
                  I'm here to help bring your vision to life with modern web technologies, 
                  clean code, and user-centered design.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Clock" size={16} className="text-success" />
                    <span className="text-sm">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Shield" size={16} className="text-success" />
                    <span className="text-sm">100% confidential</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Globe" size={16} className="text-success" />
                    <span className="text-sm">Remote collaboration worldwide</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Main Content */}
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Form - Takes 2 columns on large screens */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-2"
                >
                  <ContactForm />
                </motion.div>

                {/* Contact Info - Takes 1 column on large screens */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-1"
                >
                  <ContactInfo />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Location & Map Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Location & Collaboration
                </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  Based in San Francisco but available for remote collaboration worldwide. 
                  Let's discuss how we can work together regardless of location.
                </p>
              </motion.div>

              <LocationMap />
            </div>
          </section>

          {/* Testimonials & Social Proof */}
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Trusted by Amazing Clients
                </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  Don't just take my word for it. Here's what clients say about 
                  working with me and the results we've achieved together.
                </p>
              </motion.div>

              <TestimonialsSection />
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-success/5"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-success/10 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-card rounded-3xl p-12 shadow-brand-xl border border-border"
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-brand-lg">
                  <Icon name="Rocket" size={32} className="text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Ready to Start Your Project?
                </h2>
                
                <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                  Whether you're a startup with a big idea, an established company looking to modernize, 
                  or anywhere in between, I'm here to help you succeed.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="mailto:kenneth.pineda@email.com"
                    className="inline-flex items-center space-x-2 bg-gradient-accent text-white px-8 py-4 rounded-lg font-semibold hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon name="Mail" size={20} />
                    <span>Send Email</span>
                  </a>
                  
                  <a
                    href="https://calendly.com/kenneth-pineda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <Icon name="Calendar" size={20} />
                    <span>Schedule Call</span>
                  </a>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-text-secondary">
                    Average response time: &lt; 4 hours • Free consultation • No commitment required
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ContactCollaborationHub;