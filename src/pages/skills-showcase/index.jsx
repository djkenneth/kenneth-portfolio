import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SkillCard from './components/SkillCard';
import CategoryFilter from './components/CategoryFilter';
import LearningTimeline from './components/LearningTimeline';
import SkillMeter from './components/SkillMeter';
import CertificationBadge from './components/CertificationBadge';

const SkillsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleSections, setVisibleSections] = useState({});
  const [filteredSkills, setFilteredSkills] = useState([]);
  
  const skillsRef = useRef(null);
  const metersRef = useRef(null);
  const timelineRef = useRef(null);
  const certificationsRef = useRef(null);

  // Mock data for skills
  const skillsData = [
    {
      id: 1,
      name: "React",
      category: "frontend",
      icon: "Code",
      description: "Building modern, interactive user interfaces with React 18+ functional components and hooks",
      proficiency: 95,
      experience: "4+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 2,
      name: "TypeScript",
      category: "frontend",
      icon: "FileCode",
      description: "Type-safe JavaScript development for scalable applications",
      proficiency: 88,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 3,
      name: "Next.js",
      category: "frontend",
      icon: "Zap",
      description: "Full-stack React framework with SSR, SSG, and API routes",
      proficiency: 92,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 4,
      name: "React Native",
      category: "frontend",
      icon: "Code",
      description: "Building cross-platform mobile applications for iOS and Android",
      proficiency: 85,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 5,
      name: "Redux / Zustand / React Query",
      category: "frontend",
      icon: "Code",
      description: "State management for complex React applications. Lightweight state management solution for React. Data fetching and caching for React applications",
      proficiency: 85,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 6,
      name: "React Hook Form",
      category: "frontend",
      icon: "Code",
      description: "Performant, flexible forms with easy validation",
      proficiency: 90,
      experience: "2+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 7,
      name: "Chakra UI",
      category: "frontend",
      icon: "Code",
      description: "Modular component library for React applications",
      proficiency: 90,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 8,
      name: "Vue.js",
      category: "frontend",
      icon: "Code",
      description: "Progressive JavaScript framework for building user interfaces",
      proficiency: 80,
      experience: "2+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 9,
      name: "Quasar Framework",
      category: "frontend",
      icon: "Code",
      description: "Vue.js framework for building responsive applications",
      proficiency: 75,
      experience: "2+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 10,
      name: "Vuetify.JS",
      category: "frontend",
      icon: "Code",
      description: "Material Design component framework for Vue.js",
      proficiency: 78,
      experience: "2+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 11,
      name: "React Hook Form",
      category: "frontend",
      icon: "Code",
      description: "Performant, flexible forms with easy validation",
      proficiency: 90,
      experience: "2+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 12,
      name: "Tailwind CSS",
      category: "frontend",
      icon: "Palette",
      description: "Utility-first CSS framework for rapid UI development",
      proficiency: 93,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 13,
      name: "Framer Motion",
      category: "frontend",
      icon: "Move",
      description: "Production-ready motion library for React applications",
      proficiency: 87,
      experience: "2+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 14,
      name: "Node.js / Express.js",
      category: "backend",
      icon: "Server",
      description: "Fast, minimalist web framework for Node.js",
      proficiency: 85,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 15,
      name: "Prisma ORM",
      category: "backend",
      icon: "Server",
      description: "Next-generation ORM for Node.js and TypeScript",
      proficiency: 82,
      experience: "2+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 16,
      name: "PostgreSQL / MySQL",
      category: "backend",
      icon: "Server",
      description: "Advanced open-source relational database. Popular open-source relational database management system.",
      proficiency: 85,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 17,
      name: "Firebase",
      category: "backend",
      icon: "Server",
      description: "Backend-as-a-Service platform for web and mobile apps",
      proficiency: 78,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 18,
      name: "Strapi CMS / Contentful CMS",
      category: "backend",
      icon: "Server",
      description: "Open-source headless CMS built with Node.js. API-first content management platform",
      proficiency: 85,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 19,
      name: "GraphQL",
      category: "backend",
      icon: "Share2",
      description: "Query language for APIs with flexible data fetching",
      proficiency: 73,
      experience: "1+ years",
      projects: 0,
      isNew: true
    },
    {
      id: 20,
      name: "PHP",
      category: "backend",
      icon: "Server",
      description: "Server-side scripting language for web development",
      proficiency: 75,
      experience: "2+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 21,
      name: "Laravel",
      category: "backend",
      icon: "Server",
      description: "PHP framework for web application development",
      proficiency: 80,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    // {
    //   id: 5,
    //   name: "MongoDB",
    //   category: "backend",
    //   icon: "Database",
    //   description: "NoSQL database for modern web applications",
    //   proficiency: 78,
    //   experience: "2+ years",
    //   projects: 0,
    //   isNew: false
    // },
    {
      id: 22,
      name: "Git",
      category: "tools",
      icon: "GitBranch",
      description: "Version control system for tracking code changes",
      proficiency: 90,
      experience: "4+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 23,
      name: "Slack",
      category: "tools",
      icon: "GitBranch",
      description: "",
      proficiency: 90,
      experience: "4+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 24,
      name: "Jira / ClickUp",
      category: "tools",
      icon: "GitBranch",
      description: "",
      proficiency: 90,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },

    {
      id: 25,
      name: "UsePastel",
      category: "tools",
      icon: "GitBranch",
      description: "",
      proficiency: 78,
      experience: "2+ years",
      projects: 0,
      isNew: false
    },
    {
      id: 26,
      name: "Google Docs",
      category: "tools",
      icon: "GitBranch",
      description: "",
      proficiency: 90,
      experience: "5+ years",
      projects: 0,
      isNew: false
    },
    // {
    //   id: 9,
    //   name: "Docker",
    //   category: "tools",
    //   icon: "Package",
    //   description: "Containerization platform for application deployment",
    //   proficiency: 75,
    //   experience: "2+ years",
    //   projects: 0,
    //   isNew: false
    // },
    {
      id: 27,
      name: "Figma",
      category: "design",
      icon: "Figma",
      description: "Collaborative design tool for UI/UX prototyping",
      proficiency: 82,
      experience: "3+ years",
      projects: 0,
      isNew: false
    },
    // {
    //   id: 12,
    //   name: "AWS",
    //   category: "tools",
    //   icon: "Cloud",
    //   description: "Cloud computing platform for scalable infrastructure",
    //   proficiency: 68,
    //   experience: "1+ years",
    //   projects: 0,
    //   isNew: true
    // }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Skills', icon: 'Grid3x3', count: skillsData?.length },
    { id: 'frontend', name: 'Frontend', icon: 'Monitor', count: skillsData?.filter(s => s?.category === 'frontend')?.length },
    { id: 'backend', name: 'Backend', icon: 'Server', count: skillsData?.filter(s => s?.category === 'backend')?.length },
    { id: 'tools', name: 'Tools', icon: 'Settings', count: skillsData?.filter(s => s?.category === 'tools')?.length },
    { id: 'design', name: 'Design', icon: 'Palette', count: skillsData?.filter(s => s?.category === 'design')?.length }
  ];

  // Core skills for meters
  const coreSkills = [
    { name: "React", proficiency: 95, experience: "4+ years" },
    { name: "JavaScript", proficiency: 93, experience: "5+ years" },
    { name: "TypeScript", proficiency: 88, experience: "3+ years" },
    { name: "Next.js", proficiency: 92, experience: "3+ years" },
    { name: "Node.js", proficiency: 85, experience: "3+ years" },
    { name: "CSS", proficiency: 90, experience: "5+ years" },
  ];

  // Learning timeline data
  const timelineData = [
    {
      title: "React Advanced Patterns Certification",
      organization: "Meta (Facebook)",
      date: "Oct 2024",
      type: "certification",
      icon: "Award",
      description: "Advanced React patterns including render props, higher-order components, and compound components",
      skills: ["React", "JavaScript", "Component Architecture"],
      certificateUrl: "#"
    },
    {
      title: "Full Stack Web Development Bootcamp",
      organization: "The Odin Project",
      date: "Aug 2024",
      type: "course",
      icon: "BookOpen",
      description: "Comprehensive full-stack development course covering modern web technologies",
      skills: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      title: "E-commerce Platform Development",
      organization: "Personal Project",
      date: "Jun 2024",
      type: "project",
      icon: "Code",
      description: "Built a full-featured e-commerce platform with payment integration and admin dashboard",
      skills: ["Next.js", "Stripe", "Prisma", "PostgreSQL"]
    },
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "Apr 2024",
      type: "certification",
      icon: "Cloud",
      description: "Foundational understanding of AWS cloud services and architecture",
      skills: ["AWS", "Cloud Computing", "DevOps"],
      certificateUrl: "#"
    },
    {
      title: "TypeScript Deep Dive Course",
      organization: "Udemy",
      date: "Feb 2024",
      type: "course",
      icon: "FileCode",
      description: "Advanced TypeScript concepts and patterns for large-scale applications",
      skills: ["TypeScript", "JavaScript", "Type Safety"]
    }
  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      name: "React Developer",
      issuer: "Meta",
      date: "2024",
      level: "expert",
      icon: "Award",
      verified: true
    },
    {
      id: 2,
      name: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2024",
      level: "advanced",
      icon: "Code",
      verified: true
    },
    {
      id: 3,
      name: "AWS Cloud Practitioner",
      issuer: "Amazon",
      date: "2024",
      level: "intermediate",
      icon: "Cloud",
      verified: true
    },
    {
      id: 4,
      name: "UI/UX Design",
      issuer: "Google",
      date: "2023",
      level: "advanced",
      icon: "Palette",
      verified: true
    }
  ];

  // Filter skills based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills(skillsData);
    } else {
      setFilteredSkills(skillsData?.filter(skill => skill?.category === activeCategory));
    }
  }, [activeCategory]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = [];
    const refs = [
      { ref: skillsRef, key: 'skills' },
      { ref: metersRef, key: 'meters' },
      { ref: timelineRef, key: 'timeline' },
      { ref: certificationsRef, key: 'certifications' }
    ];

    refs?.forEach(({ ref, key }) => {
      if (ref?.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1, rootMargin: '50px' }
        );
        observer?.observe(ref?.current);
        observers?.push(observer);
      }
    });

    return () => observers?.forEach(observer => observer?.disconnect());
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Skills Showcase - Kenneth Portfolio</title>
        <meta name="description" content="Interactive technology stack display with proficiency indicators and learning timeline. Showcasing technical competencies and continuous learning mindset." />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Technical
                <span className="bg-gradient-accent bg-clip-text text-transparent"> Expertise</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                A comprehensive showcase of my technical skills, continuous learning journey, and professional certifications in modern web development.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Code" size={16} />
                  <span>20+ Technologies</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} />
                  <span>4+ Certifications</span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Grid Section */}
        <section ref={skillsRef} className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Technology Stack
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Explore my technical skills across frontend, backend, tools, and design with interactive proficiency indicators.
              </p>
            </motion.div>

            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSkills?.map((skill, index) => (
                <SkillCard
                  key={skill?.id}
                  skill={skill}
                  index={index}
                  isVisible={visibleSections?.skills}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Core Skills Meters */}
        <section ref={metersRef} className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Core Competencies
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Interactive skill level meters showcasing proficiency in key technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {coreSkills?.map((skill, index) => (
                <SkillMeter
                  key={skill?.name}
                  skill={skill}
                  isVisible={visibleSections?.meters}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Learning Timeline */}
        {/* <section ref={timelineRef} className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Learning Journey
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                A timeline of my continuous learning path, certifications, and skill development milestones.
              </p>
            </motion.div>

            <LearningTimeline
              timelineData={timelineData}
              isVisible={visibleSections?.timeline}
            />
          </div>
        </section> */}

        {/* Certifications */}
        {/* <section ref={certificationsRef} className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Professional Certifications
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Industry-recognized certifications validating my expertise and commitment to professional growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications?.map((certification, index) => (
                <CertificationBadge
                  key={certification?.id}
                  certification={certification}
                  index={index}
                  isVisible={visibleSections?.certifications}
                />
              ))}
            </div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-accent text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your ideas to life with modern web technologies and best practices.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="/projects-portfolio"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-accent rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon name="FolderOpen" size={20} />
                  <span>View My Projects</span>
                </motion.a>
                <motion.a
                  href="/contact-collaboration-hub"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>Start a Project</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SkillsShowcase;