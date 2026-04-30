import React from 'react';

export const OverviewSection: React.FC = () => {
  return (
    <section className="section-card h-full flex flex-col">
      <div className="section-label">
        Overview
      </div>
      <div className="text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] font-normal tracking-[-0.01px] leading-[1.6] mt-3 transition-colors duration-300">
        I’m a <span className="font-bold text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]">BSIT graduate</span> with a systems-first mindset, focused on building clear and maintainable solutions.
      </div>

      <p className="text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] font-normal tracking-[-0.01px] leading-[1.6] mt-2.5 transition-colors duration-300">
        I help <span className="font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]">SMEs</span> turn complex needs into practical digital tools that improve operations and deliver real value. I learn fast, communicate across technical and non-technical teams, and iterate quickly with a focus on quality and usability.
      </p>

      <p className="text-sm text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] font-normal tracking-[-0.01px] leading-[1.6] mt-2.5 transition-colors duration-300">
        I’m also passionate about <span className="font-medium text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)]">integrating AI</span>, using machine learning and automation to build smarter, more intuitive applications that solve real problems.
      </p>
    </section>
  );
};
