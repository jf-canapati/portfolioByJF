import React from 'react';
import { HackathonCard } from './HackathonCard';

const hackathons = [
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/bd5db062dcde273970f5a14d5f3e34a8220a92a2?placeholderIfAbsent=true",
    title: "Hackercup 2025",
    achievement: "Champion",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/550952cbba8d4dce98c5effc610cddaa3d9d2d10?placeholderIfAbsent=true"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/f79e826d668a515e6c6203e25c1a3f3cedef5ea9?placeholderIfAbsent=true",
    title: "Inventi Hackathon 2025",
    achievement: "2nd Place",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/49c8c6603ec07f4db3404683610526d80a806f2e?placeholderIfAbsent=true"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/bcdef490ba93ad1aa567a55a5bfadd9f2ee974bc?placeholderIfAbsent=true",
    title: "FFDG Hackfest 2024",
    achievement: "3rd Place",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/2c4a7c11241c25626a63452ed471ee16e461cdf0?placeholderIfAbsent=true"
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/a7bb748a9528812aa9abeb70d789ded4a2e3c55b?placeholderIfAbsent=true",
    title: "KMC Hackathon 2024",
    achievement: "Special Awardee",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/5d14af147ea4f62d4f647fb7619470756cf2e575?placeholderIfAbsent=true"
  }
];

export const HackathonsSection: React.FC = () => {
  const handleHackathonClick = (title: string) => {
    console.log(`Hackathon clicked: ${title}`);
  };

  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] flex w-full flex-col overflow-hidden items-stretch mt-2.5 pl-5 pr-5 py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 transition-colors duration-300">
      <div className="bg-[rgba(234,234,234,1)] dark:bg-[#3a3a3a] flex flex-col overflow-hidden items-stretch text-sm text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] font-medium whitespace-nowrap leading-[1.2] justify-center px-2.5 py-[8.5px] rounded-[10px] w-fit transition-colors duration-300">
        <div>Hackathons</div>
      </div>
      <div className="mt-5 max-md:max-w-full">
        <div className="gap-[10px] flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <HackathonCard
              {...hackathons[0]}
              onClick={() => handleHackathonClick(hackathons[0].title)}
            />
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <HackathonCard
              {...hackathons[1]}
              onClick={() => handleHackathonClick(hackathons[1].title)}
            />
          </div>
        </div>
      </div>
      <div className="mt-[10px] max-md:max-w-full">
        <div className="gap-[10px] flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <HackathonCard
              {...hackathons[2]}
              onClick={() => handleHackathonClick(hackathons[2].title)}
            />
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <HackathonCard
              {...hackathons[3]}
              onClick={() => handleHackathonClick(hackathons[3].title)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
