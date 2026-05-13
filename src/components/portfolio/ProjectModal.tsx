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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 sm:-top-2 sm:-right-12 z-[10000] w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-all hover:rotate-90 duration-300"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Modal Content */}
        <div 
          data-lenis-prevent
          className="relative bg-white dark:bg-[rgb(22,22,22)] w-full rounded-md shadow-[0_32px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.4)] flex flex-col max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in duration-300 custom-scrollbar"
        >
        
        {/* Header Section */}
        <div className="px-6 sm:px-8 py-5 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-transparent">
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] tracking-[-0.03em] leading-tight">
              {project.title}
            </h2>
            <p className="text-xs text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] mt-0.5 tracking-[-0.01px]">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center">
            {!project.comingSoon && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group py-2 px-4 w-full sm:w-auto rounded-md bg-[rgba(20,20,20,1)] dark:bg-[rgba(240,240,240,1)] text-white dark:text-[rgba(20,20,20,1)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span className="text-xs font-medium">Visit Live Project</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1">
          {/* Preview Section (Virtual Desktop Preview) */}
          {/* Preview Section (Premium Minimalist Preview) */}
          <div className="p-6">
            <div className="group relative rounded-md overflow-hidden bg-white dark:bg-[#1e1e1e] border border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              {/* Scrollable Content */}
              <div 
                className="relative h-[300px] sm:h-[400px] md:h-[550px] w-full overflow-y-auto bg-[rgba(234,234,234,1)] dark:bg-[#0f0f0f] custom-scrollbar"
                data-lenis-prevent
              >
                {/* Subtle depth shadow */}
                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/[0.03] dark:from-black/20 to-transparent pointer-events-none z-10"></div>
                
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto block transition-opacity duration-700 animate-in fade-in"
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
          </div>

          {/* Two-Column Grid */}
          <div className="px-6 pb-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 items-start">
            
            {/* Main Column (Wide) */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col">
                <p className="text-sm md:text-base leading-[1.6] text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium tracking-[-0.01px]">
                  {project.description}
                </p>
              </div>

              {/* Tabs Section */}
              <div className="flex flex-col mt-4">
                <div className="flex items-center gap-6 sm:gap-8 border-b border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] mb-6 overflow-x-auto no-scrollbar">
                  {['Overview', 'Challenges & Solutions', 'Results and Impact'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-xs font-semibold tracking-tight transition-all relative whitespace-nowrap ${
                        activeTab === tab 
                        ? 'text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]' 
                        : 'text-[rgba(140,140,140,1)] hover:text-[rgba(20,20,20,1)] dark:hover:text-[rgba(240,240,240,1)]'
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[rgba(20,20,20,1)] dark:bg-[rgba(240,240,240,1)] rounded-full animate-in fade-in slide-in-from-bottom-1" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="min-h-[150px]">
                  {activeTab === 'Overview' && (
                    <p className="text-sm leading-[1.8] text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] animate-in fade-in slide-in-from-bottom-2 duration-500">
                      {project.fullDescription}
                    </p>
                  )}
                  {activeTab === 'Challenges & Solutions' && (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <p className="text-sm leading-[1.8] text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)]">
                        {(project as any).challenges || `During the development of ${project.title}, the primary challenge was ensuring seamless integration between complex architectural requirements and a user-centric interface. We addressed this by implementing robust state management and optimizing performance bottlenecks in real-time interactions.`}
                      </p>
                    </div>
                  )}
                  {activeTab === 'Results and Impact' && (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <p className="text-sm leading-[1.8] text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)]">
                        {(project as any).results || `The deployment of ${project.title} resulted in a significant improvement in operational efficiency and user engagement. By digitizing previously manual processes, the system successfully reduced turnaround times and provided stakeholders with actionable data-driven insights.`}
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
                <div className="flex flex-col">
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
    </div>
  </div>,
  document.body
);
};
