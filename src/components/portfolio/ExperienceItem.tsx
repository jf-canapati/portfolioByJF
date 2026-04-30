import React from 'react';

interface ExperienceItemProps {
  company: string;
  position: string;
  description: string;
  timeline: string;
  location: string;
  logo: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  description,
  timeline,
  location,
  logo
}) => {
  return (
    <article className="relative flex gap-4 w-full group">
      {/* Timeline line connector (hidden on last item via parent CSS) */}
      <div className="absolute left-[15px] top-8 bottom-[-16px] w-[2px] bg-[rgba(234,234,234,1)] dark:bg-[rgba(60,60,60,1)] timeline-connector transition-colors duration-300"></div>
      
      {/* Node / Logo */}
      <div className="relative z-10 shrink-0">
        <img
          src={logo}
          className="aspect-[1] object-cover w-[32px] h-[32px] shrink-0 rounded-full border-[3px] border-white dark:border-[rgb(31,31,31)] bg-white dark:bg-[rgb(31,31,31)] group-hover:scale-110 transition-transform duration-300"
          alt={`${company} logo`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 pb-2">
        <div className="flex flex-col min-w-0">
          <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-sm font-medium leading-[1.2] tracking-[-0.28px] transition-colors duration-300">
            {position}
          </h3>
          <div className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-xs leading-[1.3] tracking-[-0.01px] mt-0.5 transition-colors duration-300">
            {company}
          </div>
        </div>
        
        <p className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-sm leading-[1.6] tracking-[-0.01px] mt-2 transition-colors duration-300">
          {description}
        </p>
        
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-[rgba(116,116,116,1)] dark:text-[rgba(150,150,150,1)] tracking-[-0.01px] leading-[1.2] mt-3 transition-colors duration-300">
          <div className="flex items-center gap-1.5">
            <img
              src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/0171fb8151864c47c6de5b9d0659fdb4559c5c83?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 shrink-0 opacity-80"
              alt="Calendar icon"
            />
            <span>{timeline}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <img
              src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/4399e38451f9324e495c4eaceaca4c1edb484b4e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 shrink-0 opacity-80"
              alt="Location icon"
            />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
