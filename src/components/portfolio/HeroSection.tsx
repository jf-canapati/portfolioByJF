import React from 'react';

export const HeroSection: React.FC = () => {
  const handleDownloadCV = () => {
    window.open('/CanapatiJF_CV.pdf', '_blank');
  };

  const handleGetInTouch = () => {
    const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=canapatijohnfrancis@gmail.com&su=Let\'s Connect&body=Hi Francis, I would like to get in touch with you.';
    window.open(gmailComposeUrl, '_blank');
  };

  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] pl-5 pr-[76px] py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 max-md:px-5 transition-colors duration-300">
      <div className="gap-[11px] flex max-md:flex-col max-md:items-center max-md:gap-5">
        <div className="w-[35%] max-md:w-full">
          <img
            src="/profile.png"
            className="aspect-[1] object-cover w-[200px] max-md:w-full shrink-0 max-w-full rounded-[20px]"
            alt="Francis Canapati profile"
          />
        </div>
        <div className="w-[65%] max-md:w-full max-md:text-center">
          <div className="flex w-full flex-col items-stretch max-md:items-center text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] font-normal tracking-[-0.01px] transition-colors duration-300">
            <div className="flex items-center gap-[5px] text-sm leading-[1.3]">
              <div className="bg-[rgba(7,230,74,1)] flex w-2 shrink-0 h-2 rounded-[10px]" />
              <div className="basis-auto">
                Available for Work
              </div>
            </div>
            <h1 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-[46px] leading-[1.1] tracking-[-0.92px] mt-5 max-md:mt-2.5 max-md:text-[32px] transition-colors duration-300">
              Francis Canapati
            </h1>
            <h2 className="text-[22px] leading-[1.2] tracking-[-0.44px] mt-[5px] max-md:text-[18px]">
              Full-Stack Developer | Technical Writer
            </h2>
            <div className="flex items-stretch gap-2.5 text-base text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] leading-[1.4] mt-[40px] max-md:mt-5 max-md:flex-col max-md:w-full transition-colors duration-300">
              <button
                onClick={handleDownloadCV}
                className="bg-white dark:bg-[rgb(31,31,31)] overflow-hidden rounded-[32px] border flex items-center justify-center gap-[5px] px-[18px] py-[9px] border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] border-solid hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)] transition-colors max-md:w-full"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/d116ff251195dbd167f35697fe27757a1a928c15?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 shrink-0"
                  alt="Download icon"
                />
                <span>Download CV</span>
              </button>
              <button
                onClick={handleGetInTouch}
                className="bg-white dark:bg-[rgb(31,31,31)] overflow-hidden rounded-[32px] border flex items-center justify-center gap-[5px] px-[18px] py-[9px] border-[rgba(234,234,234,1)] dark:border-[rgba(60,60,60,1)] border-solid hover:bg-[rgba(0,0,0,0.01)] dark:hover:bg-[rgba(255,255,255,0.02)] transition-colors max-md:w-full"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/c4b72f84cdd3ea954a9395cf1c2355e86d480cbf?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 shrink-0"
                  alt="Contact icon"
                />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
