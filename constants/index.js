import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
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
    title: "Full Stack Developer",
    company_name: "TPC Madhepura",
    icon: "/assets/company/TPC.png",
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Currently serving as the Tech Lead of TPC Madhepura, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
      "Led induction programs, ensured new member alignment with TPC's mission, and provided technical mentorship.",
      "Developed TPC website, enhancing the organization's online visibility.",
      "Spearheaded promotional campaigns, actively engaged with the TPC community, and played a key role in planning and executing events.",
    ],
  },

  {
    title: "Webcasting Technician",
    company_name: "Tech team member at VMukti Solutions Pvt. Ltd. ",
    icon: "/assets/company/VMukti.png",
    iconBg: "#E6DEDD",
    date: "May 2024",
    points: [
      "Played a key role in providing technical support for live webcasting during the Lok Sabha elections. Managed smooth streaming operations and real-time monitoring of voting processes, ensuring transparency and timely reporting during the election period.",
      "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
      "Played a crucial role in promoting VMukti events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
      "Actively engaged with the VMukti community, assisted in workshops, and contributed to planning and managing VMukti events, ensuring their success and growth.",
    ],
  },

  {
    title: "Qulity Engineer",
    company_name: "Apprentice at Tata Motors Passenger Vehicle Pvt. Ltd. ",
    icon: "/assets/company/TATA-Motors.png",
    iconBg: "#E6DEDD",
    date: "September 2022 - September 2023",
    points: [
      "Contributing to various automotive production processes, ensuring high-quality standards,and gaining hands-on experience in vehicle assembly. Collaborated with cross-functional teams to meet quality targets and improve operational efficiency.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
      "Played a crucial role in promoting TATA Motors events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
      "Actively engaged with the TATA Motors community, assisted in workshops, and contributed to planning and managing TATA Motors events, ensuring their success and growth.",
    ],
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
    name: "LISA AI assistant",
    description:
      "LISA: A conversational AI assistant that understands natural language, performs tasks, answers questions, and integrates with devices to simplify daily life.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fabricjs",
        color: "orange-text-gradient",
      },
      {
        name: "liveblocks",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/ChatBot.png",
    source_code_link: "https://github.com/satyamshorrf/Lisa-Chatbot-Virtual-Assistant",
    deployed_link: "https://satyamshorrf.github.io/Lisa-Chatbot-Virtual-Assistant/",
  },
  {
    name: "Amazon Website",
    description:
      "Creating an Amazon Clone using HTML, CSS, and JavaScript involves several steps to replicate the look and functionality of the Amazon website. Here is a brief overview of the process:",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/amazon.jpg",
    source_code_link: "https://github.com/satyamshorrf/Amazon",
    deployed_link: "https://satyamshorrf.github.io/Amazon/",
  },
  {
    name: "AI Virtual Girlfriend",
    description:
      "In this project we will create a virtual girlfriend chatbot, but feel free to use what you'll learn to build your own support assistant, language teacher, or any ideas you have in mind!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/AI-Girlfriend.jpeg",
    source_code_link:
      "https://github.com/wass08/r3f-virtual-girlfriend-frontend",
    deployed_link:
      "#",
  },
  {
    name: "lazarev ",
    description:
      "The Lazarev website clone is a recreated version of the Lazarev digital product design agency's website, often developed for practice or showcasing frontend development skills. It features elegant design, intricate animations, and interactivity, built using technologies like HTML, CSS, and JavaScript. Some clones highlight specific offerings, such as showcasing unique cinematography equipment or simulating the agency's focus on engaging user experiences and business growth!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/lazarev.png",
    source_code_link:
      "https://github.com/satyamshorrf/lazarev",
    deployed_link:
      "https://satyamshorrf.github.io/lazarev/",
  },
  {
    name: "3D Animated Website",
    description:
      "Creating a 3D animated website using HTML, CSS, and JavaScript involves combining advanced CSS properties like transform and perspective with JavaScript for interactivity. For scrolling animations, libraries like Three.js or Canvas are commonly used to achieve smooth 3D effects. Such projects can include interactive 3D models, immersive environments, or dynamic effects like rotating objects and scrolling scenes. Examples include creating 3D rooms or implementing engaging scrolling animations for websites!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/3D-Animated.png",
    source_code_link:
      "https://github.com/satyamshorrf/3D-Animated-Website",
    deployed_link:
      "https://3-d-animated-website-ochre.vercel.app",
  },
  {
    name: "ThreeJS Landing Page",
    description:
      
"Creating a financial website using Three.js can involve incorporating interactive 3D models to visualize data, like dynamic graphs, pie charts, or financial trends. Three.js is a JavaScript library that simplifies creating WebGL-powered 3D graphics in the browser. For example, you could develop a 3D dashboard with rotating charts or interactive models that represent market behavior, enabling users to interact with financial data in an immersive way. The library's versatility allows for lightweight yet visually stunning implementations suitable for various financial use cases!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/ThreeJS.png",
    source_code_link:
      "https://github.com/satyamshorrf/Landing-Page-ThreeJS",
    deployed_link:
      "https://landing-page-three-js-eight.vercel.app",
  },
  {
    name: "TPC Madhepura",
    description:
      "As a 2nd-year BCA student, you can create a Friend Circle website using HTML, CSS, and JavaScript. This project can allow users to connect with their friends and display their social media profiles. Key features can include: Profile Cards: Use HTML and CSS to design individual profile cards with each friend's name, picture, and social media icons linked to their accounts; Add Friends Feature: Implement a feature to add friends using a form and a Friends Mapping structure in JavaScript or backend logic; Responsive Design: Ensure the website works across devices using media queries and responsive layouts; Theme Customization: Allow users to customize the look of the website with light/dark themes; Interactive Features: Use JavaScript for animations, interactive menus, or showing/hiding details dynamically. This project can serve as a practical introduction to web development concepts and enhance your skills!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/TPC-Madhepura.png",
    source_code_link:
      "https://github.com/satyamshorrf/TPC-Madhepura",
    deployed_link:
      "https://tpc-madhepura.vercel.app",
  },
  {
    name: "Responsive Construction Website",
    description:
  "Responsive Construction Website Design Using HTML CSS And JavaScript - Contains animations when scrolling. - Smooth scrolling in each section. - Developed first with the Mobile First methodology, then for desktop. - Compatible with all mobile devices and with a beautiful and pleasant user interface.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/construction.png",
    source_code_link:
      "https://github.com/satyamshorrf/Responsive-Construction-Website",
    deployed_link:
      "https://satyamshorrf.github.io/Responsive-Construction-Website/",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/satyamshorrf",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/satyamshorrf/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/satyamshorrf",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://instagram.com/satyamshorrf",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Mechanical Engineer",
  500,
  "Automobile Engineer",
  500,
  "Quality Engineer",
  500,
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
};
