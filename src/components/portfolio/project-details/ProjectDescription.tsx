import React, { useState } from 'react';

interface ProjectDescriptionProps {
  description: string;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] overflow-hidden text-[13px] text-[rgba(116,116,116,1)] dark:text-[rgba(160,160,160,1)] leading-[1.2] mt-[10px] rounded-[20px] max-md:max-w-full transition-colors duration-300">
      <div className="border dark:border-[rgba(60,60,60,1)] flex w-full flex-col items-stretch pl-5 pr-5 py-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full max-md:pr-5 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <h2 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-sm font-medium transition-colors duration-300">
            Description
          </h2>
          <button
            onClick={toggleExpanded}
            className="text-xs text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] hover:text-[rgba(20,20,20,1)] dark:hover:text-[rgba(240,240,240,1)] transition-colors"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Collapse description' : 'Expand description'}
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
        
        {isExpanded && (
          <article className="mt-3.5">
            <p className="font-normal leading-[1.6] tracking-[-0.01px] text-[rgba(116,116,116,1)] dark:text-[rgba(160,160,160,1)] whitespace-pre-line transition-colors duration-300">
              {description}
            </p>
          </article>
        )}
      </div>
    </section>
  );
};
