import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ProfileSection from './components/ProfileSection';
import JourneyTimeline from './components/JourneyTimeline';
import PhilosophySection from './components/PhilosophySection';
import CallToActionSection from './components/CallToActionSection';

const About = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'About Kenneth - Web Developer | Portfolio';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Learn about Kenneth Ivan Pineda, a passionate Web developer who crafts digital solutions with precision and creativity. Discover his journey, philosophy, and approach to modern web development.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Hero Section */}
          <motion.section
            variants={sectionVariants}
            className="py-16 lg:py-24 px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  <span>Available for new opportunities</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl lg:text-6xl font-bold text-primary mb-6"
                >
                  About <span className="text-accent">Kenneth</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
                >
                  A passionate Web developer who transforms ideas into exceptional digital experiences through clean code, thoughtful design, and continuous innovation.
                </motion.p>
              </div>

              <ProfileSection />
            </div>
          </motion.section>

          {/* Journey Timeline Section */}
          <motion.section
            variants={sectionVariants}
            className="py-16 lg:py-24 px-6 lg:px-8 bg-surface/30"
          >
            <div className="max-w-6xl mx-auto">
              <JourneyTimeline />
            </div>
          </motion.section>

          {/* Philosophy Section */}
          <motion.section
            variants={sectionVariants}
            className="py-16 lg:pt-18 px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <PhilosophySection />
            </div>
          </motion.section>

          {/* Call to Action Section */}
          <motion.section
            variants={sectionVariants}
            className="py-16 lg:pb-18 px-6 lg:px-8 bg-surface/30"
          >
            <div className="max-w-6xl mx-auto">
              <CallToActionSection />
            </div>
          </motion.section>

          {/* Additional Skills Preview */}
          <motion.section
            variants={sectionVariants}
            className="py-16 lg:py-20 px-6 lg:px-8"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  Ready to Explore My Work?
                </h3>
                <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                  Discover the technologies I master, the projects I've built, and how we can collaborate to bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/skills-showcase"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200"
                  >
                    View My Skills
                  </motion.a>
                  <motion.a
                    href="/projects-portfolio"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-primary rounded-lg font-medium hover:bg-surface transition-colors duration-200"
                  >
                    See My Projects
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
};

export default About;