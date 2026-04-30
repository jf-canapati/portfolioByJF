import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/portfolio/Navbar';
import { Footer } from '@/components/portfolio/Footer';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ProjectModal } from '@/components/portfolio/ProjectModal';
import { projects } from '@/data/projects';
import Lenis from '@studio-freight/lenis';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#F0F0F0] dark:bg-[rgb(20,20,20)] min-h-screen transition-colors duration-300 flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex w-full flex-col overflow-hidden items-center px-4 pt-3 pb-4 max-md:px-4 max-md:pt-3 max-md:pb-4">
        <div className="w-[1100px] max-w-full flex flex-col gap-3">
          
          <section className="section-card fade-in-section fade-in-visible">
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="section-label">Showcase</div>
                <button
                  onClick={() => navigate('/')}
                  className="group flex items-center gap-1.5 text-[11px] text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] hover:text-[rgba(20,20,20,1)] dark:hover:text-[rgba(240,240,240,1)] transition-colors"
                >
                  <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="font-medium tracking-[-0.01px]">Back to Portfolio</span>
                </button>
              </div>
              <h1 className="text-xl md:text-2xl font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] tracking-[-0.02em] leading-tight">
                All Projects
              </h1>
              <p className="text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] mt-2 max-w-2xl leading-[1.6]">
                A complete showcase of my work, including in-development projects, technical experiments, 
                and full-scale applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  featured={false}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </section>

          <div>
            <Footer />
          </div>
        </div>
      </main>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </div>
  );
};

export default ProjectsPage;
