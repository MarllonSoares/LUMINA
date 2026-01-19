import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ProjectDetailSection } from "./components/ProjectDetailSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Favicon } from "./components/Favicon";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    category: string;
    image: string;
    gradient: string;
  } | null>(null);

  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      {/* Favicon */}
      <Favicon />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection onProjectClick={setSelectedProject} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Overlay */}
      {selectedProject && (
        <ProjectDetailSection
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Global Cursor Glow Effect */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5" />
      </div>
    </div>
  );
}