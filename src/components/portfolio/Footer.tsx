import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailClick = () => {
    window.location.href = 'mailto:canapatijohnfrancis@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/jf-canapati', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/frncscnpt', '_blank');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', { email, message });
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="flex w-full flex-col overflow-hidden items-center font-normal pb-20 px-20 max-md:pb-[10px] max-md:px-[10px] max-md:max-w-full">
      <div className="bg-white dark:bg-[rgb(31,31,31)] flex w-[760px] max-w-full flex-col items-stretch px-5 py-[21px] rounded-[32px] transition-colors duration-300">
        <button
          onClick={handleEmailClick}
          className="group bg-white dark:bg-[rgb(31,31,31)] w-full overflow-hidden whitespace-nowrap rounded-[20px] max-md:max-w-full hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)] transition-colors"
        >
          <div className="border dark:border-[rgba(60,60,60,1)] flex w-full items-stretch gap-5 flex-wrap justify-between p-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full max-md:flex-col max-md:items-start max-md:gap-2.5 transition-colors duration-300">
            <div className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-base leading-[1.4] tracking-[-0.01px] my-auto max-md:my-0 transition-colors duration-300">
              E-mail
            </div>
            <div className="flex items-center gap-5 text-[22px] text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-right tracking-[-0.44px] leading-[1.2] max-md:text-[18px] max-md:flex-col max-md:items-start max-md:gap-2.5 max-md:text-left transition-colors duration-300">
              <div className="whitespace-nowrap">
                canapatijohnfrancis@gmail.com
              </div>
              <div className="relative w-14 h-10 flex items-center justify-end max-md:justify-start max-md:w-10">
                <div className="absolute right-0 bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex items-center justify-center w-10 h-10 rounded-[10px] transition-all duration-300 group-hover:w-14 max-md:right-auto max-md:left-0">
                  <svg 
                    className="w-5 h-5 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>
        
        <button
          onClick={handleLinkedInClick}
          className="group bg-white dark:bg-[rgb(31,31,31)] w-full overflow-hidden whitespace-nowrap mt-2.5 rounded-[20px] max-md:max-w-full hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)] transition-colors"
        >
          <div className="border dark:border-[rgba(60,60,60,1)] flex w-full items-stretch gap-5 flex-wrap justify-between p-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full max-md:flex-col max-md:items-start max-md:gap-2.5 transition-colors duration-300">
            <div className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-base leading-[1.4] tracking-[-0.01px] my-auto max-md:my-0 transition-colors duration-300">
              LinkedIn
            </div>
            <div className="flex items-center gap-5 text-[22px] text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-right tracking-[-0.44px] leading-[1.2] max-md:text-[18px] max-md:flex-col max-md:items-start max-md:gap-2.5 max-md:text-left transition-colors duration-300">
              <div className="whitespace-nowrap">
                in/jf-canapati
              </div>
              <div className="relative w-14 h-10 flex items-center justify-end max-md:justify-start max-md:w-10">
                <div className="absolute right-0 bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex items-center justify-center w-10 h-10 rounded-[10px] transition-all duration-300 group-hover:w-14 max-md:right-auto max-md:left-0">
                  <svg 
                    className="w-5 h-5 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>

        <button
          onClick={handleGitHubClick}
          className="group bg-white dark:bg-[rgb(31,31,31)] w-full overflow-hidden whitespace-nowrap mt-2.5 rounded-[20px] max-md:max-w-full hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)] transition-colors"
        >
          <div className="border dark:border-[rgba(60,60,60,1)] flex w-full items-stretch gap-5 flex-wrap justify-between p-5 rounded-[20px] border-[rgba(234,234,234,1)] border-solid max-md:max-w-full max-md:flex-col max-md:items-start max-md:gap-2.5 transition-colors duration-300">
            <div className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-base leading-[1.4] tracking-[-0.01px] my-auto max-md:my-0 transition-colors duration-300">
              GitHub
            </div>
            <div className="flex items-center gap-5 text-[22px] text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-right tracking-[-0.44px] leading-[1.2] max-md:text-[18px] max-md:flex-col max-md:items-start max-md:gap-2.5 max-md:text-left transition-colors duration-300">
              <div className="whitespace-nowrap">
                frncscnpt
              </div>
              <div className="relative w-14 h-10 flex items-center justify-end max-md:justify-start max-md:w-10">
                <div className="absolute right-0 bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex items-center justify-center w-10 h-10 rounded-[10px] transition-all duration-300 group-hover:w-14 max-md:right-auto max-md:left-0">
                  <svg 
                    className="w-5 h-5 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>

        <div className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-sm leading-[1.3] tracking-[-0.01px] text-center self-center mt-6 transition-colors duration-300">
          2026 © Feinpoint: JF
        </div>
      </div>
    </footer>
  );
};
