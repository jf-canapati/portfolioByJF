import React from 'react';

interface HackathonCardProps {
  image: string;
  title: string;
  achievement: string;
  icon: string;
  onClick?: () => void;
}

export const HackathonCard: React.FC<HackathonCardProps> = ({
  image,
  title,
  achievement,
  icon,
  onClick
}) => {
  return (
    <article
      className="bg-white dark:bg-[rgb(31,31,31)] flex flex-col overflow-hidden items-center font-normal aspect-[1] w-full rounded-[22px] max-md:mt-2.5 group transition-colors duration-300"
      onClick={onClick}
    >
      <div className="border dark:border-[rgba(60,60,60,1)] w-full px-5 py-[22px] rounded-[22px] border-[rgba(234,234,234,1)] border-solid cursor-pointer hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)] transition-colors">
        <img
          src={image}
          className="aspect-[1.33] object-contain w-full rounded-[10px]"
          alt={title}
        />
        <div className="flex items-stretch gap-5 justify-between mt-[22px]">
          <div className="flex flex-col items-stretch">
            <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-[22px] leading-[1.2] tracking-[-0.44px] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-sm leading-[1.3] tracking-[-0.01px] mt-1.5 transition-colors duration-300">
              {achievement}
            </p>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] group-hover:w-14 transition-all duration-300">
            <svg 
              className="w-5 h-5 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] transition-colors duration-300" fill="none" stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};
