import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/5b1483ad18b47dcf4cf8ba649f85e5364f78632e?placeholderIfAbsent=true",
    title: "AHG Lab Venture Studio",
    industry: "Website",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/86856ec891789b8216d0a2ceb79b1aa4799b104f?placeholderIfAbsent=true"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/fd85823b9554ac2ffd19633155bcc0bf963cf4f2?placeholderIfAbsent=true",
    title: "Mindspark Health",
    industry: "Website",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/2522b6504e62a3ff547042479207fada888afa95?placeholderIfAbsent=true"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/17746e81c8941fff8a9910ae7a4e7257bdaacadb?placeholderIfAbsent=true",
    title: "Teleweight & Wellness",
    industry: "Website",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/29b4dccd69f5e1718112a11f4ea189251f566030?placeholderIfAbsent=true"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/4b64280ef48d7940a333fb7a8ca7c4d84790f16f?placeholderIfAbsent=true",
    title: "Gem-In-Ply",
    industry: "Website",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/68fb7d9e65660dd90f5143643e14ab6687cefc0d?placeholderIfAbsent=true"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/e974d772187b0ce500fbcfe351460c7c0f561815?placeholderIfAbsent=true",
    title: "Conso",
    industry: "Programming Language & Compiler",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/ae4ea565ba9ff167b0b6417615849efee1e7c1f2?placeholderIfAbsent=true"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/1a930d209d8138b13624f91690e46166f901ad4b?placeholderIfAbsent=true",
    title: "GDG PLM",
    industry: "Website",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/56265a8f6296e4b320ba807ebdd84216ec4db88f?placeholderIfAbsent=true"
  }
];

export const ProjectsSection: React.FC = () => {
  const handleProjectClick = (title: string) => {
    console.log(`Project clicked: ${title}`);
  };

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-stretch mt-2.5 p-5 rounded-[32px] max-md:max-w-full">
      <div className="bg-[rgba(234,234,234,1)] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-[13px] rounded-[10px]">
        <div>Projects</div>
      </div>
      <div className="mt-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ProjectCard
              {...projects[0]}
              onClick={() => handleProjectClick(projects[0].title)}
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <ProjectCard
              {...projects[1]}
              onClick={() => handleProjectClick(projects[1].title)}
            />
          </div>
        </div>
      </div>
      <div className="mt-2.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ProjectCard
              {...projects[2]}
              onClick={() => handleProjectClick(projects[2].title)}
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <ProjectCard
              {...projects[3]}
              onClick={() => handleProjectClick(projects[3].title)}
            />
          </div>
        </div>
      </div>
      <div className="mt-2.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ProjectCard
              {...projects[4]}
              onClick={() => handleProjectClick(projects[4].title)}
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <ProjectCard
              {...projects[5]}
              onClick={() => handleProjectClick(projects[5].title)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
