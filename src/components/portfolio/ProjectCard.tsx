import React from 'react';

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  industry: string;
  icon: string;
  url?: string;
  comingSoon?: boolean;
  featured?: boolean;
  compact?: boolean;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  industry,
  icon,
  url,
  comingSoon = false,
  featured = false,
  compact = false,
  onClick
}) => {
  return (
    <article
      onClick={onClick}
      className={`relative overflow-hidden rounded-md group transition-all duration-300 border border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] ${comingSoon ? 'opacity-60' : 'cursor-pointer'} ${featured ? 'md:col-span-2 aspect-[1.6] md:aspect-[2.2] lg:aspect-[3]' : compact ? 'aspect-[2.2] md:aspect-auto min-h-0' : 'aspect-[1.3]'}`}
    >
      {/* Full-bleed Image */}
      {comingSoon ? (
        <div className="absolute inset-0 bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex flex-col items-center justify-center gap-2 transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          <div className="relative z-10 flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 rounded-full bg-[rgba(20,20,20,0.05)] dark:bg-[rgba(240,240,240,0.05)] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-[11px] font-medium transition-colors duration-300">In Development</span>
          </div>
        </div>
      ) : image ? (
        <img
          src={image}
          className={`absolute inset-0 w-full h-full object-cover ${featured ? 'object-[center_20%]' : 'object-center'} transition-transform duration-500 group-hover:scale-105`}
          alt={title}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[rgba(245,245,245,1)] dark:bg-[rgba(40,40,40,1)] transition-colors duration-300">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-[rgb(31,31,31)] flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5 text-[rgba(120,120,120,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-[10px] font-medium text-[rgba(120,120,120,1)]">No Preview</span>
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10 transition-opacity group-hover:from-black/90"></div>

      {/* Overlaid Text Content (Tinder Style) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-5">
        {featured && (
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
              Featured Project
            </span>
          </div>
        )}
        <h3 className="text-white font-semibold text-sm md:text-base leading-tight tracking-[-0.02em] drop-shadow-sm">
          {title}
        </h3>
        <p className="text-white/70 text-xs leading-[1.3] tracking-[-0.01px] mt-1">
          {industry}
        </p>
      </div>
    </article>
  );
};

