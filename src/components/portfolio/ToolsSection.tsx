import React from 'react';
import { ToolCard } from './ToolCard';

const tools = [
  {
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/dc9e88925cdc472f6d64758cb92c46caafd576ec?placeholderIfAbsent=true",
    name: "Webflow",
    description: "No-Code Website Builder"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/eaf5c322d8fbd6e83d506f42604b71f354771502?placeholderIfAbsent=true",
    name: "Framer",
    description: "No-Code Website Builder"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/c7e8d7a574fa959a021d0b066e5213523e19c553?placeholderIfAbsent=true",
    name: "NextJS",
    description: "Full Stack Framework"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/def9735b13b561d74a5ce81c01bda75e68244996?placeholderIfAbsent=true",
    name: "Figma",
    description: "Design Tool"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/07565733c3645947d309639da593b04996361de2?placeholderIfAbsent=true",
    name: "Capcut",
    description: "Editing Software"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/ba631920f9f533fe5926b4dce442c392776fc0cc?placeholderIfAbsent=true",
    name: "GSAP",
    description: "Animation Library"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/da40fac6a7e361292f148b3c10e09655315b719a?placeholderIfAbsent=true",
    name: "Manus",
    description: "Automation Tool"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/252147424d45a8de3953885718af5cb85fc7fc99?placeholderIfAbsent=true",
    name: "Notion",
    description: "Project Management"
  }
];

export const ToolsSection: React.FC = () => {
  const handleToolClick = (name: string) => {
    console.log(`Tool clicked: ${name}`);
  };

  return (
    <section className="bg-white flex w-full flex-col items-stretch mt-2.5 p-5 rounded-[32px] max-md:max-w-full">
      <div className="bg-[rgba(234,234,234,1)] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-3.5 rounded-[10px]">
        <div>Tools</div>
      </div>
      <div className="mt-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[0]}
              onClick={() => handleToolClick(tools[0].name)}
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[1]}
              onClick={() => handleToolClick(tools[1].name)}
            />
          </div>
        </div>
      </div>
      <div className="mt-2.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[2]}
              onClick={() => handleToolClick(tools[2].name)}
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[3]}
              onClick={() => handleToolClick(tools[3].name)}
            />
          </div>
        </div>
      </div>
      <div className="mt-2.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[4]}
              onClick={() => handleToolClick(tools[4].name)}
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[5]}
              onClick={() => handleToolClick(tools[5].name)}
            />
          </div>
        </div>
      </div>
      <div className="mt-2.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[6]}
              onClick={() => handleToolClick(tools[6].name)}
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[7]}
              onClick={() => handleToolClick(tools[7].name)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
