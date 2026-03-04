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
      className="bg-white w-full overflow-hidden font-normal mx-auto rounded-[20px] max-md:mt-2.5 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="border flex items-stretch gap-5 pl-5 pr-[71px] py-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:pr-5">
        <img
          src={icon}
          className="aspect-[1] object-contain w-[60px] shrink-0 rounded-[10px]"
          alt={`${name} icon`}
        />
        <div className="flex flex-col items-stretch my-auto">
          <h3 className="text-[rgba(20,20,20,1)] text-[22px] leading-[1.2] tracking-[-0.44px]">
            {name}
          </h3>
          <p className="text-[rgba(80,80,80,1)] text-base leading-[1.4] tracking-[-0.01px] mt-[15px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
