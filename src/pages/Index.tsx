import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { OverviewSection } from '@/components/portfolio/OverviewSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { CertificationSection } from '@/components/portfolio/CertificationSection';
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
      
      <main className="flex w-full flex-col overflow-hidden items-center justify-center px-20 py-2.5 max-md:px-[10px] max-md:py-[10px] max-md:max-w-full">
        <div className="w-[760px] max-w-full space-y-2.5">
          <div className="fade-in-section"><HeroSection /></div>
          <div className="fade-in-section"><OverviewSection /></div>
          <div className="fade-in-section"><ProjectsSection /></div>
          <div className="fade-in-section"><ExperienceSection /></div>
          <div className="fade-in-section"><EducationSection /></div>
          <div className="fade-in-section"><CertificationSection /></div>
          {/* <HackathonsSection /> */}
          <div className="fade-in-section"><ToolsSection /></div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
