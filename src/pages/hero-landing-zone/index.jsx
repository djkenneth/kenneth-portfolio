import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroContent from './components/HeroContent';
import ScrollIndicator from './components/ScrollIndicator';
import BackgroundElements from './components/BackgroundElements';
import ProgressIndicator from './components/ProgressIndicator';

const HeroLandingZone = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Preload critical resources
    const preloadLinks = [
      '/about',
      '/skills-showcase',
      '/projects-portfolio',
      '/contact-collaboration-hub'
    ];

    preloadLinks?.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head?.appendChild(link);
    });

    // Performance optimization - preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head?.appendChild(fontLink);

    return () => {
      // Cleanup preload links
      preloadLinks?.forEach(href => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (existingLink) {
          document.head?.removeChild(existingLink);
        }
      });
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kenneth Ivan Pineda",
    "jobTitle": "Frontend Developer",
    "description": "Frontend Developer specializing in React, TypeScript, and modern web technologies. Building digital experiences that matter.",
    "url": window.location?.origin,
    "sameAs": [
      "https://github.com/djkenneth",
      "https://www.linkedin.com/in/kenneth-ivan-pineda",
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "Next.js",
      "React Native",
      "Vue.js",
      "Node.js",
      "Express.js",
      "Laravel",
      "PostgreSQL",
      "MySQL",
      "Strapi CMS",
      "Contentful CMS",
      "Performance Optimization",
      "Web Development",
      "Mobile Development"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Kenneth Ivan Pineda - Frontend Developer | React Specialist</title>
        <meta 
          name="description" 
          content="Frontend Developer specializing in React, TypeScript, and modern web technologies. Building digital experiences that matter with technical excellence and creative vision." 
        />
        <meta name="keywords" content="Frontend Developer, React Developer, TypeScript, Next.js, Web Development, JavaScript, UI/UX" />
        <meta name="author" content="Kenneth Ivan Pineda" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kenneth Ivan Pineda - Frontend Developer" />
        <meta property="og:description" content="Frontend Developer specializing in React and modern web technologies. Available for new opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location?.href} />
        <meta property="og:image" content="/assets/images/kenneth-og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kenneth Ivan Pineda - Frontend Developer" />
        <meta name="twitter:description" content="Frontend Developer specializing in React and modern web technologies." />
        <meta name="twitter:image" content="/assets/images/kenneth-twitter-card.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={window.location?.href} />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Progress Indicator */}
        <ProgressIndicator />
        
        {/* Header */}
        <Header />
        
        {/* Main Hero Section */}
        <main className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
          {/* Background Elements */}
          <BackgroundElements />
          
          {/* Hero Content */}
          <motion.section
            className="relative z-10 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroContent onNavigate={handleNavigation} />
          </motion.section>
          
          {/* Scroll Indicator */}
          <ScrollIndicator onNavigate={handleNavigation} />
        </main>

        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        {/* Screen Reader Only Content */}
        <div className="sr-only">
          <h1>Kenneth Ivan Pineda - Frontend Developer Portfolio</h1>
          <p>Welcome to my portfolio. I'm a frontend developer specializing in React and modern web technologies.</p>
          <nav aria-label="Main navigation">
            <ul>
              <li><a href="/about">About Me</a></li>
              <li><a href="/skills-showcase">Skills</a></li>
              <li><a href="/projects-portfolio">Projects</a></li>
              <li><a href="/contact-collaboration-hub">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeroLandingZone;