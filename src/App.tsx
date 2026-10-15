import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CaseStudies } from './components/CaseStudies';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsEcosystem } from './components/SkillsEcosystem';
import { SocialMediaToolkit } from './components/SocialMediaToolkit';
import { CertificationsEducation } from './components/CertificationsEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectLightbox } from './components/ProjectLightbox';
import { CVModal } from './components/CVModal';
import { PORTFOLIO_DATA, ProjectItem } from './data/portfolioData';
import { playClickSound } from './utils/sound';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const { projects } = PORTFOLIO_DATA;

  // Global tactile UI click sound listener for every button, link, tab, and interactive option
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button, a, select, input, textarea, [role="button"], [role="tab"], [tabindex="0"]') ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'SELECT' ||
          target.tagName === 'OPTION')
      ) {
        playClickSound();
      }
    };

    window.addEventListener('click', handleGlobalClick, { capture: true, passive: true });
    return () => window.removeEventListener('click', handleGlobalClick, { capture: true });
  }, []);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <AboutSection />
        <CaseStudies onSelectProject={(project) => setSelectedProject(project)} />
        <ExperienceTimeline />
        <SkillsEcosystem />
        <div id="toolkit">
          <SocialMediaToolkit />
        </div>
        <CertificationsEducation />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal for Case Studies */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />

      {/* Curriculum Vitae Viewer & PDF Download Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />
    </div>
  );
}
