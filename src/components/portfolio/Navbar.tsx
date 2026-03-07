import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, default to true if not set
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : true;
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

  // Set dark mode on initial load
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
    <header className="flex w-full flex-col overflow-hidden items-center text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] font-normal leading-[1.3] pt-20 px-[70px] max-md:pt-[10px] max-md:px-[10px] max-md:max-w-full transition-colors duration-300 navbar-animate">
      <nav className="bg-white dark:bg-[rgb(31,31,31)] flex w-[760px] max-w-full items-stretch gap-5 overflow-hidden flex-wrap justify-between p-5 rounded-[32px] transition-colors duration-300">
        <div className="flex items-stretch gap-[5px] tracking-[-0.01px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/a0b2a44317b9b2e72307c472782f320712d1c61c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 shrink-0"
            alt="Location icon"
          />
          <div className="basis-auto my-auto">
            Olongapo City, Philippines
          </div>
        </div>
        <div className="flex items-stretch gap-[5px] text-right tracking-[-0.14px]">
          <div className="grow my-auto">
            {formatTime(currentTime)}
          </div>
          <button 
            onClick={toggleDarkMode}
            className="aspect-[1] w-[19px] shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Toggle dark mode"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/5bdd95d58436d0cba10fc0fea44bea854dd7041e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-full h-full"
              alt="Theme toggle icon"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
