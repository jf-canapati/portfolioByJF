import React from 'react';

export const OverviewSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] flex flex-col overflow-hidden text-base text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] leading-[22px] mt-2.5 pl-5 pr-[30px] py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 transition-colors duration-300">
      <div className="bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] inline-flex items-center text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium whitespace-nowrap px-2.5 py-[8.5px] rounded-[10px] w-fit transition-colors duration-300">
        Overview
      </div>
      <div className="font-normal tracking-[-0.01px] self-stretch mt-5 max-md:max-w-full">
        <span className="font-bold">Full-Stack Developer and Technical Documentation Specialist</span> with a focus on structured, standards-driven system development.
          Based in the Philippines, I am an Information Technology student combining strong technical foundations
          with hands-on experience in building web and mobile applications.
      </div>
      <p className="font-normal tracking-[-0.01px] mt-5 max-md:mt-2.5 max-md:max-w-full">
        From developing full-stack systems to producing clear and well-structured technical documentation,
        I help teams deliver functional solutions backed by organized and professional project outputs.
      </p>
    </section>
  );
};
