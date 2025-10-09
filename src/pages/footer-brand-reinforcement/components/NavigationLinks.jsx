import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const NavigationLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/hero-landing-zone", icon: "Home" },
        { name: "About", path: "/about", icon: "User" },
        { name: "Skills", path: "/skills-showcase", icon: "Code" },
        { name: "Projects", path: "/projects-portfolio", icon: "FolderOpen" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", path: "/contact-collaboration-hub", icon: "Mail" },
        { name: "LinkedIn", path: "https://linkedin.com/in/kenneth-pineda", icon: "Linkedin", external: true },
        { name: "GitHub", path: "https://github.com/kenneth-pineda", icon: "Github", external: true },
        { name: "Twitter", path: "https://twitter.com/kenneth_dev", icon: "Twitter", external: true }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Resume", path: "/resume.pdf", icon: "Download", external: true },
        { name: "Blog", path: "/blog", icon: "BookOpen" },
        { name: "RSS Feed", path: "/rss.xml", icon: "Rss", external: true },
        { name: "Sitemap", path: "/sitemap.xml", icon: "Map", external: true }
      ]
    }
  ];

  const handleNavigation = (link) => {
    if (link?.external) {
      window.open(link?.path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(link?.path);
    }
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {navigationSections?.map((section) => (
        <div key={section?.title} className="space-y-4">
          <h4 className="text-lg font-semibold text-primary border-b border-border pb-2">
            {section?.title}
          </h4>
          <ul className="space-y-3">
            {section?.links?.map((link) => (
              <li key={link?.name}>
                <button
                  onClick={() => handleNavigation(link)}
                  className={`flex items-center space-x-3 text-sm transition-all duration-200 group w-full text-left ${
                    isActivePath(link?.path)
                      ? 'text-accent font-medium' :'text-text-secondary hover:text-accent'
                  }`}
                >
                  <Icon 
                    name={link?.icon} 
                    size={16} 
                    className="group-hover:scale-110 transition-transform duration-200" 
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {link?.name}
                  </span>
                  {link?.external && (
                    <Icon 
                      name="ExternalLink" 
                      size={12} 
                      className="opacity-50 group-hover:opacity-100 transition-opacity duration-200" 
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavigationLinks;