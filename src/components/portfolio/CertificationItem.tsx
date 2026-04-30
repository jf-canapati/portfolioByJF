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
      className="inner-card !py-2 cursor-pointer group hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)]"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 justify-between">
        <div className="flex flex-col min-w-0 flex-1">
          <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-sm font-medium leading-[1.2] tracking-[-0.28px] transition-colors duration-300 truncate">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-xs text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] tracking-[-0.01px] leading-[1.3] mt-0.5 transition-colors duration-300">
            <img
              src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/e76d69fda91de7020ea114034c2f0140d68ca00d?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-2.5 shrink-0 opacity-80"
              alt="Calendar icon"
            />
            <span>{date}</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-7 h-7 shrink-0 rounded-sm bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] group-hover:w-8 transition-all duration-300">
          <svg 
            className="w-3.5 h-3.5 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] transition-colors duration-300" fill="none" stroke="currentColor" 
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
