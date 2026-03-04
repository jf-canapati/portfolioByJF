import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  industry: string;
  icon: string;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  industry,
  icon,
  onClick
}) => {
  return (
    <article
      className="bg-white flex flex-col overflow-hidden items-center font-normal aspect-[1] w-full rounded-[22px] max-md:mt-2.5 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="border w-full px-5 py-[22px] rounded-[22px] border-[rgba(234,234,234,1)] border-solid">
        <img
          src={image}
          className="aspect-[1.34] object-contain w-full rounded-[10px]"
          alt={title}
        />
        <div className="flex items-stretch gap-5 justify-between mt-[22px]">
          <div className="flex flex-col items-stretch">
            <h3 className="text-[rgba(20,20,20,1)] text-[22px] leading-[1.2] tracking-[-0.44px]">
              {title}
            </h3>
            <p className="text-[rgba(80,80,80,1)] text-sm leading-[1.3] tracking-[-0.01px] mt-[9px]">
              {industry}
            </p>
          </div>
          <img
            src={icon}
            className="aspect-[1] object-contain w-10 shrink-0 rounded-[10px]"
            alt={`${title} icon`}
          />
        </div>
      </div>
    </article>
  );
};
