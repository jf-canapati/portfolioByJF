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
    <article className="bg-white dark:bg-[rgb(31,31,31)] overflow-hidden rounded-[20px] max-md:max-w-full transition-colors duration-300">
      <div className="border dark:border-[rgba(60,60,60,1)] flex w-full flex-col pl-5 pr-5 py-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full max-md:pr-5 transition-colors duration-300">
        <div className="flex gap-5 max-md:flex-col">
          <img
            src={logo}
            className="aspect-[1] object-cover w-10 h-10 shrink-0 rounded-[10px]"
            alt={`${company} logo`}
          />
          <div className="flex flex-col items-stretch">
            <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-[22px] leading-[1.2] tracking-[-0.44px] max-md:text-[18px] transition-colors duration-300">
              {position}
            </h3>
            <div className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-sm leading-[1.3] tracking-[-0.01px] mt-1 transition-colors duration-300">
              {company}
            </div>
          </div>
        </div>
        <p className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-base leading-[23px] tracking-[-0.01px] self-stretch ml-[60px] mt-5 max-md:mt-2.5 max-md:ml-0 max-md:max-w-full transition-colors duration-300">
          {description}
        </p>
        <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-[21px] text-[13px] text-[rgba(116,116,116,1)] dark:text-[rgba(150,150,150,1)] tracking-[-0.01px] leading-[1.2] ml-[60px] mt-5 max-md:mt-2.5 max-md:ml-0 transition-colors duration-300">
          <div className="flex items-stretch gap-[5px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/0171fb8151864c47c6de5b9d0659fdb4559c5c83?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 shrink-0"
              alt="Calendar icon"
            />
            <div className="basis-auto my-auto">
              {timeline}
            </div>
          </div>
          <div className="flex items-stretch gap-[5px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/4399e38451f9324e495c4eaceaca4c1edb484b4e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 shrink-0"
              alt="Location icon"
            />
            <div className="my-auto">{location}</div>
          </div>
        </div>
      </div>
    </article>
  );
};
