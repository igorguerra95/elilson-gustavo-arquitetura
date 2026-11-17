import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectLightbox } from './components/ProjectLightbox';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import type { ArchitecturalProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ArchitecturalProject | null>(null);
  const [inquiredProjectTitle, setInquiredProjectTitle] = useState<string | null>(null);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProject = (projectTitle: string) => {
    setInquiredProjectTitle(projectTitle);
    setTimeout(() => {
      scrollToContact();
    }, 80);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[hsl(var(--canvas))] text-[hsl(var(--foreground))]">
        <Navbar onContactClick={scrollToContact} />

        {/* Ordem obrigatória das seções: inicio -> portfolio -> sobre -> contato */}
        <main>
          <HeroSection onContactClick={scrollToContact} />
          <PortfolioSection
            onSelectProject={setSelectedProject}
            onContactClick={scrollToContact}
          />
          <AboutSection onContactClick={scrollToContact} />
          <ContactSection preselectedProject={inquiredProjectTitle} />
        </main>

        <Footer />

        <ProjectLightbox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquireProject={handleInquireProject}
        />

        <WhatsAppFloatingButton />
      </div>
    </MotionConfig>
  );
}
