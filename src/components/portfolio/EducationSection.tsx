import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <section className="section-card h-full flex flex-col">
      <div className="section-label">
        Education
      </div>
      <article className="relative flex gap-4 w-full group mt-3">
        <div className="absolute left-[15px] top-8 bottom-[-16px] w-[2px] bg-[rgba(234,234,234,1)] dark:bg-[rgba(60,60,60,1)] timeline-connector transition-colors duration-300"></div>
        
        <div className="relative z-10 shrink-0">
          <div className="w-[32px] h-[32px] rounded-full border-[3px] border-white dark:border-[rgb(31,31,31)] bg-[rgba(234,234,234,1)] dark:bg-[rgba(60,60,60,1)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-3 h-3 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col flex-1 pb-1">
          <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-sm font-medium tracking-[-0.28px] leading-[1.2] transition-colors duration-300">
            BS in Information Technology
          </h3>
          <div className="text-xs text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] leading-[1.3] mt-0.5 transition-colors duration-300">
            Lyceum of Subic Bay
          </div>
          <p className="text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] leading-[1.6] mt-2 transition-colors duration-300">
            Specializing in web and mobile application development with a focus on creating practical
            solutions that streamline business operations and enhance efficiency.
          </p>
          <div className="flex flex-wrap gap-3 text-[11px] text-[rgba(116,116,116,1)] dark:text-[rgba(150,150,150,1)] mt-3 transition-colors duration-300">
            <div className="flex items-center gap-1.5">
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/0171fb8151864c47c6de5b9d0659fdb4559c5c83?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-3 shrink-0 opacity-80"
                alt="Calendar icon"
              />
              <span>September 2022 - April 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/4399e38451f9324e495c4eaceaca4c1edb484b4e?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-3 shrink-0 opacity-80"
                alt="Location icon"
              />
              <span>Olongapo City, PH</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
