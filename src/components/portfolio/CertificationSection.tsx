import React from 'react';
import { Link } from 'react-router-dom';
import { CertificationItem } from './CertificationItem';
import { certifications } from '@/data/certifications';

export const CertificationSection: React.FC = () => {
  const handleCertificationClick = (url: string) => {
    window.open(url, '_blank');
  };

  // Only display the first 3 certifications for the home page
  const displayedCertifications = certifications.slice(0, 3);

  return (
    <section className="section-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="section-label">
          Certification
        </div>
        <Link 
          to="/certifications"
          className="text-[11px] text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] hover:text-[rgba(20,20,20,1)] dark:hover:text-[rgba(240,240,240,1)] transition-colors flex items-center gap-1 group"
        >
          View all
          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        {displayedCertifications.map((certification, index) => (
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
