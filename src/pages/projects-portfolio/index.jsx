import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectStats from './components/ProjectStats';
import TechStackCloud from './components/TechStackCloud';
import ProjectTimeline from './components/ProjectTimeline';
import ClientTestimonial from './components/ClientTestimonial';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProjectsPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: `A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing, and advanced analytics dashboard.\n\nImplemented microservices architecture for scalability and integrated third-party APIs for shipping and payment processing.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/kenneth/ecommerce-platform",
      year: "2024",
      duration: "4 months",
      featured: true,
      metrics: [
        { value: "40%", label: "Load Time ↓" },
        { value: "85%", label: "User Retention" },
        { value: "200K+", label: "Monthly Users" }
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Frontend",
      description: `Modern task management application with drag-and-drop functionality, real-time collaboration, and advanced filtering capabilities.\n\nBuilt with React 18 and TypeScript, featuring responsive design and offline-first architecture.`,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      techStack: ["React", "TypeScript", "Redux Toolkit", "Framer Motion", "PWA"],
      liveUrl: "https://taskflow-demo.com",
      githubUrl: "https://github.com/kenneth/taskflow",
      year: "2024",
      duration: "2 months",
      featured: false,
      metrics: [
        { value: "95%", label: "Performance" },
        { value: "50%", label: "Productivity ↑" },
        { value: "10K+", label: "Active Users" }
      ]
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: "Full Stack",
      description: `Comprehensive healthcare management system with patient records, appointment scheduling, and real-time monitoring capabilities.\n\nImplemented HIPAA-compliant security measures and integrated with multiple healthcare APIs.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      techStack: ["React", "Express.js", "PostgreSQL", "Chart.js", "Socket.io"],
      liveUrl: "https://healthcare-demo.com",
      githubUrl: "https://github.com/kenneth/healthcare-dashboard",
      year: "2023",
      duration: "6 months",
      featured: true,
      metrics: [
        { value: "99.9%", label: "Uptime" },
        { value: "30%", label: "Admin Time ↓" },
        { value: "500+", label: "Patients" }
      ]
    },
    {
      id: 4,
      title: "Learning Management System",
      category: "Full Stack",
      description: `Interactive learning platform with video streaming, progress tracking, and gamification elements.\n\nBuilt with modern web technologies and optimized for mobile learning experiences.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      techStack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
      liveUrl: "https://edulearn-demo.com",
      githubUrl: "https://github.com/kenneth/edulearn",
      year: "2023",
      duration: "5 months",
      featured: false,
      metrics: [
        { value: "92%", label: "Completion Rate" },
        { value: "4.8/5", label: "User Rating" },
        { value: "2K+", label: "Students" }
      ]
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Frontend",
      description: `Modern real estate listing platform with advanced search filters, virtual tours, and mortgage calculator.\n\nImplemented map integration and optimized for SEO and performance.`,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      techStack: ["React", "Google Maps API", "Styled Components", "Gatsby"],
      liveUrl: "https://realestate-demo.com",
      githubUrl: "https://github.com/kenneth/realestate-platform",
      year: "2023",
      duration: "3 months",
      featured: false,
      metrics: [
        { value: "60%", label: "Search Speed ↑" },
        { value: "25%", label: "Inquiries ↑" },
        { value: "1K+", label: "Listings" }
      ]
    },
    {
      id: 6,
      title: "Social Media Analytics",
      category: "Data Visualization",
      description: `Comprehensive social media analytics dashboard with real-time data visualization and automated reporting.\n\nIntegrated with multiple social platforms and built custom data processing pipelines.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      techStack: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/kenneth/social-analytics",
      year: "2024",
      duration: "3 months",
      featured: true,
      metrics: [
        { value: "10M+", label: "Data Points" },
        { value: "80%", label: "Insights ↑" },
        { value: "100+", label: "Brands" }
      ]
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects', count: projects?.length },
    { id: 'Full Stack', name: 'Full Stack', count: projects?.filter(p => p?.category === 'Full Stack')?.length },
    { id: 'Frontend', name: 'Frontend', count: projects?.filter(p => p?.category === 'Frontend')?.length },
    { id: 'Data Visualization', name: 'Data Viz', count: projects?.filter(p => p?.category === 'Data Visualization')?.length }
  ];

  // Project statistics
  const projectStats = [
    { icon: 'Code', value: '50+', label: 'Projects Completed' },
    { icon: 'Users', value: '25+', label: 'Happy Clients' },
    { icon: 'Award', value: '15+', label: 'Awards Won' },
    { icon: 'Clock', value: '3+', label: 'Years Experience' }
  ];

  // Technology stack data
  const technologies = [
    { name: 'React', level: 'expert', projectCount: 12 },
    { name: 'JavaScript', level: 'expert', projectCount: 15 },
    { name: 'TypeScript', level: 'advanced', projectCount: 8 },
    { name: 'Node.js', level: 'advanced', projectCount: 10 },
    { name: 'Next.js', level: 'advanced', projectCount: 6 },
    { name: 'MongoDB', level: 'advanced', projectCount: 7 },
    { name: 'PostgreSQL', level: 'intermediate', projectCount: 5 },
    { name: 'AWS', level: 'intermediate', projectCount: 4 },
    { name: 'Docker', level: 'intermediate', projectCount: 3 },
    { name: 'GraphQL', level: 'intermediate', projectCount: 4 }
  ];

  // Timeline data
  const timelineData = [
    {
      title: "Frontend Specialization",
      period: "2022 - Present",
      description: "Focused on modern React development with TypeScript, building scalable component libraries and optimizing performance.",
      icon: "Code",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Full Stack Development",
      period: "2021 - 2022",
      description: "Expanded into backend development, learning Node.js, database design, and API development for complete web solutions.",
      icon: "Server",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Web Development Journey",
      period: "2020 - 2021",
      description: "Started with HTML, CSS, and JavaScript fundamentals, quickly progressing to modern frameworks and tools.",
      icon: "Rocket",
      technologies: ["HTML", "CSS", "JavaScript", "Git"]
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp Inc.",
      content: "Kenneth delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Startup Founder",
      company: "InnovateLab",
      content: "Working with Kenneth was a game-changer for our startup. He built our MVP quickly and efficiently, helping us launch ahead of schedule.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthCo",
      content: "The analytics dashboard Kenneth created has transformed how we understand our social media performance. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5
    }
  ];

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects?.filter(project => project?.category === activeFilter));
    }
  }, [activeFilter]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const handleTechFilter = (techName) => {
    const techProjects = projects?.filter(project => 
      project?.techStack?.some(tech => tech?.toLowerCase()?.includes(techName?.toLowerCase()))
    );
    setFilteredProjects(techProjects);
    setActiveFilter('tech-filtered');
  };

  return (
    <>
      <Helmet>
        <title>Projects Portfolio - Kenneth Ivan Pineda | Web Developer</title>
        <meta name="description" content="Explore Kenneth's curated portfolio of web development projects, featuring React applications, full-stack solutions, and modern frontend experiences." />
        <meta name="keywords" content="React projects, web development portfolio, frontend projects, JavaScript applications" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Icon name="Briefcase" size={16} />
                <span>Featured Work</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Project <span className="text-transparent bg-gradient-accent bg-clip-text">Portfolio</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Discover my journey through code, creativity, and problem-solving. Each project represents a unique challenge conquered with modern web technologies and thoughtful user experience design.
              </p>
            </motion.div>

            {/* Project Statistics */}
            <ProjectStats stats={projectStats} />

            {/* Technology Stack Cloud */}
            <TechStackCloud technologies={technologies} onTechFilter={handleTechFilter} />

            {/* Project Filters */}
            <ProjectFilter 
              categories={categories}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {filteredProjects?.map((project, index) => (
                <ProjectCard 
                  key={project?.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProjects?.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">No projects found</h3>
                <p className="text-text-secondary mb-6">Try adjusting your filters to see more projects.</p>
                <Button
                  variant="outline"
                  onClick={() => setActiveFilter('all')}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}

            {/* Development Timeline */}
            <ProjectTimeline timelineData={timelineData} />

            {/* Client Testimonials */}
            <ClientTestimonial testimonials={testimonials} />

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-accent rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with modern web technologies and exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Start a Conversation
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPortfolio;