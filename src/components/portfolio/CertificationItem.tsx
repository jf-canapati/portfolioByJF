import React from 'react';

interface CertificationItemProps {
  title: string;
  date: string;
  icon: string;
  onClick?: () => void;
}

export const CertificationItem: React.FC<CertificationItemProps> = ({
  title,
  date,
  icon,
  onClick
}) => {
  return (
    <article
      className="bg-white dark:bg-[rgb(31,31,31)] w-full overflow-hidden rounded-[20px] max-md:max-w-full cursor-pointer transition-shadow group transition-colors duration-300"
      onClick={onClick}
    >
      <div className="border dark:border-[rgba(60,60,60,1)] flex items-stretch gap-5 flex-wrap justify-between px-5 py-[23px] rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)] transition-colors">
        <div className="flex flex-col items-stretch">
          <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-[22px] leading-[1.2] tracking-[-0.44px] max-md:text-[18px] transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-stretch gap-[5px] text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] tracking-[-0.01px] leading-[1.3] mt-5 transition-colors duration-300">
            <img
              src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/e76d69fda91de7020ea114034c2f0140d68ca00d?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 shrink-0"
              alt="Calendar icon"
            />
            <div className="basis-auto">
              {date}
            </div>
          </div>
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
    </article>
  );
};
