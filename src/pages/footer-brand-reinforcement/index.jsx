import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BrandLogo from './components/BrandLogo';
import SocialProofSection from './components/SocialProofSection';
import NavigationLinks from './components/NavigationLinks';
import TechnicalCredentials from './components/TechnicalCredentials';
import PerformanceMetrics from './components/PerformanceMetrics';
import BackToTopButton from './components/BackToTopButton';
import CopyrightSection from './components/CopyrightSection';

const FooterBrandReinforcement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleLogoClick = () => {
    navigate('/hero-landing-zone');
  };

  return (
    <>
      <Helmet>
        <title>Kenneth Ivan Pineda - Frontend Developer Portfolio</title>
        <meta name="description" content="Kenneth Ivan Pineda - Frontend Developer specializing in React, modern web technologies, and creating exceptional digital experiences. View portfolio, skills, and get in touch." />
        <meta name="keywords" content="Kenneth Pineda, Frontend Developer, React Developer, Web Developer, JavaScript, TypeScript, Portfolio" />
        <meta property="og:title" content="Kenneth Ivan Pineda - Frontend Developer Portfolio" />
        <meta property="og:description" content="Frontend Developer specializing in React and modern web technologies. Building digital experiences that matter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kennethpineda.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kenneth Ivan Pineda - Frontend Developer" />
        <meta name="twitter:description" content="Frontend Developer specializing in React and modern web technologies." />
        <link rel="canonical" href="https://kennethpineda.dev/footer-brand-reinforcement" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kenneth Ivan Pineda",
            "jobTitle": "Frontend Developer",
            "description": "Frontend Developer specializing in React and modern web technologies",
            "url": "https://kennethpineda.dev",
            "sameAs": [
              "https://github.com/djkenneth",
              "https://www.linkedin.com/in/kenneth-ivan-pineda",
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Main Footer Content */}
        <footer className="bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            {/* Brand Header */}
            <div className="text-center mb-16">
              <BrandLogo 
                onClick={handleLogoClick}
                className="justify-center mb-6"
              />
              <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Crafting digital experiences that blend technical excellence with creative vision. 
                Every line of code is written with purpose, every design decision made with intention.
              </p>
            </div>

            {/* Social Proof Section */}
            <div className="mb-16">
              <SocialProofSection />
            </div>

            {/* Navigation Links */}
            <div className="mb-16">
              <NavigationLinks />
            </div>

            {/* Technical Credentials */}
            <div className="mb-16">
              <TechnicalCredentials />
            </div>

            {/* Performance Metrics */}
            <div className="mb-16">
              <PerformanceMetrics />
            </div>

            {/* Newsletter Signup */}
            <div className="mb-16">
              <div className="bg-gradient-accent rounded-2xl p-8 text-center text-white">
                <h4 className="text-2xl font-bold mb-4">
                  Stay Updated
                </h4>
                <p className="text-white/90 mb-6 max-w-md mx-auto">
                  Get insights on modern web development, React best practices, and industry trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-text-primary bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="px-6 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-white/70 mt-4">
                  No spam, unsubscribe at any time. Privacy policy applies.
                </p>
              </div>
            </div>

            {/* Copyright Section */}
            <CopyrightSection />
          </div>
        </footer>

        {/* Back to Top Button */}
        <BackToTopButton />

        {/* Floating Contact Button */}
        <div className="fixed bottom-8 left-8 z-40 hidden lg:block">
          <button
            onClick={() => navigate('/contact-collaboration-hub')}
            className="bg-accent text-white px-6 py-3 rounded-full shadow-brand-lg hover:shadow-brand-xl hover:bg-accent/90 transition-all duration-300 hover-lift flex items-center space-x-2"
          >
            <span className="text-sm font-medium">Let's Collaborate</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </button>
        </div>

        {/* Ambient Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default FooterBrandReinforcement;