import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : false;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex w-full flex-col overflow-hidden items-center text-xs text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] font-normal leading-[1.3] pt-4 px-4 max-md:pt-4 max-md:px-4 transition-colors duration-300 navbar-animate">
      <nav className="section-card flex w-[1100px] max-w-full items-center gap-5 overflow-hidden justify-between !py-4">
        <div className="flex items-center gap-1.5 tracking-[-0.01px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/a0b2a44317b9b2e72307c472782f320712d1c61c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 shrink-0"
            alt="Location icon"
          />
          <div className="whitespace-nowrap">
            <span className="max-md:hidden">Olongapo City, Philippines</span>
            <span className="hidden max-md:inline">Olongapo City, PH</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-right tracking-[-0.14px]">
          <div className="whitespace-nowrap">
            {formatTime(currentTime)}
          </div>
          <button 
            onClick={toggleDarkMode}
            className="aspect-[1] w-4 shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-full h-full text-[rgba(180,180,180,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-full h-full text-[rgba(80,80,80,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
