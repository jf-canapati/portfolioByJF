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
      className="bg-white flex flex-col overflow-hidden items-center font-normal aspect-[1] w-full rounded-[22px] max-md:mt-2.5 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="border w-full px-5 py-[21px] rounded-[22px] border-[rgba(234,234,234,1)] border-solid">
        <img
          src={image}
          className="aspect-[1.33] object-contain w-full rounded-[10px]"
          alt={title}
        />
        <div className="flex items-stretch gap-5 justify-between mt-[22px]">
          <div className="flex flex-col items-stretch">
            <h3 className="text-[rgba(20,20,20,1)] text-[22px] leading-[1.2] tracking-[-0.44px]">
              {title}
            </h3>
            <p className="text-[rgba(80,80,80,1)] text-sm leading-[1.3] tracking-[-0.01px] mt-1.5">
              {achievement}
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
