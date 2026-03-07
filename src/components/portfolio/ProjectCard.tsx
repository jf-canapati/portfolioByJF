import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  industry: string;
  icon: string;
  onClick?: () => void;
  comingSoon?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  industry,
  icon,
  onClick,
  comingSoon = false
}) => {
  return (
    <article
      className={`bg-white dark:bg-[rgb(31,31,31)] flex flex-col overflow-hidden items-center font-normal w-full rounded-[22px] group transition-colors duration-300 ${comingSoon ? 'opacity-60' : ''}`}
      onClick={comingSoon ? undefined : onClick}
    >
      <div className={`border dark:border-[rgba(60,60,60,1)] w-full px-5 py-[22px] rounded-[22px] border-[rgba(234,234,234,1)] border-solid transition-colors ${comingSoon ? '' : 'cursor-pointer hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)]'}`}>
        {comingSoon ? (
          <div className="aspect-[1.34] w-full rounded-[20px] bg-gradient-to-br from-[rgba(234,234,234,1)] to-[rgba(200,200,200,1)] dark:from-[#3a3a3a] dark:to-[#2a2a2a] flex flex-col items-center justify-center gap-3 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[rgba(20,20,20,0.05)] dark:bg-[rgba(240,240,240,0.05)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-base font-medium transition-colors duration-300">In Development</span>
              <span className="text-[rgba(116,116,116,1)] dark:text-[rgba(150,150,150,1)] text-xs transition-colors duration-300">Stay tuned</span>
            </div>
          </div>
        ) : (
          <img
            src={image}
            className="aspect-[1.34] object-cover w-full rounded-[20px]"
            alt={title}
          />
        )}
        <div className="flex items-stretch gap-5 justify-between mt-[22px]">
          <div className="flex flex-col items-stretch">
            <h3 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-[22px] leading-[1.2] tracking-[-0.44px] max-md:text-[18px] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-sm leading-[1.3] tracking-[-0.01px] transition-colors duration-300">
              {industry}
            </p>
          </div>
          {!comingSoon && (
            <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] group-hover:w-14 transition-all duration-300">
              <svg 
                className="w-5 h-5 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] transition-colors duration-300" fill="none" stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
