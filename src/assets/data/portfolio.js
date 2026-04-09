// ============================================================
// Portfolio Data — Mohamed Aadil
// ============================================================

export const personal = {
  name: "Mohamed Aadil",
  alias: "Aadii",
  tagline: "Software Engineer",
  subtitle: "BSc – Software Engineering",
  // GEMINI API KEY for ChatBot (Temporary frontend exposure for local development)
  geminiKey: "AIzaSyBVD0rh48b_kjO_W2056AevfbECena8qso",
  bio: "I am Mohamed Aadil, a Software Engineer dedicated to architecting high-performance web solutions and premium digital experiences. I specialize in bridging complex technical requirements with elite UI/UX design, offering scalable full-stack development that exceeds expectations and delivers high-impact results.",
  bio2: "As the sole developer and architect behind this platform, I have meticulously engineered every interaction—from the fluid animations and high-end UI design to the underlying software architecture. This project represents the intersection of my technical expertise and my deep-rooted passion for showcasing Aklan's unmatched beauty to the world through a premium, immersive digital experience.",
  email: "Aadilmax2023@gmail.com",
  website: "aadi4u.dev",
  location: "Sri Lanka",
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    telegram: "https://t.me/",
  },
  cvUrl: "/Mohamed_Aadil_CV.pdf",
};

export const stats = [
  { label: "Total Projects", value: "2+", icon: "code", description: "Innovative web solutions crafted" },
  { label: "Certificates", value: "5", icon: "award", description: "Professional skills validated" },
  { label: "Years of Experience", value: "1", icon: "globe", description: "Continuous learning journey" },
];

export const skills = ["React", "JavaScript", "Framer", "Node.js", "MongoDB", "and many more"];

export const techStack = [
  {
    category: "Front-End (Client-Side)",
    techs: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
    ]
  },
  {
    category: "Back-End (Server-Side)",
    techs: [
      { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ]
  },
  {
    category: "Database Layer",
    techs: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ]
  },
  {
    category: "Creative & Prototyping Tools",
    techs: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Antigravity", icon: "/Images/Antigravity.jpg" },
      { name: "Claude", icon: "/Images/Claude.svg" },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "DZD-SMM Panel",
    description: "A premium Social Media Marketing platform meticulously designed to streamline digital growth and enhance online presence through a fast, automated, and user-centric experience.",
    extendedDescription: "This project serves as a powerful gateway for managing social media engagement across platforms. It features a clean and modern dashboard, real-time order processing, and seamless API integration, all wrapped in a smooth, high-performance UI built for efficiency and scalability.",
    tags: ["React", "UI/UX", "SMM"],
    image: "/Images/image.png",
    liveUrl: "https://dzd-marketing.site/",
    detailUrl: "#",
    status: "Deployed",
    color: "#0066FF",
  },


  {
    id: 2,
    title: "Portfolio Version 1",
    description: "The initial foundation of my web presence, showcasing early explorations in structural web engineering and minimalist design principles.",
    extendedDescription: "My first foray into professional web development. This project focused on mastering the fundamentals of semantic HTML, responsive CSS architecture, and the beginning of my obsession with smooth, meaningful animations.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/Images/image copy.png",
    liveUrl: "#",
    detailUrl: "#",
    status: "Deployed",
    color: "#6366F1",
  },
];

export const certificates = [
  { title: "Web Development & Mobile App Design", issuer: "ActiveLearning, Inc. (sri lanaka)", year: "2026" },
  { title: "Google UX Design Professional Certificate", issuer: "Google", year: "2026" },
  { title: "Android Development", issuer: "Coursera", year: "2026" },
  { title: "Front-End Developer Professional Certificate", issuer: "Coursera", year: "2026" },
  { title: "Back-End Developer Professional Certificate", issuer: "Coursera", year: "2026" },
];

export const academic = {
  degree: "Bachelor of Science in Software Engineering",
  major: "Major in Software Engineering",
  institution: "Birmingham City University – College of Computer Studies",
  period: "2025 — Present",
  timeline: [
    {
      id: "01",
      year: "First Year",
      title: "The Foundations",
      focus: "Logic & Structural Web",
      concepts: ["OOP", "Data Structures", "Algorithms"],
      stack: ["Java", "HTML5", "CSS3"],
      project: "Personal Portfolio v1 — A minimalist introduction to web presence.",
      icon: "code"
    },

    {
      id: "02",
      year: "Current Focus",
      title: "Current Focus",
      status: "Building & Researching",
      deepDives: ["Advanced React Patterns", "Backend Scalability", "UI/UX Minimalism"],
      goal: "Bridging academic theory with industry-grade software deployment.",
      icon: "activity"
    }
  ]
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academic", href: "#academic" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
