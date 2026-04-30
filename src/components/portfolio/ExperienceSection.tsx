import React from 'react';
import { ExperienceItem } from './ExperienceItem';

const experiences = [
  {
    company: "David's Salon",
    position: "ERP Software Developer",
    description: "Spearheaded digital transformation into a multi-platform ecosystem with web, mobile, and kiosk applications. Implemented AI-powered hairstyle recommendations and streamlined salon operations.",
    timeline: "April 2025 - March 2026",
    location: "Olongapo City, PH",
    logo: "/david-salon-logo.png"
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="section-card h-full flex flex-col">
      <div className="section-label">
        Experience
      </div>
      <div className="mt-4 flex flex-col gap-4 flex-1">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};
