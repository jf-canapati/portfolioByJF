import React from 'react';
import { ExperienceItem } from './ExperienceItem';

const experiences = [
  {
    company: "Webflow",
    position: "Freelance Web Developer",
    description: "As a specialized developer for high-growth ventures and clinics, I engineered high-performance digital ecosystems for AHG Lab, Teleweight, and Mindspark using Webflow, GSAP, and LottieFiles, consistently achieving 90+ Lighthouse scores and driving a 6.2% CTR for Teleweight within its first 90 days.",
    timeline: "June 2025 - Now",
    location: "Manila, PH",
    logo: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/af11d4fef9634282d5b6a28b0b5fee34591dd298?placeholderIfAbsent=true"
  },
  {
    company: "Manus",
    position: "Viral Growth Expert",
    description: "I lead a network of 20+ Tech UGC Creators while scaling my own personal brand to 700k+ views in 28 days through high-retention, practical demo-driven content that prioritizes product education and real-world use-cases.",
    timeline: "January 2026 - Now",
    location: "Singapore",
    logo: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/87b42b243f0f201a8e1bc5ab781f7ab0091c8755?placeholderIfAbsent=true"
  },
  {
    company: "AHG Lab Venture Studio",
    position: "Web Development Intern",
    description: "During this internship, I spearheaded the transition of the company's digital assets into Webflow and Figma while networking with 20+ startups and optimizing promotional media workflows through the integration of ElevenLabs and Notion AI.",
    timeline: "June 2025 - November 2025",
    location: "Manila, PH",
    logo: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/1e7ec46e6f06472387649a72b5c24058d0f0ddf8?placeholderIfAbsent=true"
  },
  {
    company: "Lovable",
    position: "Tech UGC Creator",
    description: "I generated over 1.4 Million total views in a 30-day campaign by producing high-fidelity demonstrations of AI-driven web development, maintaining an average video duration of 40s+ to maximize audience trust and practical understanding.",
    timeline: "September 2020 - July 2022",
    location: "San Francisco, CA",
    logo: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/9bfa0729391679ad38a1754c681c939a772dce29?placeholderIfAbsent=true"
  },
  {
    company: "Notion",
    position: "Campus Leader",
    description: "In my role leading the Content Creation department, I drive Notion adoption across campus by organizing 5 major face-to-face events and acting as a featured speaker on workspace architecture and project management.",
    timeline: "July 2024 - Now",
    location: "Manila, PH",
    logo: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/e8dd027c0276a453018a19af178f21b1d253cf32?placeholderIfAbsent=true"
  },
  {
    company: "Google Developer Groups",
    position: "Web Development Lead",
    description: "I architected community platforms using Next.js, Tailwind, and Contentful CMS, leading a team of 10 volunteers to achieve a 37% increase in organizational applications through enhanced digital visibility and modern technical branding.",
    timeline: "September 2024 - June 2025",
    location: "Manila, PH",
    logo: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/f5765344ca6c43dd39ff21a07e1d8b4e606eb99f?placeholderIfAbsent=true"
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="bg-white flex flex-col overflow-hidden items-stretch font-normal mt-2.5 p-5 rounded-[32px] max-md:max-w-full">
      <div className="bg-[rgba(234,234,234,1)] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-3 rounded-[10px]">
        <div>Experience</div>
      </div>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </section>
  );
};
