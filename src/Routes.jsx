import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SkillsShowcase from './pages/skills-showcase';
import ProjectsPortfolio from './pages/projects-portfolio';
import HeroLandingZone from './pages/hero-landing-zone';
import FooterBrandReinforcement from './pages/footer-brand-reinforcement';
import ContactCollaborationHub from './pages/contact-collaboration-hub';
import About from './pages/about';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HeroLandingZone />} />
        <Route path="/skills-showcase" element={<SkillsShowcase />} />
        <Route path="/projects-portfolio" element={<ProjectsPortfolio />} />
        <Route path="/hero-landing-zone" element={<HeroLandingZone />} />
        <Route path="/footer-brand-reinforcement" element={<FooterBrandReinforcement />} />
        <Route path="/contact-collaboration-hub" element={<ContactCollaborationHub />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
