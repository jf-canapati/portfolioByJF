import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 'davids-salon',
    image: "/david-salon.png",
    title: "David's Salon System",
    industry: "Web, Mobile & Kiosk",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/86856ec891789b8216d0a2ceb79b1aa4799b104f?placeholderIfAbsent=true",
    comingSoon: false
  },
  {
    id: 'copit',
    image: "/mobile-copit.png",
    title: "COPit",
    industry: "Mobile Application",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/2522b6504e62a3ff547042479207fada888afa95?placeholderIfAbsent=true",
    comingSoon: false
  },
  {
    id: 'mag-grantees',
    image: "",
    title: "Mag-Grantees",
    industry: "Web & Mobile",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/29b4dccd69f5e1718112a11f4ea189251f566030?placeholderIfAbsent=true",
    comingSoon: true
  },
  {
    id: 'seek-tizen',
    image: "",
    title: "Seek-tiZen",
    industry: "Web & Mobile",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/68fb7d9e65660dd90f5143643e14ab6687cefc0d?placeholderIfAbsent=true",
    comingSoon: true
  },
  {
    id: 'tandrio',
    image: "",
    title: "Tandrio",
    industry: "Web Application",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/ae4ea565ba9ff167b0b6417615849efee1e7c1f2?placeholderIfAbsent=true",
    comingSoon: true
  },
  {
    id: 'lsb-violation',
    image: "",
    title: "LSB Violation System",
    industry: "Web Application",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/86856ec891789b8216d0a2ceb79b1aa4799b104f?placeholderIfAbsent=true",
    comingSoon: true
  }
];

export const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] flex w-full flex-col items-stretch mt-2.5 pl-5 pr-5 py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 transition-colors duration-300">
      <div className="bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-[8.5px] rounded-[10px] w-fit transition-colors duration-300">
        <div>Projects</div>
      </div>
      <div className="mt-5 max-md:max-w-full">
        <div className="gap-[10px] flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ProjectCard
              {...projects[0]}
              onClick={() => !projects[0].comingSoon && handleProjectClick(projects[0].id)}
            />
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0 max-md:mt-[10px]">
            <ProjectCard
              {...projects[1]}
              onClick={() => !projects[1].comingSoon && handleProjectClick(projects[1].id)}
            />
          </div>
        </div>
      </div>
      <div className="mt-[10px] max-md:max-w-full">
        <div className="gap-[10px] flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ProjectCard
              {...projects[4]}
              onClick={() => !projects[4].comingSoon && handleProjectClick(projects[4].id)}
            />
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0 max-md:mt-[10px]">
            <ProjectCard
              {...projects[3]}
              onClick={() => !projects[3].comingSoon && handleProjectClick(projects[3].id)}
            />
          </div>
        </div>
      </div>
      <div className="mt-[10px] max-md:max-w-full">
        <div className="gap-[10px] flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ProjectCard
              {...projects[2]}
              onClick={() => !projects[2].comingSoon && handleProjectClick(projects[2].id)}
            />
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0 max-md:mt-[10px]">
            <ProjectCard
              {...projects[5]}
              onClick={() => !projects[5].comingSoon && handleProjectClick(projects[5].id)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
