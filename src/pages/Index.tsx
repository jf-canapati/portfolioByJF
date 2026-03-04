import React from 'react';
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
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="flex w-full flex-col overflow-hidden items-center justify-center px-20 py-2.5 max-md:max-w-full max-md:px-5">
        <div className="w-[760px] max-w-full space-y-2.5">
          <HeroSection />
          <OverviewSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationSection />
          <HackathonsSection />
          <ToolsSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
