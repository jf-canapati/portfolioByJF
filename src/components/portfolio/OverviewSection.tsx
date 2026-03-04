import React from 'react';

export const OverviewSection: React.FC = () => {
  return (
    <section className="bg-white flex flex-col overflow-hidden text-base text-[rgba(80,80,80,1)] leading-[22px] mt-2.5 pl-5 pr-[45px] py-[22px] rounded-[32px] max-md:max-w-full max-md:pr-5">
      <div className="bg-[rgba(234,234,234,1)] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-[13px] rounded-[10px]">
        <div>Overview</div>
      </div>
      <div className="font-bold tracking-[-0.01px] self-stretch mt-[25px] max-md:max-w-full">
        Creative Developer and Growth Strategist
        <span className="font-normal">
          {" "}
          with a focus on brand-driven digital experiences.{" "}
        </span>
        <br />
        <span className="font-normal">
          Based in the Philippines, I combine a deep understanding of
          Computer Science with a hands-on{" "}
        </span>
        <br />
        <span className="font-normal">
          approach to web design and UGC production.
        </span>
      </div>
      <p className="font-normal tracking-[-0.01px] mt-7 max-md:max-w-full">
        From architecting full-stack applications to crafting viral growth
        loops, I help brands and <br />
        organizations build a meaningful, long-lasting digital presence.
      </p>
    </section>
  );
};
