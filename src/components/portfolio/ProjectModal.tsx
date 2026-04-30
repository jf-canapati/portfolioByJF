import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    subtitle: string;
    industry: string;
    image: string;
    description: string;
    fullDescription: string;
    features: { title: string, description: string }[];
    technologies: string[];
    url?: string;
    comingSoon?: boolean;
  } | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openFeature, setOpenFeature] = useState<string | null>(null);

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = 'unset';
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (lenis) lenis.start();
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const toggleFeature = (title: string) => {
    setOpenFeature(openFeature === title ? null : title);
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        data-lenis-prevent
        className="relative bg-[#F9F9F9] dark:bg-[rgb(25,25,25)] w-full max-w-5xl rounded-md shadow-2xl flex flex-col max-h-[95vh] overflow-hidden animate-in fade-in zoom-in duration-300 border border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)]"
      >
        
        {/* Header Section */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] bg-white dark:bg-[rgb(31,31,31)]">
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] tracking-[-0.03em] leading-tight">
              {project.title}
            </h2>
            <p className="text-xs text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] mt-0.5 tracking-[-0.01px]">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {!project.comingSoon && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group py-2 px-4 rounded-md bg-[rgba(20,20,20,1)] dark:bg-[rgba(240,240,240,1)] text-white dark:text-[rgba(20,20,20,1)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span className="text-xs font-medium">Visit Live Project</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-md flex items-center justify-center text-[rgba(120,120,120,1)] hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)] transition-colors border border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Preview Section (Virtual Desktop Preview) */}
          <div className="p-6">
            <div 
              className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-md overflow-y-auto bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] border border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] shadow-sm custom-scrollbar"
              data-lenis-prevent
            >
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto block"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-[rgb(31,31,31)] flex items-center justify-center shadow-sm">
                    <svg className="w-6 h-6 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)]">
                    {project.comingSoon ? "Preview coming soon" : "No preview available"}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Two-Column Grid */}
          <div className="px-6 pb-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 items-start">
            
            {/* Main Column (Wide) */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <p className="text-sm md:text-base leading-[1.6] text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium tracking-[-0.01px]">
                  {project.description}
                </p>
              </div>

              {/* Tabs Section */}
              <div className="flex flex-col border border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] rounded-md bg-white dark:bg-[rgb(31,31,31)] overflow-hidden">
                <div className="flex items-center border-b border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)]">
                  {['Overview', 'Background'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 text-xs font-medium transition-colors border-b-2 ${
                        activeTab === tab 
                        ? 'border-[rgba(20,20,20,1)] dark:border-[rgba(240,240,240,1)] text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]' 
                        : 'border-transparent text-[rgba(120,120,120,1)] hover:text-[rgba(20,20,20,1)] dark:hover:text-[rgba(240,240,240,1)]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="p-6 min-h-[160px]">
                  {activeTab === 'Overview' ? (
                    <p className="text-sm leading-[1.7] text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)]">
                      {project.fullDescription}
                    </p>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <p className="text-sm leading-[1.7] text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)]">
                        Developed as a specialized solution for {project.industry.toLowerCase()} challenges, 
                        this project focused on creating a robust and scalable architecture while maintaining 
                        a high-quality user experience.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Side Column (Shorter) */}
            <div className="flex flex-col gap-10">
              {/* Tech Stack */}
              <div className="flex flex-col">
                <h3 className="text-[14px] font-semibold text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <div 
                      key={tech}
                      className="px-2.5 py-1.5 rounded bg-white dark:bg-[rgb(31,31,31)] border border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] text-[11px] font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Accordion (Webflow style) */}
              <div className="flex flex-col">
                <h3 className="text-[14px] font-semibold text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] mb-4">
                  Features
                </h3>
                <div className="flex flex-col border-t border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)]">
                  {project.features.map((feature) => (
                    <div 
                      key={feature.title}
                      className="border-b border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)]"
                    >
                      <button
                        onClick={() => toggleFeature(feature.title)}
                        className="w-full py-4 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[13px] font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]">
                            {feature.title}
                          </span>
                        </div>
                        <div className="shrink-0 w-5 h-5 flex items-center justify-center text-[rgba(120,120,120,1)] group-hover:text-[rgba(20,20,20,1)] dark:group-hover:text-[rgba(240,240,240,1)] transition-colors">
                          {openFeature === feature.title ? (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          ) : (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                          )}
                        </div>
                      </button>
                      
                      <div 
                        className={`grid transition-all duration-300 ease-in-out ${
                          openFeature === feature.title 
                          ? 'grid-rows-[1fr] opacity-100' 
                          : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-4 pl-8 pr-4">
                            <p className="text-[12px] leading-[1.5] text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)]">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
