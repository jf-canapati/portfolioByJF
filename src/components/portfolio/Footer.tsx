import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailClick = () => {
    window.location.href = 'mailto:jf.canapati@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/jf-canapati', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/jf-canapati', '_blank');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', { email, message });
    setEmail('');
    setMessage('');
  };

  const LinkRow = ({ label, value, onClick }: { label: string; value: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="group inner-card !py-2 w-full cursor-pointer hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)]"
    >
      <div className="flex w-full items-center gap-3 justify-between max-md:flex-col max-md:items-start max-md:gap-1">
        <div className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] text-xs leading-[1.4] tracking-[-0.01px] transition-colors duration-300">
          {label}
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-right tracking-[-0.28px] leading-[1.2] max-md:text-left transition-colors duration-300">
          <span className="whitespace-nowrap">{value}</span>
          <div className="relative w-8 h-7 flex items-center justify-end max-md:justify-start max-md:w-7">
            <div className="absolute right-0 bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex items-center justify-center w-7 h-7 rounded-sm transition-all duration-300 group-hover:w-8 max-md:right-auto max-md:left-0">
              <svg 
                className="w-3.5 h-3.5 text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] transition-colors duration-300" 
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
  );

  return (
    <footer className="max-w-[1100px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 pb-12">
      <div className="flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="section-label w-fit">Contact</div>
            <h2 className="text-2xl font-medium tracking-[-0.03em] text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]">
              Let's create something together.
            </h2>
            <p className="text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] leading-relaxed">
              Available for freelance opportunities and full-time positions. 
              Always open to discussing new projects and creative ideas.
            </p>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            <button 
              onClick={handleEmailClick}
              className="group flex items-center justify-between py-3 border-b border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] hover:border-[rgba(20,20,20,1)] dark:hover:border-[rgba(240,240,240,1)] transition-colors"
            >
              <span className="text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] group-hover:text-[rgba(20,20,20,1)] dark:group-hover:text-[rgba(240,240,240,1)] transition-colors">E-mail</span>
              <span className="text-sm font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]">jf.canapati@gmail.com</span>
            </button>
            <button 
              onClick={handleLinkedInClick}
              className="group flex items-center justify-between py-3 border-b border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] hover:border-[rgba(20,20,20,1)] dark:hover:border-[rgba(240,240,240,1)] transition-colors"
            >
              <span className="text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] group-hover:text-[rgba(20,20,20,1)] dark:group-hover:text-[rgba(240,240,240,1)] transition-colors">LinkedIn</span>
              <span className="text-sm font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]">in/jf-canapati</span>
            </button>
            <button 
              onClick={handleGitHubClick}
              className="group flex items-center justify-between py-3 border-b border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] hover:border-[rgba(20,20,20,1)] dark:hover:border-[rgba(240,240,240,1)] transition-colors"
            >
              <span className="text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] group-hover:text-[rgba(20,20,20,1)] dark:group-hover:text-[rgba(240,240,240,1)] transition-colors">GitHub</span>
              <span className="text-sm font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]">jf-canapati</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] gap-4">
          <div className="text-[11px] font-medium text-[rgba(120,120,120,1)] dark:text-[rgba(160,160,160,1)] uppercase tracking-[0.1em] w-full text-center">
            2026 © JF Canapati
          </div>
        </div>
      </div>
    </footer>
  );
};
