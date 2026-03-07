import React from 'react';
import { CertificationItem } from './CertificationItem';

const certifications = [
  {
    title: "Automate the Future: A Hackathon for Innovators",
    date: "October 2025",
    icon: "/skydev-logo.jpg",
    url: "/CanapatiJF_Cert1.png"
  },
  {
    title: "Emerging Technologies and Robotics",
    date: "October 2025",
    icon: "/probot-logo.png",
    url: "/CanapatiJF_Cert2.jpg"
  },
  {
    title: "Introduction to the Threat Landscape 2.0",
    date: "February 2025",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/1188aeeb3f16773f70af32bdb580b73283afc268?placeholderIfAbsent=true",
    url: "https://www.credly.com/badges/46fbdc3b-d263-45fe-96f4-7d0636a4cd0d/public_url"
  },
  {
    title: "Getting Started in Cybersecurity 2.0",
    date: "February 2025",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/1188aeeb3f16773f70af32bdb580b73283afc268?placeholderIfAbsent=true",
    url: "https://www.credly.com/badges/ad01e9c2-08d4-4d3b-827a-f255b80f2b2d/public_url"
  },
  {
    title: "Fortinet Certified Fundamentals Cybersecurity",
    date: "February 2025",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/1188aeeb3f16773f70af32bdb580b73283afc268?placeholderIfAbsent=true",
    url: "https://www.credly.com/badges/a91e1885-9922-4b89-ac70-147249220bc4/public_url"
  }
];

export const CertificationSection: React.FC = () => {
  const handleCertificationClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] flex flex-col overflow-hidden items-stretch font-normal mt-2.5 pl-5 pr-5 py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 transition-colors duration-300">
      <div className="bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-[8.5px] rounded-[10px] w-fit transition-colors duration-300">
        <div>Certification</div>
      </div>
      <div className="mt-5 space-y-[10px]">
        {certifications.map((certification, index) => (
          <CertificationItem
            key={index}
            title={certification.title}
            date={certification.date}
            icon={certification.icon}
            onClick={() => handleCertificationClick(certification.url)}
          />
        ))}
      </div>
    </section>
  );
};
