import React from 'react';
import { ToolCard } from './ToolCard';

const tools = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    name: "Figma",
    description: "UI/UX Design Tool",
    url: "https://www.figma.com"
  },
  {
    icon: "https://lovable.dev/favicon.ico",
    name: "Lovable",
    description: "Rapid Prototyping",
    url: "https://lovable.dev"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
    description: "Web & Mobile",
    url: "https://react.dev"
  },
  {
    icon: "https://www.cursor.com/favicon.ico",
    name: "Cursor",
    description: "AI-Assisted Development",
    url: "https://www.cursor.com"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
    description: "Full-Stack Web",
    url: "https://nextjs.org"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
    name: "Notion",
    description: "Documentation & Planning",
    url: "https://www.notion.so"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    name: "Firebase",
    description: "Database & Backend Platform",
    url: "https://firebase.google.com"
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/expo-1.svg",
    name: "Expo",
    description: "Cross-Platform App Tool",
    url: "https://expo.dev"
  }
];

export const ToolsSection: React.FC = () => {
  const handleToolClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] flex w-full flex-col items-stretch mt-2.5 pl-5 pr-5 py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 transition-colors duration-300">
      <div className="bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-[8.5px] rounded-[10px] w-fit transition-colors duration-300">
        <div>Tools</div>
      </div>
      <div className="mt-5 max-md:max-w-full">
        <div className="gap-[10px] flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[0]}
              onClick={() => handleToolClick(tools[0].url)}
            />
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[1]}
              onClick={() => handleToolClick(tools[1].url)}
            />
          </div>
        </div>
      </div>
      <div className="mt-[10px] max-md:max-w-full">
        <div className="gap-[10px] flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[2]}
              onClick={() => handleToolClick(tools[2].url)}
            />
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[3]}
              onClick={() => handleToolClick(tools[3].url)}
            />
          </div>
        </div>
      </div>
      <div className="mt-[10px] max-md:max-w-full">
        <div className="gap-[10px] flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[4]}
              onClick={() => handleToolClick(tools[4].url)}
            />
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[5]}
              onClick={() => handleToolClick(tools[5].url)}
            />
          </div>
        </div>
      </div>
      <div className="mt-[10px] max-md:max-w-full">
        <div className="gap-[10px] flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[6]}
              onClick={() => handleToolClick(tools[6].url)}
            />
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ToolCard
              {...tools[7]}
              onClick={() => handleToolClick(tools[7].url)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
