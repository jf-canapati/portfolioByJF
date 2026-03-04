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
    <article className="bg-white overflow-hidden mt-5 rounded-[20px] max-md:max-w-full first:mt-5">
      <div className="border flex w-full flex-col pl-5 pr-10 py-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full max-md:pr-5">
        <div className="flex gap-5">
          <img
            src={logo}
            className="aspect-[1] object-contain w-10 shrink-0 rounded-[10px]"
            alt={`${company} logo`}
          />
          <div className="flex flex-col items-stretch mt-1">
            <div className="text-[rgba(80,80,80,1)] text-sm leading-[1.3] tracking-[-0.01px]">
              {company}
            </div>
            <h3 className="text-[rgba(20,20,20,1)] text-[22px] leading-[1.2] tracking-[-0.44px] mt-[15px]">
              {position}
            </h3>
          </div>
        </div>
        <p className="text-[rgba(80,80,80,1)] text-base leading-[22px] tracking-[-0.01px] self-stretch ml-[60px] mt-[27px] max-md:max-w-full">
          {description}
        </p>
        <div className="flex items-stretch gap-[21px] text-[13px] text-[rgba(116,116,116,1)] tracking-[-0.01px] leading-[1.2] ml-[60px] mt-6 max-md:ml-2.5">
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
