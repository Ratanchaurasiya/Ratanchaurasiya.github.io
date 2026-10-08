import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import DigitalMarketingIcon from "./../public/assets/icons/leadership.svg";
import DataAnalysisIcon from "./../public/assets/icons/data-analysis.svg";
import DatabaseIcon from "./../public/assets/icons/database.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "roadmap",
    title: "Journey",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Building responsive web applications with modern frontend and backend technologies.",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Development",
    description:
      "HTML, CSS, JavaScript, Bootstrap, Tailwind CSS and responsive UI development.",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Development",
    description:
      "Server-side development, APIs, database integration and application logic.",
    icon: <BackendIcon />,
  },
  {
    title: "Data Analysis",
    description:
      "Data analysis using Python, SQL, MySQL and data visualization techniques.",
    icon: <DataAnalysisIcon />,
  },
  {
    title: "Database Management",
    description:
      "Working with SQL, MySQL, database design, queries and data management.",
    icon: <DatabaseIcon />,
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing fundamentals, content strategy, keyword research, campaigns and lead generation.",
    icon: <DigitalMarketingIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.png",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Yarn",
      icon: "/assets/tech/yarn.svg",
      link: "https://yarnpkg.com/",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Foundation — IT & Programming",
    company_name: "Silver Oak University, Ahmedabad",
    icon: "/assets/icons/problem-solving.svg",
    iconBg: "#1e1e38",
    accentColor: "#38bdf8",
    date: "Phase 1 • Academic Foundations",
    points: [
      "Built rigorous Computer Science & IT fundamentals during B.Tech at Silver Oak University with strong computational theory.",
      "Mastered programming essentials: C/C++, Python, JavaScript, HTML5/CSS3, and Object-Oriented Programming (OOP) paradigms.",
      "Learned Relational Database Management Systems (DBMS), SQL/MySQL queries, and foundational Data Structures & Algorithms.",
      "Mastered developer tooling: VS Code, Jupyter Notebooks, Git version control, and GitHub collaboration workflows.",
    ],
    tags: ["C/C++", "Python", "JavaScript", "OOP", "DBMS", "MySQL", "Git & GitHub"],
  },
  {
    title: "Web & Full-Stack Application Development",
    company_name: "Practical Software Construction",
    icon: "/assets/icons/frontend.svg",
    iconBg: "#1e1e38",
    accentColor: "#818cf8",
    date: "Phase 2 • Building Real Applications",
    points: [
      "Transitioned from isolated coding tutorials to architecting end-to-end interactive web applications.",
      "Engineered modern responsive frontends with React, Next.js, Bootstrap, and Tailwind CSS.",
      "Built backend service architectures, RESTful APIs, and server-side logic with Node.js and Express.js.",
      "Shipped real-world applications including CarHubs automotive platform and CampusConnect smart navigation systems.",
    ],
    tags: ["React", "Next.js", "Node.js", "Express", "REST APIs", "TailwindCSS", "FullStack"],
  },
  {
    title: "Data Analytics & Business Intelligence",
    company_name: "Data Pipelines & Reporting",
    icon: "/assets/icons/backend.svg",
    iconBg: "#1e1e38",
    accentColor: "#34d399",
    date: "Phase 3 • Analytics & Insights",
    points: [
      "Explored data science and analytics with Python, NumPy, Pandas, Matplotlib, and SQL queries.",
      "Engineered automated data cleansing, validation utilities, and spreadsheet automation (RC Excel Column Selector & Formatter).",
      "Constructed visual dashboards including Student Performance Analytics and e-commerce analytics reports.",
      "Transformed raw, unstructured datasets into intuitive dashboards and visual reports supporting data-driven decisions.",
    ],
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "SQL", "Power BI", "DataCleaning"],
  },
  {
    title: "AI & Generative AI Assisted Engineering",
    company_name: "AI Workflows & Modern Engineering",
    icon: "/assets/icons/rocket.svg",
    iconBg: "#1e1e38",
    accentColor: "#c084fc",
    date: "Phase 4 • AI-Powered Development",
    points: [
      "Integrated Generative AI, LLM APIs, and AI-assisted workflows directly into production software applications.",
      "Leveraged AI-assisted workflows to rapidly prototype, debug, accelerate development, and polish user experience.",
      "Built conversational AI chatbots and intelligent automated assistants with natural language understanding.",
      "Earned elite industry artificial intelligence certifications from Oracle & IBM.",
    ],
    tags: ["Generative AI", "AI APIs", "Rapid Prototyping", "Chatbots", "Oracle AI", "IBM AI"],
  },
  {
    title: "Real Project Engineering & Production Debugging",
    company_name: "Desktop Locker System & EASH",
    icon: "/assets/icons/leadership.svg",
    iconBg: "#1e1e38",
    accentColor: "#fb923c",
    date: "Phase 5 • Engineering Mindset Shift",
    points: [
      "Shifted to an engineering-oriented mindset: investigating data persistence, root cause analysis, and production bugs.",
      "Served as Administrator for the Desktop Locker System, managing system functionality, user access, security data, and operations.",
      "Mastered MySQL Workbench, environment variables, multi-tier API routing, and cloud deployment pipelines (Vercel & Render).",
      "Verified local vs cloud database persistence, ensuring zero data loss and bulletproof state management across redeployments.",
    ],
    tags: ["MySQL Workbench", "Database Persistence", "Desktop Locker", "Root Cause Analysis", "Production Debugging"],
  },
  {
    title: "Enterprise Systems & HRM Architecture",
    company_name: "EASH & Advaitya Projects",
    icon: "/assets/icons/full-stack.svg",
    iconBg: "#1e1e38",
    accentColor: "#f472b6",
    date: "Phase 6 • Enterprise-Scale Thinking",
    points: [
      "Engineered complete enterprise operations: employee management, asset allocation, laptop/PC fleet, SIM records, and admin dashboards.",
      "Architected end-to-end HRM business workflow: Recruitment → Onboarding → Asset Assignment → Attendance → Leave → Payroll → Exit → Historical Record.",
      "Currently serving as SEO Intern at ADVAITYA PROJECTS, driving organic visibility, keyword strategy, and technical search performance.",
      "Operating at the intersection of full-stack development, data/AI, and enterprise business systems.",
    ],
    tags: ["Enterprise HRM", "System Design", "Asset Management", "SEO Intern", "Data Consistency", "Architecture"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Employee Asset Management System",
    category: "Management Systems",
    description:
      "A full-stack employee and company asset management system for managing employees, desktop assets, allocations, returns, maintenance, SIM cards, requests, and notifications.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "text-cyan-400" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/employee-asset-management.png",
    source_code_link: "https://github.com/Ratanchaurasiya/EMP-Daishboard-",
    deployed_link: "",
    architecture: {
      tagline: "Full-Stack Enterprise Employee & IT Hardware Lifecycle Hub",
      overview:
        "Comprehensive asset management solution developed for organizing internal hardware allocations, SIM card inventory, service requests, and employee equipment records.",
      diagram: [
        {
          tier: "Client Interface",
          tech: "React / TypeScript / Responsive UI",
          role: "Role-based dashboards, hardware allocation tracking, SIM card directory, and maintenance request interfaces.",
        },
        {
          tier: "Server & API Layer",
          tech: "Node.js / Express.js / RESTful Endpoints",
          role: "Request validation, asset assignment state management, notification triggers, and relational data operations.",
        },
        {
          tier: "Database Tier",
          tech: "MySQL Relational Schemas",
          role: "Normalized database storing employee profiles, hardware assets, SIM inventory, and repair history.",
        },
      ],
      metrics: [
        { label: "Architecture", value: "Full-Stack Client-Server" },
        { label: "Persistence", value: "MySQL Relational" },
        { label: "Core Scope", value: "Asset & SIM Management" },
      ],
      challenges: [
        "Structured normalized database relations linking employees to multiple hardware assets, SIM cards, and return statuses.",
        "Implemented clean state handling across allocation and maintenance request workflows.",
      ],
    },
  },
  {
    name: "CampusConnect — Smart Campus & Digital Library",
    category: "Web Development",
    description:
      "A smart campus platform that helps students discover campus resources, search library materials, navigate locations, and interact with a digital campus assistant.",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "Maps", color: "green-text-gradient" },
    ],
    image: "/assets/projects/TPC.png",
    source_code_link:
      "https://github.com/Ratanchaurasiya/CampusConnect-Smart-Navigation-Digital-Library-System",
    deployed_link: "",
    architecture: {
      tagline: "Smart Campus Wayfinding & Digital Library Catalog",
      overview:
        "Interactive campus utility designed to simplify campus resource discovery, library search, and location guidance for students.",
      diagram: [
        {
          tier: "Interactive Interface",
          tech: "HTML5 / CSS3 / JavaScript",
          role: "Digital library search catalog, interactive campus maps, and digital assistant interface.",
        },
        {
          tier: "Navigation & Assistant",
          tech: "Maps API / Interactive AI Assistant",
          role: "Location wayfinding across campus buildings and conversational query assistance for academic resources.",
        },
        {
          tier: "Resource Catalog",
          tech: "Structured Catalog Models",
          role: "Organized library catalog records, book locations, and department navigation points.",
        },
      ],
      metrics: [
        { label: "Domain", value: "Campus Navigation & Library" },
        { label: "Features", value: "AI + Maps Integration" },
        { label: "Interface", value: "Responsive Web" },
      ],
      challenges: [
        "Designed user-friendly wayfinding flows to help students locate physical campus facilities and library materials.",
        "Integrated responsive design to ensure ease of navigation on mobile devices across campus.",
      ],
    },
  },
  {
    name: "Harmony Harikesh — Real Estate Website",
    category: "Web Development",
    description:
      "A modern real-estate website designed to showcase a premium residential project with interactive visuals, project information, enquiry options, and an engaging user experience.",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "GSAP", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/harmony-harikesh.png",
    source_code_link: "https://github.com/Ratanchaurasiya/Harmony_Harikesh",
    deployed_link: "https://harmony-harikesh.onrender.com",
    architecture: {
      tagline: "Immersive Real-Estate Web Presentation",
      overview:
        "High-impact architectural showcase featuring 3D visuals and smooth scroll animations for real-estate project exploration.",
      diagram: [
        {
          tier: "3D & Motion Layer",
          tech: "Three.js / GSAP Animations",
          role: "Smooth visual transitions, dynamic 3D elements, and engaging interactive property presentations.",
        },
        {
          tier: "Presentation Layer",
          tech: "HTML5 / Responsive CSS3 / JavaScript",
          role: "Project floor plans, architectural highlights, neighborhood amenities, and enquiry contact forms.",
        },
      ],
      metrics: [
        { label: "Type", value: "Real Estate Showcase" },
        { label: "Visuals", value: "Three.js & GSAP" },
        { label: "Design", value: "Premium Modern UI" },
      ],
      challenges: [
        "Balanced 3D graphics rendering with fast page loads and smooth scrolling across desktop and mobile screens.",
        "Created an intuitive visual journey guiding prospective buyers from project highlights to lead enquiry.",
      ],
    },
  },
  {
    name: "Vehicle Breakdown Assistance & Live Tracking",
    category: "Management Systems",
    description:
      "A vehicle assistance platform designed to connect users with roadside support through SOS requests, live location tracking, service assistance, and communication features.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Leaflet", color: "green-text-gradient" },
      { name: "Socket.IO", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/construction.png",
    source_code_link:
      "https://github.com/Ratanchaurasiya/Vehicle-Breakdown-Assistance-Live-Tracking-System",
    deployed_link: "",
    architecture: {
      tagline: "Roadside Assistance & Real-Time Incident Tracking",
      overview:
        "Geospatial assistance system enabling drivers to signal emergency breakdowns, receive live assistance updates, and track support services.",
      diagram: [
        {
          tier: "Driver & Support UI",
          tech: "React / Leaflet GIS / Tailwind",
          role: "SOS emergency button, interactive live map tracking, and status communication.",
        },
        {
          tier: "Live Event Layer",
          tech: "Socket.IO / Real-Time Messaging",
          role: "Live location exchange and instant notification dispatch between stranded motorists and assistance units.",
        },
      ],
      metrics: [
        { label: "Mapping", value: "Leaflet Interactive GIS" },
        { label: "Events", value: "Socket.IO Real-Time" },
        { label: "Scope", value: "Roadside Assistance" },
      ],
      challenges: [
        "Implemented real-time bidirectional coordinate updates to display provider proximity during emergencies.",
        "Streamlined SOS request flows for rapid submission with minimal user interaction required.",
      ],
    },
  },
  {
    name: "Student Performance Dashboard",
    category: "Data & Dashboards",
    description:
      "An interactive dashboard for analyzing student performance data and presenting academic insights through structured visualizations.",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Data Visualization", color: "green-text-gradient" },
    ],
    image: "/assets/projects/3D-Animated.png",
    source_code_link:
      "https://github.com/Ratanchaurasiya/Student_Performance_Dashboard",
    deployed_link: "",
    architecture: {
      tagline: "Academic Metrics & Performance Analytics Dashboard",
      overview:
        "Educational data analytics tool providing teachers and administrators with structured visual insights into student academic progress.",
      diagram: [
        {
          tier: "Analytics Dashboard UI",
          tech: "HTML5 / CSS3 / JavaScript Charts",
          role: "Subject score distributions, trend graphs, grade breakdown charts, and student performance summaries.",
        },
        {
          tier: "Data Processing",
          tech: "JavaScript Data Processing",
          role: "Calculation of averages, grading thresholds, and metric filtering by class or subject.",
        },
      ],
      metrics: [
        { label: "Domain", value: "Academic Analytics" },
        { label: "Visualization", value: "Interactive Charts" },
        { label: "Stack", value: "Frontend Analytics" },
      ],
      challenges: [
        "Organized multiple academic indicators into a clean, legible dashboard layout without cognitive overload.",
        "Implemented dynamic chart updates based on user-selected criteria and class groups.",
      ],
    },
  },
  {
    name: "Excel Column Selector & Directory Formatter",
    category: "Data & Dashboards",
    description:
      "A productivity tool for selecting required Excel columns, formatting directory data, and preparing structured information for easier management and processing.",
    tags: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
    ],
    image: "/assets/projects/3D-Animated.png",
    source_code_link:
      "https://github.com/Ratanchaurasiya/-RC-Excel-Column-Selector-Directory-Formatter",
    deployed_link: "",
    architecture: {
      tagline: "Spreadsheet Data Formatting & Column Filtering Utility",
      overview:
        "Productivity utility built to automate tedious spreadsheet data preparation, column extraction, and directory organization.",
      diagram: [
        {
          tier: "Tool Interface",
          tech: "HTML / CSS / JavaScript",
          role: "File selection, column preview, custom delimiter selection, and output directory structure options.",
        },
        {
          tier: "Processing Logic",
          tech: "Client-Side File Parsing",
          role: "Column filtering, tabular data extraction, and structured export formatting.",
        },
      ],
      metrics: [
        { label: "Utility", value: "Data Preparation & Excel" },
        { label: "Processing", value: "Client-Side Instant" },
        { label: "Efficiency", value: "Automated Formatting" },
      ],
      challenges: [
        "Handled varying tabular formats and column structures cleanly in client-side JavaScript.",
        "Created an intuitive workflow allowing quick selection and batch formatting of required fields.",
      ],
    },
  },
  {
    name: "CarHubs — Vehicle Platform",
    category: "Web Development",
    description:
      "A responsive web platform for exploring and managing vehicle-related information with a clean interface and user-friendly navigation.",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "text-yellow-400" },
    ],
    image: "/assets/projects/carhubs.png",
    source_code_link: "https://github.com/Ratanchaurasiya/CarHubs",
    deployed_link: "https://car-hubs-beryl.vercel.app",
    architecture: {
      tagline: "Automotive Exploration & Catalog Platform",
      overview:
        "Clean, responsive vehicle exploration interface offering intuitive navigation and organized automotive details.",
      diagram: [
        {
          tier: "Frontend Experience",
          tech: "HTML / CSS / JavaScript",
          role: "Vehicle showcase cards, specification lists, model filtering, and mobile-friendly responsive layout.",
        },
      ],
      metrics: [
        { label: "Deployment", value: "Vercel Live" },
        { label: "Category", value: "Automotive Web UI" },
        { label: "Design", value: "Fully Responsive" },
      ],
      challenges: [
        "Crafted a modern layout with responsive cards adapting smoothly from desktop to mobile screens.",
      ],
    },
  },
  {
    name: "RC Tech Solution",
    category: "Web Development",
    description:
      "A technology-focused website presenting digital solutions and services with a modern responsive interface and integrated AI chatbot experience.",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/ChatBot.png",
    source_code_link: "https://github.com/Ratanchaurasiya/RC-Tech-Solution",
    deployed_link: "",
    architecture: {
      tagline: "IT Solutions Showcase with Integrated Chatbot",
      overview:
        "Modern technology agency website highlighting digital services, solution portfolios, and interactive client communication.",
      diagram: [
        {
          tier: "Client Presentation",
          tech: "HTML5 / CSS3 / JavaScript",
          role: "Services showcase, interactive technology cards, contact inquiry forms, and chatbot widget.",
        },
      ],
      metrics: [
        { label: "Type", value: "Technology Solutions" },
        { label: "Features", value: "AI Chatbot Assistant" },
        { label: "Design", value: "Responsive Web" },
      ],
      challenges: [
        "Engineered an interactive chatbot widget with smooth opening animations and conversational response handling.",
      ],
    },
  },
  {
    name: "Evoniq ERP",
    category: "Management Systems",
    description:
      "A unified enterprise cloud SaaS platform centralizing lead management, sales workflows, project operations, and business analytics for Real Estate, MEP, Construction, and Civil Engineering enterprises.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Cloud SaaS", color: "text-cyan-400" },
      { name: "Analytics", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/evoniq-erp.png",
    source_code_link: "https://github.com/Ratanchaurasiya/Evoniq",
    deployed_link: "",
    architecture: {
      tagline: "Unified Enterprise & Real Estate Operating System",
      overview:
        "Comprehensive enterprise cloud platform delivering centralized lead management, real-time business analytics, and unified project operations for engineering and real estate ventures.",
      diagram: [
        {
          tier: "Enterprise Interface",
          tech: "React / Modern Dashboard UI / Modular Components",
          role: "Real-time analytics dashboards, lead pipelines, sales workflows, and role-based staff operations.",
        },
        {
          tier: "Cloud Platform Tier",
          tech: "Enterprise Cloud SaaS / API Gateways",
          role: "Secure multi-tenant data pipelines, workflow automation, and reporting infrastructure.",
        },
      ],
      metrics: [
        { label: "Platform", value: "Enterprise Cloud SaaS" },
        { label: "Domain", value: "Real Estate & ERP" },
        { label: "Core Feature", value: "Lead & Ops Centralization" },
      ],
      challenges: [
        "Architected an intuitive multi-module workflow connecting CRM leads, project management, and business analytics.",
        "Engineered scalable real-time reporting dashboards for enterprise operational decisions.",
      ],
    },
  },
  {
    name: "Banking System",
    category: "Management Systems",
    description:
      "A banking management application demonstrating core banking operations, account handling, transaction workflows, and basic application logic.",
    tags: [
      { name: "JavaScript", color: "text-yellow-400" },
    ],
    image: "/assets/projects/amazon.jpg",
    source_code_link: "https://github.com/Ratanchaurasiya/Banking-System",
    deployed_link: "",
    architecture: {
      tagline: "Core Banking Operations & Transaction Engine",
      overview:
        "Software project demonstrating fundamental banking logic including account management, deposit/withdrawal validation, and transaction logs.",
      diagram: [
        {
          tier: "Application Logic",
          tech: "JavaScript Core Algorithms",
          role: "Account balances, transaction workflows, fund transfer checks, and ledger history.",
        },
      ],
      metrics: [
        { label: "Domain", value: "Financial Software" },
        { label: "Core Focus", value: "Transaction Logic" },
      ],
      challenges: [
        "Structured strict balance validation to prevent overdrafts and ensure consistent ledger calculation.",
      ],
    },
  },
  {
    name: "Bank Management System",
    category: "Management Systems",
    description:
      "A management system developed to demonstrate basic banking operations, customer account management, and transaction-related functionality.",
    tags: [
      { name: "Programming Fundamentals", color: "blue-text-gradient" },
      { name: "Database Concepts", color: "green-text-gradient" },
    ],
    image: "/assets/projects/TPC-Madhepura.png",
    source_code_link: "https://github.com/Ratanchaurasiya/Bank-Management-System",
    deployed_link: "",
    architecture: {
      tagline: "Customer Account & Record Management System",
      overview:
        "Practical implementation of banking record management covering customer accounts, credentials, and basic transaction records.",
      diagram: [
        {
          tier: "System Logic & Data",
          tech: "Programming Fundamentals / Database Design",
          role: "Account creation, customer profile records, balance inquiry, and transaction logging.",
        },
      ],
      metrics: [
        { label: "Discipline", value: "System Architecture" },
        { label: "Data Structure", value: "Relational Schemas" },
      ],
      challenges: [
        "Designed clean data models to ensure integrity across customer and account records.",
      ],
    },
  },
  {
    name: "Attendance Management System",
    category: "Management Systems",
    description:
      "A web-based attendance management project for recording, organizing, and managing student attendance information.",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "text-yellow-400" },
    ],
    image: "/assets/projects/TPC.png",
    source_code_link:
      "https://github.com/Ratanchaurasiya/attendance-management-system.",
    deployed_link: "",
    architecture: {
      tagline: "Academic Student Attendance Tracking System",
      overview:
        "Web tool allowing educators to record, calculate, and review student attendance history across class sessions.",
      diagram: [
        {
          tier: "User Interface",
          tech: "HTML / CSS / JavaScript",
          role: "Student rosters, date-based attendance marking, and percentage calculation summaries.",
        },
      ],
      metrics: [
        { label: "Target", value: "Education Management" },
        { label: "Operation", value: "Attendance Record Keeping" },
      ],
      challenges: [
        "Created an intuitive interface enabling rapid daily roll-call marking with instant summary stats.",
      ],
    },
  },
  {
    name: "NumPy Data Analysis Practice",
    category: "Data & Dashboards",
    description:
      "A collection of practical exercises focused on numerical computing, array operations, data manipulation, and analysis using NumPy.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NumPy", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/3D-Animated.png",
    source_code_link: "https://github.com/Ratanchaurasiya/NumPy",
    deployed_link: "",
    architecture: {
      tagline: "Numerical Computing & Array Manipulation Laboratory",
      overview:
        "Structured repository of mathematical operations, multidimensional array transformations, and statistical analysis exercises in Python.",
      diagram: [
        {
          tier: "Data Computing",
          tech: "Python / NumPy",
          role: "Array indexing, slicing, broadcasting, linear algebra operations, and statistical calculations.",
        },
      ],
      metrics: [
        { label: "Technology", value: "Python 3 & NumPy" },
        { label: "Focus", value: "Numerical Analysis" },
      ],
      challenges: [
        "Applied vectorized array computations to optimize performance over traditional iterative loops.",
      ],
    },
  },
  {
    name: "Garage Management",
    category: "Management Systems",
    description:
      "A web-based garage management project designed to organize vehicle-related records and basic service management workflows.",
    tags: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
    ],
    image: "/assets/projects/construction.png",
    source_code_link: "https://github.com/Ratanchaurasiya/Garage",
    deployed_link: "",
    architecture: {
      tagline: "Automotive Service & Repair Workflow System",
      overview:
        "Management tool for auto workshops to track vehicle intake, assigned repair jobs, and customer service statuses.",
      diagram: [
        {
          tier: "Workshop Interface",
          tech: "HTML / CSS / JavaScript",
          role: "Vehicle intake logging, service checklists, customer contact information, and billing estimates.",
        },
      ],
      metrics: [
        { label: "Domain", value: "Auto Repair & Garage" },
        { label: "Workflow", value: "Service Tracking" },
      ],
      challenges: [
        "Organized service job statuses into a clear step-by-step progress tracking view.",
      ],
    },
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Ratanchaurasiya",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/ratan-codespace",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/Ratanchaurasiya",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/ratan.codespace?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  },
];

const heroTexts = [
  "React/Next.js Developer",
  500,
  "Full-Stack Developer",
  500,
  "Frontend Developer",
  500,
  "Backend Developer",
  500,
  "Data Analyst",
  500,
  "SEO Specialist",
  500,
];

const achievements = [
  {
    title: "Power BI — For Business Applications",
    issuer: "Microsoft & FICE (Microsoft Elevate)",
    tag: "Business Intelligence",
    score: "20-Hour Course Completed",
    description:
      "Certificate of Course Completion for 20 hours of intensive training on Power BI for business applications via Microsoft Learn in collaboration with FICE and Silver Oak University.",
    image: "/assets/certificates/microsoft_power_bi.png",
    link: "/assets/certificates/pdf/microsoft_power_bi.pdf",
  },
  {
    title: "Elite: Cloud Computing",
    issuer: "NPTEL, IIT Kharagpur & MoE Govt. of India",
    tag: "Elite Certification",
    score: "Score: 60% (Elite) — 3 or 4 Credits",
    description:
      "12-week comprehensive NPTEL Swayam course funded by Ministry of Education, Govt. of India, administered by IIT Kharagpur. Successfully cleared proctored examination covering Cloud Architecture, Virtualization, Resource Management, and Cloud Security.",
    image: "/assets/certificates/nptel_cloud_computing_elite.png",
    link: "/assets/certificates/pdf/nptel_cloud_computing_elite.pdf",
  },
  {
    title: "Elite: Fundamentals of Object Oriented Programming",
    issuer: "NPTEL, IIT Roorkee & MoE Govt. of India",
    tag: "Elite Certification",
    score: "Score: 61% (Elite) — 4 Credits",
    description:
      "12-week comprehensive NPTEL Swayam course funded by Ministry of Education, Govt. of India. Proctored examination covering Object-Oriented principles, software design, and programming architecture.",
    image: "/assets/certificates/nptel_oop_elite.png",
    link: "/assets/certificates/pdf/nptel_oop_elite.pdf",
  },
  {
    title: "Microsoft Copilot",
    issuer: "Microsoft & FICE (Microsoft Elevate)",
    tag: "AI & Productivity",
    score: "35-Hour Course Completed",
    description:
      "Certificate of Course Completion for 35 hours of specialized training on Microsoft Copilot generative AI workflows via Microsoft Learn in collaboration with FICE and Silver Oak University.",
    image: "/assets/certificates/microsoft_copilot.png",
    link: "/assets/certificates/pdf/microsoft_copilot.pdf",
  },
  {
    title: "Certificate of Appreciation — College Ambassador",
    issuer: "Techfest, IIT Bombay",
    tag: "Leadership & Outreach",
    score: "Rank Under 4000",
    description:
      "Recognized and awarded for active leadership and representation as College Ambassador for Techfest at IIT Bombay — Asia's Largest Science & Technology Festival.",
    image: "/assets/certificates/iit_bombay_techfest.png",
    link: "/assets/certificates/pdf/iit_bombay_techfest.pdf",
  },
  {
    title: "JavaScript Training & Certification",
    issuer: "IIT Bombay (Spoken Tutorial) & EduPyramids",
    tag: "Web Development",
    score: "Score: 77.50% (2 Credits)",
    description:
      "Certified in JavaScript programming following coursework and successfully clearing the remote proctored examination administered by IIT Bombay in association with Silver Oak College of Engineering & Technology.",
    image: "/assets/certificates/iit_bombay_javascript.png",
    link: "/assets/certificates/pdf/iit_bombay_javascript.pdf",
  },
  {
    title: "Data Analyst 101",
    issuer: "Simplilearn & Microsoft",
    tag: "Data Analytics",
    score: "Code: 10204516",
    description:
      "Official declaration of completion for Data Analyst 101 powered by Microsoft on Simplilearn SkillUp, demonstrating core competencies in modern data analytics pipelines and workflows.",
    image: "/assets/certificates/simplilearn_data_analyst.png",
    link: "/assets/certificates/pdf/simplilearn_data_analyst.pdf",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    tag: "Artificial Intelligence",
    score: "Credly Verified Badge",
    description:
      "Comprehensive certification in Artificial Intelligence fundamentals covering machine learning paradigms, deep learning concepts, AI ethics, and practical enterprise AI applications.",
    image: "/assets/certificates/ibm_ai_fundamentals.png",
    link: "https://www.credly.com/badges/d84fd274-2b54-44ad-b2e9-14913b3f1398",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
  achievements,
};
