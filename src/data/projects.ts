export const projects = [
  {
    id: 'davids-salon',
    image: "/projects/david-salon.png",
    title: "David's Salon ERP System",
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
    id: 'jongs-hvac',
    image: "/projects/hvac.png",
    title: "Jong's HVAC Solutions",
    subtitle: "Professional HVAC Solutions",
    industry: "Service Business Platform",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/86856ec891789b8216d0a2ceb79b1aa4799b104f?placeholderIfAbsent=true",
    comingSoon: false,
    url: "https://jongshvacph.vercel.app/",
    description: "A professional platform for air conditioning services, unit sales, and streamlined service requests.",
    fullDescription: "Jong's HVAC Solutions is a dedicated digital platform built to modernize local HVAC operations. It bridges the gap between traditional service businesses and digital customers by providing a fast, mobile-optimized experience for booking AC services, exploring brand-new units, and viewing verified work history.",
    features: [
      { title: "Multi-Unit Service Request", description: "A streamlined form that allows customers to request services for multiple AC units in a single submission." },
      { title: "Dynamic Product Catalog", description: "Showcases various AC types including split-type, window, and inverter units with technical specifications." },
      { title: "Regional Service Optimization", description: "Geographically targeted UI designed to cater to clients across Olongapo, Zambales, Bataan, and surrounding provinces." },
      { title: "Mobile-First Conversion", description: "Highly responsive design focused on converting mobile visitors through easy-to-use contact and booking triggers." },
      { title: "Workmanship Showcase", description: "A high-performance gallery component that builds brand trust by displaying successful project completions." }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "TanStack Query"]
  },
  {
    id: 'copit',
    image: "/projects/copit.png",
    title: "COPit",
    subtitle: "A Competitive Thrift Shopping App",
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
    image: "/projects/mag-grantees.png",
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
    image: "/projects/svms.jpeg",
    title: "Student Violation Management System",
    subtitle: "Lyceum of Subic Bay",
    industry: "Web Application",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/86856ec891789b8216d0a2ceb79b1aa4799b104f?placeholderIfAbsent=true",
    comingSoon: false,
    url: "https://lsb-svms.kesug.com/",
    description: "A centralized system for tracking and managing student disciplinary records and violations.",
    fullDescription: "The Student Violation Management System (SVMS) for Lyceum of Subic Bay is designed to digitize and streamline the tracking of student disciplinary actions. It replaces manual filing with a robust database that allows administrators to record violations, track resolution progress, and maintain a clear history of student conduct, ensuring fair and efficient management of school policies.",
    features: [
      { title: "Student Conduct Tracking", description: "Maintains a comprehensive history of disciplinary reports and resolutions for every student." },
      { title: "Real-time Violation Logging", description: "Allows authorized staff to instantly report and document violations as they occur." },
      { title: "Disciplinary Action Workflow", description: "Structured process for managing penalties, resolutions, and student counseling status." },
      { title: "Automated Record Retrieval", description: "Quick access to student conduct history for administrative review and parental meetings." },
      { title: "Role-based Security", description: "Strict access control ensuring that sensitive disciplinary data is only viewable by authorized personnel." }
    ],
    technologies: ["PHP", "Laravel", "Bootstrap", "MySQL"]
  },
  {
    id: 'lumencv',
    image: "",
    title: "LumenCV",
    subtitle: "AI-Powered Career Intelligence",
    industry: "SaaS / AI Platform",
    icon: "https://api.builder.io/api/v1/image/assets/008baf7b47f342c5bf359303f68777c9/ae4ea565ba9ff167b0b6417615849efee1e7c1f2?placeholderIfAbsent=true",
    comingSoon: true,
    url: "https://lumencv.lovable.app/",
    description: "An intelligent resume matching and application tracking system powered by AI.",
    fullDescription: "LumenCV is an all-in-one career intelligence platform that helps job seekers stand out. Using advanced NLP and semantic matching, it analyzes resumes against job descriptions to provide real-time match scores and personalized feedback. Beyond matching, LumenCV acts as a smart career companion, generating tailored cover letters and identifying skill gaps to help users navigate their career roadmap with data-driven insights.",
    features: [
      { title: "Semantic Resume Matching", description: "Moves beyond simple keywords using embeddings and cosine similarity to measure true contextual relevance." },
      { title: "AI Feedback Generator", description: "Provides specific, actionable suggestions to improve resume bullet points and highlight missing skills." },
      { title: "Smart Application Tracker", description: "A Kanban-style dashboard to manage the entire job search lifecycle from application to offer." },
      { title: "ATS Score Dashboard", description: "Visualizes skill coverage, keyword density, and overall compatibility with Applicant Tracking Systems." },
      { title: "Skill Gap Roadmap", description: "Analyzes target roles to suggest the specific tools and technologies needed to achieve a 100% match." }
    ],
    technologies: ["Next.js", "PostgreSQL", "OpenAI API", "Python / FastAPI"]
  }
];
