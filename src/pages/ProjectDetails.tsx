import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { Navbar } from '@/components/portfolio/Navbar';
import { Footer } from '@/components/portfolio/Footer';
import { ProjectHeader } from '@/components/portfolio/project-details/ProjectHeader';
import { ProjectDetailsInfo } from '@/components/portfolio/project-details/ProjectDetailsInfo';
import { ProjectDescription } from '@/components/portfolio/project-details/ProjectDescription';
import { ProjectImages } from '@/components/portfolio/project-details/ProjectImages';
import { NextProject } from '@/components/portfolio/project-details/NextProject';

// Project order for navigation
const projectOrder = ['davids-salon', 'copit', 'mag-grantees', 'seek-tizen', 'tandrio', 'lsb-violation'];

// Project data
const projectsData: Record<string, any> = {
  'davids-salon': {
    title: "David's Salon System",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/86856ec891789b8216d0a2ceb79b1aa4799b104f?placeholderIfAbsent=true",
    industry: "Salon & Beauty",
    client: "David's Salon",
    year: "2025",
    services: "Web, Mobile & Kiosk Development",
    liveUrl: "https://example.com",
    description: "A comprehensive salon operations management system designed for David's Salon, featuring a multi-platform architecture spanning web, mobile, and kiosk interfaces. The system streamlines appointment booking, customer management, and service tracking while introducing an innovative AI-powered hairstyle recommendation kiosk that enhances customer experience through personalized style suggestions based on facial features and preferences.",
    images: [
      {
        id: 'davids-1',
        src: '/web-david-salon.png',
        alt: "David's Salon web dashboard"
      },
      {
        id: 'davids-2',
        src: '/mobile-david-salon.png',
        alt: "David's Salon mobile app"
      },
      {
        id: 'davids-3',
        src: '/kiosk-david-salon.png',
        alt: "David's Salon kiosk interface"
      }
    ],
  },
  'copit': {
    title: "COPit",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/2522b6504e62a3ff547042479207fada888afa95?placeholderIfAbsent=true",
    industry: "E-commerce",
    client: "Skydev.Solutions Inc.",
    year: "2025",
    services: "Mobile App Development",
    liveUrl: undefined,
    description: "COPit revolutionizes the thrift shopping experience through a competitive mobile marketplace featuring the innovative Mine-Steal-Lock algorithm and real-time auction system. Developed for the 'Automate the Future: A Hackathon for Innovators' event, the app integrates location tracking for buyer-seller proximity, push notifications for bidding updates, payment gateway integration, and an AI-driven streaming feature that automatically detects and highlights items during live showcases. The project secured 2nd Runner-Up and Best Presenter awards.",
    images: [
      {
        id: 'copit-1',
        src: '/mobile-copit.png',
        alt: "COPit app home screen"
      },
      {
        id: 'copit-2',
        src: '/mobile-copitv2.png',
        alt: "COPit auction system"
      },
      {
        id: 'copit-3',
        src: '/copitv3.png',
        alt: "COPit AI streaming feature"
      }
    ],
  },
  'mag-grantees': {
    title: "Mag-Grantees",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/29b4dccd69f5e1718112a11f4ea189251f566030?placeholderIfAbsent=true",
    industry: "Education",
    client: "Magsaysay Foundation",
    year: "2024",
    services: "Web & Mobile Development",
    liveUrl: undefined,
    description: "A comprehensive scholarship management system built for the Magsaysay Foundation, streamlining the entire scholarship lifecycle from application to disbursement. The platform features both web and mobile interfaces, enabling students to apply for scholarships, track application status, and manage their grants while providing administrators with powerful tools for applicant evaluation, fund allocation, and reporting. The system improves transparency and efficiency in scholarship distribution.",
    images: [
      {
        id: 'mag-1',
        src: 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=Mag-Grantees+Dashboard',
        alt: "Mag-Grantees dashboard"
      },
      {
        id: 'mag-2',
        src: 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=Mag-Grantees+Application',
        alt: "Mag-Grantees application form"
      }
    ],
  },
  'seek-tizen': {
    title: "Seek-tiZen",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/68fb7d9e65660dd90f5143643e14ab6687cefc0d?placeholderIfAbsent=true",
    industry: "Public Safety",
    client: "Local Government Unit",
    year: "2024",
    services: "Web & Mobile Development, AI Integration",
    liveUrl: undefined,
    description: "An innovative public safety system designed to help locate missing senior citizens through AI-powered facial recognition technology. The platform consists of a web-based dashboard for LGU staff to manage cases and a mobile application for citizens to report sightings. The system leverages machine learning algorithms to match reported sightings with missing persons database, providing real-time alerts and location tracking to facilitate faster recovery and ensure the safety of elderly community members.",
    images: [
      {
        id: 'seek-1',
        src: 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=Seek-tiZen+Web',
        alt: "Seek-tiZen web dashboard"
      },
      {
        id: 'seek-2',
        src: 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=Seek-tiZen+Mobile',
        alt: "Seek-tiZen mobile app"
      },
      {
        id: 'seek-3',
        src: 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=Seek-tiZen+AI',
        alt: "Seek-tiZen AI recognition"
      }
    ],
  },
  'tandrio': {
    title: "Tandrio",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/ae4ea565ba9ff167b0b6417615849efee1e7c1f2?placeholderIfAbsent=true",
    industry: "Business Management",
    year: "2024",
    services: "Web Development",
    liveUrl: undefined,
    description: "A modern web application designed to streamline business operations and management processes. The platform provides tools for project tracking, team collaboration, resource allocation, and performance analytics. Built with a focus on user experience and efficiency, Tandrio helps businesses optimize their workflows, improve team productivity, and make data-driven decisions through comprehensive reporting and visualization features.",
    images: [
      {
        id: 'tandrio-1',
        src: 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=Tandrio+Dashboard',
        alt: "Tandrio dashboard"
      },
      {
        id: 'tandrio-2',
        src: 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=Tandrio+Analytics',
        alt: "Tandrio analytics"
      }
    ],
  },
  'lsb-violation': {
    title: "LSB Violation System",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/86856ec891789b8216d0a2ceb79b1aa4799b104f?placeholderIfAbsent=true",
    industry: "Education",
    client: "Lyceum of Subic Bay",
    year: "2024",
    services: "Web Development",
    liveUrl: undefined,
    description: "A comprehensive violation tracking and management system developed for Lyceum of Subic Bay to digitize and streamline the student discipline process. The web-based platform enables administrators to record, track, and manage student violations, generate reports, and maintain a centralized database of disciplinary records. The system improves transparency, ensures consistent policy enforcement, and provides valuable insights through analytics for better campus management.",
    images: [
      {
        id: 'lsb-1',
        src: 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=LSB+Violation+Dashboard',
        alt: "LSB Violation System dashboard"
      },
      {
        id: 'lsb-2',
        src: 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=LSB+Violation+Reports',
        alt: "LSB Violation System reports"
      }
    ],
  },
};

export const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projectId ? projectsData[projectId] : null;
  
  // Get next project
  const currentIndex = projectId ? projectOrder.indexOf(projectId) : -1;
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % projectOrder.length : 0;
  const nextProjectId = projectOrder[nextIndex];
  const nextProject = projectsData[nextProjectId];

  useEffect(() => {
    // Force scroll to top BEFORE initializing Lenis
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Small delay to ensure scroll happens before Lenis takes over
    const initTimeout = setTimeout(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        infinite: false,
      });

      // Ensure Lenis starts at top
      lenis.scrollTo(0, { immediate: true });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      const rafId = requestAnimationFrame(raf);

      // Add fade-in animation to sections
      const animTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach((section, index) => {
          setTimeout(() => {
            section.classList.add('fade-in-visible');
          }, index * 30);
        });
      }, 50);

      // Cleanup function
      return () => {
        clearTimeout(animTimeout);
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }, 10);

    return () => {
      clearTimeout(initTimeout);
    };
  }, [projectId]);

  if (!project) {
    return (
      <div className="bg-[#F0F0F0] dark:bg-[rgb(20,20,20)] min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-[rgba(20,20,20,1)] dark:text-[rgba(240,240,240,1)] text-4xl mb-4 transition-colors duration-300">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-[rgba(80,80,80,1)] dark:text-[rgba(180,180,180,1)] hover:text-[rgba(20,20,20,1)] dark:hover:text-[rgba(240,240,240,1)] transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F0F0F0] dark:bg-[rgb(20,20,20)] min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="flex w-full flex-col overflow-hidden items-center justify-center px-20 py-2.5 max-md:px-2.5 max-md:py-2.5 max-md:max-w-full">
        <div className="w-[760px] max-w-full space-y-[10px]">
          <div className="fade-in-section">
            <section className="bg-white dark:bg-[rgb(31,31,31)] flex w-full flex-col items-stretch pl-5 pr-5 py-5 rounded-[32px] max-md:max-w-full transition-colors duration-300">
              <ProjectHeader
                title={project.title}
                icon={project.icon}
                liveUrl={project.liveUrl}
              />
              
              <ProjectDetailsInfo
                industry={project.industry}
                client={project.client}
                year={project.year}
                services={project.services}
              />
              
              <ProjectDescription description={project.description} />
            </section>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="fade-in-section">
              <ProjectImages images={project.images} />
            </div>
          )}

          <div className="fade-in-section">
            <NextProject
              nextProjectId={nextProjectId}
              nextProjectTitle={nextProject.title}
              nextProjectImage={nextProject.images && nextProject.images.length > 0 
                ? nextProject.images[0].src 
                : 'https://placehold.co/1600x900/1f1f1f/eaeaea?text=Next+Project'}
            />
          </div>

          {/* Add more sections here as needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
};
