import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProfileSection = () => {
  const profileStats = [
    { label: "Years Experience", value: "5+", icon: "Calendar" },
    // { label: "Projects Completed", value: "25+", icon: "FolderOpen" },
    { label: "Technologies Mastered", value: "15+", icon: "Code" },
    // { label: "Client Satisfaction", value: "100%", icon: "Star" }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative group">
          {/* Main Profile Image */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-brand p-1">
            <div className="overflow-hidden rounded-xl bg-background">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Kenneth Ivan Pineda - Web Developer"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -top-4 -right-4 bg-success text-white p-3 rounded-xl shadow-brand-lg"
          >
            <Icon name="Code" size={24} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-xl shadow-brand-lg"
          >
            <Icon name="Lightbulb" size={24} />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 mt-8"
        >
          {profileStats?.map((stat, index) => (
            <motion.div
              key={stat?.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-brand-md transition-all duration-300"
            >
              <div className="flex justify-center mb-2">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={stat?.icon} size={16} className="text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
              <div className="text-xs text-text-secondary">{stat?.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Crafting Digital Solutions with
            <span className="text-accent"> Precision & Passion</span>
          </h2>
          <p className="text-lg text-text-primary leading-relaxed">
            I'm Kenneth Ivan Pineda, a Web Developer with over 5 years of experience specializing in frontend and full-stack development. I believe that great code is more than syntax—it's about creating meaningful digital experiences that solve real problems and connect with people.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-text-primary leading-relaxed">
            My journey began in 2019 as a Junior Web Developer, where I converted UI/UX designs into functional websites. Today, I develop and maintain complex web and mobile applications, build scalable APIs, and optimize performance for exceptional user experiences.
          </p>
          <p className="text-text-primary leading-relaxed">
            I specialize in modern React ecosystems, component architecture, and performance optimization, always staying current with emerging technologies while maintaining a focus on proven, reliable solutions.
          </p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {[
            "Technical excellence balanced with creative problem-solving",
            "Collaborative approach to team projects and client communication",
            "Continuous learning mindset with focus on emerging technologies",
            "Quality-focused development with attention to performance and accessibility"
          ]?.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3"
            >
              <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <Icon name="Check" size={14} className="text-success" />
              </div>
              <p className="text-text-primary">{highlight}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileSection;