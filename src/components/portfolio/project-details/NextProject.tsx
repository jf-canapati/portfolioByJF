import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NextProjectProps {
  nextProjectId: string;
  nextProjectTitle: string;
  nextProjectImage: string;
}

export const NextProject: React.FC<NextProjectProps> = ({ 
  nextProjectId, 
  nextProjectTitle, 
  nextProjectImage 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleNextProject = () => {
    navigate(`/project/${nextProjectId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] flex flex-col overflow-hidden items-stretch pl-5 pr-5 py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 transition-colors duration-300">
      <div className="bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium leading-[1.2] justify-center px-2.5 py-[8.5px] rounded-[10px] w-fit transition-colors duration-300">
        <h2>Next Project</h2>
      </div>
      <div 
        className="flex flex-col relative min-h-[400px] overflow-hidden mt-5 rounded-[22px] max-md:max-w-full max-md:min-h-[250px] cursor-pointer transition-all duration-300"
        onClick={handleNextProject}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        tabIndex={0}
        aria-label={`View next project: ${nextProjectTitle}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleNextProject();
          }
        }}
      >
        <img
          src={nextProjectImage}
          alt={`Preview of ${nextProjectTitle}`}
          className={`absolute h-full w-full object-cover inset-0 rounded-[22px] transition-all duration-300 ${
            isHovered ? 'blur-sm' : ''
          }`}
        />
        <div 
          className="relative border dark:border-[rgba(60,60,60,1)] flex shrink-0 h-[400px] rounded-[22px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full max-md:h-[250px] transition-all duration-300" 
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-[22px] flex items-center justify-center">
            <div className="bg-white dark:bg-[rgb(31,31,31)] bg-opacity-90 dark:bg-opacity-90 px-6 py-3 rounded-full text-sm font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] transition-colors duration-300">
              View Project
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
