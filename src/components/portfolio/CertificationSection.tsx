import React from 'react';
import { CertificationItem } from './CertificationItem';

const certifications = [
  {
    title: "CIsco: Network Technician Career Path",
    date: "September 2025",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/1188aeeb3f16773f70af32bdb580b73283afc268?placeholderIfAbsent=true"
  },
  {
    title: "DataCamp: AI Fundamentals",
    date: "July 2025",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/ad7dad0b60b1067b921f5ddff9a76be1c6195da3?placeholderIfAbsent=true"
  },
  {
    title: "The Webflow Way",
    date: "October 2025",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/b13231248033c1a2316005c85c2c85649dbe9cdb?placeholderIfAbsent=true"
  },
  {
    title: "Notion Academy: Essentials",
    date: "October 2025",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/080a4512c339b88a527ebe936ea1bb1dabf3bf56?placeholderIfAbsent=true"
  }
];

export const CertificationSection: React.FC = () => {
  const handleCertificationClick = (title: string) => {
    console.log(`Certification clicked: ${title}`);
  };

  return (
    <section className="bg-white flex flex-col overflow-hidden items-stretch font-normal mt-2.5 p-5 rounded-[32px] max-md:max-w-full">
      <div className="bg-[rgba(234,234,234,1)] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-[13px] rounded-[10px]">
        <div>Certification</div>
      </div>
      {certifications.map((certification, index) => (
        <CertificationItem
          key={index}
          {...certification}
          onClick={() => handleCertificationClick(certification.title)}
        />
      ))}
    </section>
  );
};
