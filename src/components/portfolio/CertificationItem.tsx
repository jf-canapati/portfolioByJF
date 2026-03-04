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
      className="bg-white w-full overflow-hidden mt-2.5 rounded-[20px] max-md:max-w-full cursor-pointer hover:shadow-lg transition-shadow first:mt-5"
      onClick={onClick}
    >
      <div className="border flex items-stretch gap-5 flex-wrap justify-between px-5 py-[23px] rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full">
        <div className="flex flex-col items-stretch">
          <h3 className="text-[rgba(20,20,20,1)] text-[22px] leading-[1.2] tracking-[-0.44px]">
            {title}
          </h3>
          <div className="flex items-stretch gap-[5px] text-sm text-[rgba(80,80,80,1)] tracking-[-0.01px] leading-[1.3] mt-[27px]">
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
        <img
          src={icon}
          className="aspect-[1] object-contain w-10 shrink-0 my-auto rounded-[10px]"
          alt={`${title} icon`}
        />
      </div>
    </article>
  );
};
