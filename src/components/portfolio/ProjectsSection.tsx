import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projects } from '@/data/projects';

export const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewAll = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(`/projects`);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Only display the first 3 projects on the home page
  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="section-card h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="section-label">
          Projects
        </div>
        <button 
          onClick={handleViewAll}
          className="text-[11px] text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] hover:text-[rgba(20,20,20,1)] dark:hover:text-[rgba(240,240,240,1)] transition-colors flex items-center gap-1 group"
        >
          View all
          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="projects-grid mt-4 flex-1" style={{ gridTemplateRows: 'auto 1fr' }}>
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            featured={index === 0}
            compact={index !== 0}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </section>
  );
};
