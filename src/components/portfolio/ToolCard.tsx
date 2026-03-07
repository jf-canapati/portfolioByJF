import React from 'react';

interface ToolCardProps {
  icon: string;
  name: string;
  description: string;
  onClick?: () => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  icon,
  name,
  description,
  onClick
}) => {
  return (
    <article
      className="bg-white dark:bg-[rgb(31,31,31)] w-full overflow-hidden font-normal mx-auto rounded-[20px] transition-colors duration-300"
      onClick={onClick}
    >
      <div className="border dark:border-[rgba(60,60,60,1)] flex items-stretch gap-5 pl-5 pr-5 py-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:pr-5 cursor-pointer hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)] transition-colors">
        <img
          src={icon}
          className="aspect-[1] object-contain w-[60px] shrink-0 rounded-[10px]"
          alt={`${name} icon`}
        />
        <div className="flex flex-col items-stretch my-auto">
          <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-[22px] leading-[1.2] tracking-[-0.44px] max-md:text-[18px] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-base leading-[1.4] tracking-[-0.01px] mt-[10px] transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
