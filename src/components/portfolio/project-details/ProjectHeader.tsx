import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectHeaderProps {
  title: string;
  icon: string;
  liveUrl?: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, icon, liveUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBackHovered, setIsBackHovered] = useState(false);
  const navigate = useNavigate();

  const handleVisitLive = () => {
    if (liveUrl) {
      window.open(liveUrl, '_blank');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <header className="flex flex-col gap-5 font-normal max-md:max-w-full max-md:gap-[10px]">
      <div className="flex items-center justify-start">
        <div className="relative w-14 h-10 flex items-center justify-start">
          <button
            onClick={handleBack}
            onMouseEnter={() => setIsBackHovered(true)}
            onMouseLeave={() => setIsBackHovered(false)}
            className={`absolute left-0 bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex items-center justify-center h-10 rounded-[10px] transition-all duration-300 hover:bg-[rgba(220,220,220,1)] dark:hover:bg-[#4a4a4a] ${
              isBackHovered ? 'w-14' : 'w-10'
            }`}
            aria-label="Back to portfolio"
          >
            <svg 
              className="w-5 h-5 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] transition-colors duration-300 rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between gap-5 max-md:flex-col max-md:items-start">
        <div className="text-[46px] text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] tracking-[-0.92px] leading-[1.1] max-md:text-[32px] transition-colors duration-300">
          <h1 className="max-md:text-[32px]">{title}</h1>
        </div>

        {liveUrl && (
          <div className="flex items-center">
            <button
              onClick={handleVisitLive}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`border flex items-center gap-1.5 px-5 py-[11px] rounded-[32px] border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] border-solid transition-all duration-200 text-base text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] tracking-[-0.01px] leading-[1.4] whitespace-nowrap ${
                isHovered ? 'bg-[rgba(0,0,0,0.01)] dark:bg-[rgba(255,255,255,0.02)]' : ''
              }`}
              aria-label={`Visit the live ${title} website`}
            >
              <span>Visit Live</span>
              <svg 
                className="w-4 h-4 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
