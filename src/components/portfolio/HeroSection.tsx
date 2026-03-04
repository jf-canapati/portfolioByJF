import React from 'react';

export const HeroSection: React.FC = () => {
  const handleDownloadCV = () => {
    // Implement CV download functionality
    console.log('Download CV clicked');
  };

  const handleGetInTouch = () => {
    // Implement contact functionality
    console.log('Get in Touch clicked');
  };

  return (
    <section className="bg-white pl-5 pr-[76px] py-5 rounded-[32px] max-md:max-w-full max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[35%] max-md:w-full max-md:ml-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/4fa1e03438cc5d9d7c2e3439714f96a9e5002088?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[200px] shrink-0 max-w-full rounded-[20px] max-md:mt-10"
            alt="Lauvigne Lumeda profile"
          />
        </div>
        <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch text-[rgba(80,80,80,1)] font-normal tracking-[-0.01px] mt-1 max-md:mt-10">
            <div className="flex items-stretch gap-[5px] text-sm leading-[1.3]">
              <div className="bg-[rgba(7,230,74,1)] flex w-2 shrink-0 h-2 rounded-[10px]" />
              <div className="basis-auto">
                Available for Work
              </div>
            </div>
            <h1 className="text-[rgba(20,20,20,1)] text-[46px] leading-[1.1] tracking-[-0.92px] mt-8 max-md:text-[40px] max-md:mr-2.5">
              Lauvigne Lumeda
            </h1>
            <h2 className="text-[22px] leading-[1.2] tracking-[-0.44px] mt-3">
              Web Developer | UGC Creator | E-Com
            </h2>
            <div className="flex items-stretch gap-2.5 text-base text-[rgba(20,20,20,1)] leading-[1.4] mt-[42px] max-md:mt-10">
              <button
                onClick={handleDownloadCV}
                className="bg-white overflow-hidden rounded-[32px] border flex items-stretch gap-[5px] px-5 py-[11px] border-[rgba(234,234,234,1)] border-solid hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/d116ff251195dbd167f35697fe27757a1a928c15?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 shrink-0"
                  alt="Download icon"
                />
                <span className="my-auto">Download CV</span>
              </button>
              <button
                onClick={handleGetInTouch}
                className="bg-white overflow-hidden rounded-[32px] border flex items-stretch gap-[5px] px-5 py-[11px] border-[rgba(234,234,234,1)] border-solid hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/c4b72f84cdd3ea954a9395cf1c2355e86d480cbf?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 shrink-0"
                  alt="Contact icon"
                />
                <span className="my-auto">Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
