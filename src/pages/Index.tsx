import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { OverviewSection } from '@/components/portfolio/OverviewSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { CertificationSection } from '@/components/portfolio/CertificationSection';
import { GallerySection } from '@/components/portfolio/GallerySection';
import { HackathonsSection } from '@/components/portfolio/HackathonsSection';
import { ToolsSection } from '@/components/portfolio/ToolsSection';
import { Footer } from '@/components/portfolio/Footer';

const Index = () => {
  // Disable scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('fade-in-visible');
      }, index * 30);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#F0F0F0] dark:bg-[rgb(20,20,20)] min-h-screen transition-colors duration-300">
      <Navbar />
      
      <main className="flex w-full flex-col items-center px-4 pt-3 pb-4 max-md:px-4 max-md:pt-3 max-md:pb-4">
        <div className="w-full max-w-[1100px] min-w-0">
          <div className="main-layout min-w-0">
            {/* Left Sidebar wrapper */}
            <div className="max-md:contents flex flex-col gap-3 h-full">
              <div className="fade-in-section order-1 min-w-0">
                <HeroSection />
              </div>
              <div id="experience" className="fade-in-section scroll-mt-[12px] order-3 min-w-0">
                <ExperienceSection />
              </div>
              <div id="education" className="fade-in-section scroll-mt-[12px] order-4 min-w-0 flex-1 flex flex-col">
                <EducationSection />
              </div>
            </div>

            {/* Right Content Area wrapper */}
            <div className="max-md:contents flex flex-col gap-3 h-full min-w-0">
              <div className="fade-in-section order-2 min-w-0">
                <OverviewSection />
              </div>
              <div id="projects" className="fade-in-section scroll-mt-[12px] order-5 flex-1 flex flex-col min-w-0">
                <ProjectsSection />
              </div>
              <div className="fade-in-section order-6 min-w-0">
                <ToolsSection />
              </div>
            </div>

            {/* Same row: Certifications & Gallery with custom proportions */}
            <div className="max-md:contents md:col-span-2 grid grid-cols-1 md:grid-cols-[420px_1fr] gap-3 order-7 min-w-0">
              <div id="certifications" className="fade-in-section scroll-mt-[12px] h-full order-7 min-w-0">
                <CertificationSection />
              </div>
              <div className="fade-in-section h-full min-w-0 order-8">
                <GallerySection />
              </div>
            </div>
            
            {/* Footer - Full width */}
            <div className="fade-in-section order-9 md:col-span-2 min-w-0">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
