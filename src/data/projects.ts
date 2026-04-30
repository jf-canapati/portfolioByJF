export const projects = [
  {
    id: 'davids-salon',
    image: "/david-salon.png",
    title: "David's Salon System",
    subtitle: "Modernizing Salon Operations",
    industry: "Web, Mobile & Kiosk",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/86856ec891789b8216d0a2ceb79b1aa4799b104f?placeholderIfAbsent=true",
    comingSoon: false,
    url: "https://official-david-salon-a6450.web.app/",
    description: "A multi-platform ecosystem designed to modernize salon operations with AI integration.",
    fullDescription: "The David's Salon System is a comprehensive digital transformation project aimed at streamlining every aspect of salon management. From the customer-facing kiosk for virtual hairstyle try-ons to the mobile app for easy booking, the system creates a seamless experience for both clients and staff. The backend provides powerful analytics and resource management tools, allowing salon owners to optimize their operations based on real-time data.",
    features: [
      { title: "AI Hairstyle Recommendation", description: "Uses computer vision and AI to suggest the best hairstyles based on face shape and features." },
      { title: "Real-time Appointment Booking", description: "Seamless scheduling system that syncs across mobile, web, and kiosk platforms." },
      { title: "Kiosk Self-Service Integration", description: "In-store digital kiosks that allow clients to check in and explore services independently." },
      { title: "Staff Performance Analytics", description: "Detailed dashboards for salon managers to track productivity and customer satisfaction." },
      { title: "Inventory Management System", description: "Automated tracking of salon products with low-stock alerts and order management." }
    ],
    technologies: ["React", "Firebase", "Tailwind CSS", "Cloud Functions"]
  },
  {
    id: 'copit',
    image: "/mobile-copit.png",
    title: "COPit",
    subtitle: "Competitive Thriftshopping",
    industry: "Mobile Commerce",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/2522b6504e62a3ff547042479207fada888afa95?placeholderIfAbsent=true",
    comingSoon: false,
    url: "https://copit-msl.vercel.app",
    description: "A competitive thriftshopping platform featuring a unique Mine-Steal-Lock mechanic and bidding system.",
    fullDescription: "COPit redefines the thriftshopping experience by introducing gamified competitive mechanics. Users can 'Mine' items to claim them, 'Steal' from others within a limited window, or 'Lock' their finds to secure them. The platform also features a real-time bidding system for high-demand vintage and second-hand items, creating an exciting and fast-paced marketplace for fashion enthusiasts.",
    features: [
      { title: "Mine-Steal-Lock Mechanic", description: "A gamified shopping system where users can claim, snatch, or secure items in real-time." },
      { title: "Real-time Bidding System", description: "High-stakes auctions for exclusive thrift finds with live countdowns and notifications." },
      { title: "Dynamic Item Snatching", description: "Strategic 'Steal' window that allows users to compete for high-value items before they are locked." },
      { title: "Thrift Market Analytics", description: "Real-time price tracking and demand metrics for vintage and second-hand goods." },
      { title: "Secure Transaction Flow", description: "Integrated payment system that supports the fast-paced competitive bidding environment." }
    ],
    technologies: ["React Native", "Expo", "Supabase", "Node.js"]
  },
  {
    id: 'mag-grantees',
    image: "",
    title: "Mag-Grantees",
    subtitle: "Scholarship Portal",
    industry: "Web & Mobile",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/29b4dccd69f5e1718112a11f4ea189251f566030?placeholderIfAbsent=true",
    comingSoon: false,
    url: "https://mag-grantees.kesug.com/",
    description: "A centralized platform for managing educational grants and scholarship applications.",
    fullDescription: "Mag-Grantees is designed to solve the complexities of managing thousands of scholarship applications. The portal provides a clear path for students to apply for grants, track their status, and submit required documentation. For administrators, it offers an automated verification engine and budget tracking tools to ensure that funds are distributed efficiently and transparently.",
    features: [
      { title: "Automated Document Verification", description: "AI-assisted checking of submitted documents to ensure compliance with scholarship requirements." },
      { title: "Scholarship Status Tracking", description: "Real-time updates for students throughout the application and disbursement lifecycle." },
      { title: "Admin Approval Workflow", description: "Multi-level approval process for scholarship grants with detailed audit trails." },
      { title: "Budget Allocation Analytics", description: "Visual reports for administrators to monitor fund distribution across different grant categories." },
      { title: "SMS Notification System", description: "Automatic text alerts for students regarding application status and disbursement dates." }
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "MySQL"]
  },
  {
    id: 'lsb-violation',
    image: "",
    title: "LSB Violation System",
    subtitle: "District Compliance Platform",
    industry: "Web Application",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/86856ec891789b8216d0a2ceb79b1aa4799b104f?placeholderIfAbsent=true",
    comingSoon: false,
    url: "https://lsb-svms.kesug.com/",
    description: "Streamlining administrative compliance and violation tracking for school boards.",
    fullDescription: "The LSB Violation System brings transparency to administrative compliance within the local school district. It provides a structured environment for reporting and resolving issues, from facility maintenance violations to administrative policy breaches. The system ensures that every report is tracked through to resolution, with automated escalations and detailed audit logs.",
    features: [
      { title: "Compliance Audit Logging", description: "Maintains a permanent, unalterable record of all compliance checks and administrative reports." },
      { title: "Automated Escalation Logic", description: "Automatically notifies higher authorities if violations are not resolved within set timeframes." },
      { title: "Resolution Workflow Tracking", description: "Step-by-step visibility into the status of every reported violation from filing to fix." },
      { title: "District-wide Reporting", description: "Aggregated data views for school board members to identify systemic issues across the district." },
      { title: "Role-based Access Control", description: "Secure access levels for teachers, principals, and board administrators." }
    ],
    technologies: ["PHP", "Laravel", "Bootstrap", "MySQL"]
  },
  {
    id: 'tandrio',
    image: "",
    title: "Tandrio",
    subtitle: "Creative Project Management",
    industry: "Web Application",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/ae4ea565ba9ff167b0b6417615849efee1e7c1f2?placeholderIfAbsent=true",
    comingSoon: true,
    description: "A modern project management tool designed for creative teams.",
    fullDescription: "Tandrio emphasizes visual workflow planning and seamless collaboration. It provides creative teams with a unique board-based interface that goes beyond traditional Kanban, allowing for more fluid and intuitive project tracking across distributed environments.",
    features: [
      { title: "Visual Workflow Boards", description: "Customizable boards that represent complex creative workflows beyond simple lists." },
      { title: "Collaborative Resource Planning", description: "Real-time allocation of team members and assets to different project phases." },
      { title: "Asset Management Integration", description: "Seamlessly link design files and creative assets directly to project tasks." },
      { title: "Team Velocity Tracking", description: "AI-driven insights into team productivity and project timeline forecasting." },
      { title: "Custom Creative Workflows", description: "Build and save workflow templates tailored specifically to creative project needs." }
    ],
    technologies: ["Next.js", "Zustand", "Tailwind CSS"]
  }
];
