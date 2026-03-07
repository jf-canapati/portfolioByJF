import React from 'react';
import { ExperienceItem } from './ExperienceItem';

const experiences = [
  {
    company: "Skydev.Solutions Inc.",
    position: "Lead Developer",
    description: "I architected COPit's proprietary Mine-Steal-Lock algorithm and integrated real-time geolocation, payment gateways, and AI-powered visual recognition for the 'Automate the Future' hackathon. Secured 2nd Runner-Up and Best Presenter awards.",
    timeline: "June 2025",
    location: "Olongapo City, PH",
    logo: "/skydev-logo.jpg"
  },
  {
    company: "David's Salon",
    position: "Web Development Intern",
    description: "During this internship, I spearheaded the transition of the company's digital assets into a comprehensive multi-platform ecosystem, developing integrated web, mobile, and kiosk applications. Implemented an AI-powered hairstyle recommendation system and streamlined salon operations through automated booking and customer management solutions.",
    timeline: "March 2025 - May 2025",
    location: "Olongapo City, PH",
    logo: "/david-salon-logo.png"
  },
  {
    company: "Toon City Animation",
    position: "Industry Immersion Participant",
    description: "Gained comprehensive insights into professional animation pipelines from pre-production to post-production workflows. Participated in hands-on presentations and networked with Disney-affiliated animators, learning industry best practices and production methodologies behind internationally acclaimed animated features.",
    timeline: "January 2025",
    location: "Manila, PH",
    logo: "/tooncity-logo.jpg"
  },
  {
    company: "Probot Corp.",
    position: "Industry Immersion Participant",
    description: "Explored educational robotics innovations including BumbleBee Bot—a comprehensive hardware module teaching mobile robotics, home automation, smart city systems, AI, and IoT. Experienced drone soccer demonstrations, a competitive sport combining aerial robotics with strategic gameplay, showcasing the intersection of STEM education and emerging technologies.",
    timeline: "February 2025",
    location: "Quezon City, PH",
    logo: "/probot-logo.png"
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] flex flex-col overflow-hidden items-stretch font-normal mt-2.5 pl-5 pr-5 py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 transition-colors duration-300">
      <div className="bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-[8.5px] rounded-[10px] w-fit transition-colors duration-300">
        <div>Experience</div>
      </div>
      <div className="mt-5 space-y-[10px]">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};
