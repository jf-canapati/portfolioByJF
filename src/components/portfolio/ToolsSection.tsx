import React from 'react';
import { ToolCard } from './ToolCard';

const techStack = {
  Frontend: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript",
      description: "Static Typing",
      url: "https://www.typescriptlang.org"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
      description: "Web & Mobile",
      url: "https://react.dev"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
      description: "Full-Stack Web",
      url: "https://nextjs.org"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      name: "Tailwind",
      description: "Styling Framework",
      url: "https://tailwindcss.com"
    }
  ],
  Backend: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      name: "PHP",
      description: "Server-side Scripting",
      url: "https://www.php.net"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      name: "Firebase",
      description: "BaaS & Auth",
      url: "https://firebase.google.com"
    },
    {
      icon: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg",
      name: "Supabase",
      description: "Open Source BaaS",
      url: "https://supabase.com"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
      description: "Server Runtime",
      url: "https://nodejs.org"
    }
  ],
  DevOps: [
    {
      icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
      name: "Vercel",
      description: "Deployment",
      url: "https://vercel.com"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      name: "Docker",
      description: "Containerization",
      url: "https://www.docker.com"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "Git",
      description: "Version Control",
      url: "https://git-scm.com"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      name: "GitHub",
      description: "CI/CD & Hosting",
      url: "https://github.com"
    }
  ],
  Tools: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Figma",
      description: "Design Tool",
      url: "https://www.figma.com"
    },
    {
      icon: "https://www.cursor.com/favicon.ico",
      name: "Cursor",
      description: "AI Code Editor",
      url: "https://www.cursor.com"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
      name: "Notion",
      description: "Docs & Planning",
      url: "https://www.notion.so"
    },
    {
      icon: "https://lovable.dev/favicon.ico",
      name: "Lovable",
      description: "Prototyping",
      url: "https://lovable.dev"
    }
  ]
};

export const ToolsSection: React.FC = () => {
  const handleToolClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="section-card">
      <div className="section-label">
        Tech Stack
      </div>
      
      <div className="mt-4 flex flex-col gap-3">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-1">
            <h4 className="text-[9px] uppercase tracking-[0.05em] text-[rgba(120,120,120,1)] dark:text-[rgba(160,160,160,1)] font-bold">
              {category}
            </h4>
            <div className="tools-grid">
              {items.map((tool) => (
                <ToolCard
                  key={tool.name}
                  {...tool}
                  onClick={() => handleToolClick(tool.url)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
