import React from 'react';

export const HeroSection: React.FC = () => {
  const handleDownloadCV = () => {
    window.open('/CanapatiJF_CV.pdf', '_blank');
  };

  const handleGetInTouch = () => {
    const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=jf.canapati@gmail.com&su=Let\'s Connect&body=Hi John Francis, I would like to get in touch with you.';
    window.open(gmailComposeUrl, '_blank');
  };

  return (
    <section className="section-card flex flex-col items-stretch">
      {/* Profile Header: Image + Info (Flex row on mobile, column on desktop) */}
      <div className="flex flex-row md:flex-col gap-4 items-stretch">
        {/* Profile Image */}
        <div className="relative shrink-0 w-[85px] md:w-full md:mb-4 group overflow-hidden rounded-md border dark:border-[rgba(60,60,60,1)] border-[rgba(234,234,234,1)]">
          <img
            src="/MyProfile.png"
            className="w-full h-auto md:aspect-[1.1] object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
            alt="Francis Canapati profile"
          />
        </div>
        
        {/* Info Area */}
        <div className="flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col">
              <h1 className="text-[16px] md:text-[18px] font-semibold text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] leading-tight tracking-tight transition-colors duration-300">
                John Francis Canapati
              </h1>
              <h2 className="text-xs md:text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] mt-0.5 transition-colors duration-300">
                Software Developer
              </h2>
            </div>
            
            {/* Social Icon */}
            <a 
              href="https://linkedin.com/in/jf-canapati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="shrink-0 text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] hover:opacity-70 transition-opacity"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Action Buttons (Inside Info Area for mobile column alignment) */}
          <div className="flex flex-row md:flex-col items-center md:items-stretch gap-2 text-[10px] md:text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] leading-[1.4] mt-6 md:mt-10 w-full transition-colors duration-300">
            <button
              onClick={handleDownloadCV}
              className="flex-1 bg-[rgba(20,20,20,1)] dark:bg-[rgba(240,240,240,1)] text-white dark:text-black overflow-hidden rounded-md flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 hover:opacity-90 transition-opacity"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/d116ff251195dbd167f35697fe27757a1a928c15?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-2.5 md:w-3.5 shrink-0 invert dark:invert-0"
                alt="Download icon"
              />
              <span className="font-medium whitespace-nowrap text-[9px] md:text-sm">Download CV</span>
            </button>
            <button
              onClick={handleGetInTouch}
              className="flex-1 bg-white dark:bg-[rgb(31,31,31)] overflow-hidden rounded-md border flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] border-solid hover:bg-[rgba(0,0,0,0.02)] dark:hover:bg-[rgba(255,255,255,0.03)] transition-colors"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/c4b72f84cdd3ea954a9395cf1c2355e86d480cbf?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-2.5 md:w-3.5 shrink-0"
                alt="Contact icon"
              />
              <span className="font-medium whitespace-nowrap text-[9px] md:text-sm">Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
