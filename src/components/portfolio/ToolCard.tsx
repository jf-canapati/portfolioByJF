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
      className="bg-white dark:bg-[rgb(31,31,31)] w-full overflow-hidden font-normal rounded-md transition-colors duration-300"
      onClick={onClick}
    >
      <div className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.03)] flex flex-row items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.05)] transition-colors h-full">
        <img
          src={icon}
          className="aspect-[1] object-contain w-6 shrink-0 rounded-sm"
          alt={`${name} icon`}
        />
        <div className="flex flex-col min-w-0">
          <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-sm font-medium leading-[1.2] tracking-[-0.28px] transition-colors duration-300 truncate">
            {name}
          </h3>
          <p className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-xs leading-[1.3] tracking-[-0.01px] mt-0.5 transition-colors duration-300 truncate">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
