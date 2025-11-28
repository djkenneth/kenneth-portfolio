import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/hero-landing-zone', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Skills', path: '/skills-showcase', icon: 'Code' },
    { name: 'Projects', path: '/projects-portfolio', icon: 'FolderOpen' },
    // { name: 'Contact', path: '/contact-collaboration-hub', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-brand-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation('/hero-landing-zone')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand-sm group-hover:shadow-brand-md transition-all duration-300">
                <span className="text-white font-bold text-lg font-jetbrains-mono">K</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background animate-pulse"></div>
            </div>
            <div className="ml-3 hidden sm:block">
              <h1 className="text-xl font-bold text-primary letter-spacing-breathe">
                Kenneth
              </h1>
              <p className="text-xs text-text-secondary -mt-1">Web Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item?.path)
                    ? 'text-accent bg-accent/10' :'text-text-primary hover:text-accent hover:bg-accent/5'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </span>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full nav-indicator"></div>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation('/contact-collaboration-hub')}
              iconName="Download"
              iconPosition="left"
              className="text-sm"
            >
              Resume
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => handleNavigation('/contact-collaboration-hub')}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-gradient-accent border-0 text-sm"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:text-accent hover:bg-accent/5 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? 'X' : 'Menu'} 
              size={24} 
              className="transition-transform duration-200"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-6 py-4 bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10 border-l-2 border-accent' :'text-text-primary hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleNavigation('/contact-collaboration-hub')}
                iconName="Download"
                iconPosition="left"
              >
                Download Resume
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={() => handleNavigation('/contact-collaboration-hub')}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-accent border-0"
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
        <div 
          className="h-full bg-gradient-accent transition-all duration-300 nav-indicator"
          style={{
            width: `${Math.min(100, (window.scrollY / (document.documentElement?.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;