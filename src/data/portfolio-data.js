export const portfolioData = {
  owner: {
    fullName: "Zameer Abbas",
    shortName: "Zameer",
    role: "Full Stack Web Developer",
  },

  navItems: [
    { name: "About", href: "#about", icon: "UserRound" },
    { name: "Education", href: "#education", icon: "GraduationCap" },
    { name: "Skills", href: "#skills", icon: "Code2" },
    { name: "Experience", href: "#experience", icon: "ChartNoAxesCombined" },
    { name: "Projects", href: "#projects", icon: "FileCode2" },
    { name: "Contact", href: "#contact", icon: "ContactRound" },
  ],

  hero: {
    greeting: "Hi, I am",
    description:
      "Full Stack Web Developer building scalable, secure, and modern web applications.",
    cv: {
      label: "Download CV",
      filePath: "/cv/cv.pdf",
      fileName: "Zameer_Abbas_CV.pdf",
    },
  },

  about: {
    section: {
      title: "Overview",
      subtitle: "Introduction",
    },
    summary:
      "Full Stack Web Developer and Computer Systems Engineering student with hands-on experience in building scalable and responsive web applications. Skilled in frontend and backend technologies, REST APIs, and authentication systems.",

    services: [
      { title: "Frontend Developer", icon: "web" },
      { title: "Backend Developer", icon: "backend" },
      { title: "Full Stack Developer", icon: "creator" },
      { title: "React Developer", icon: "mobile" },
    ],
  },

  sectionHeadings: {
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
    },
    skills: {
      title: "Skills",
      subtitle: "My technical stack",
    },
    education: {
      title: "Education",
      subtitle: "Academic background",
    },
    projects: {
      title: "Projects",
      subtitle: "My real-world work",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect",
    },
  },

  movingStrip: {
    items: [
      "Scalable",
      "Secure",
      "Responsive",
      "Modern",
      "Clean Code",
      "REST APIs",
      "Authentication",
    ],
  },

  skills: [
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "JWT", icon: "jwt" },
    { name: "OAuth", icon: "oauth" },
    { name: "Passport.js", icon: "passport" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Vercel", icon: "vercel" },
  ],

  experience: [
    {
      title: "Frontend Developer Intern",
      company: "Spark Code Pvt Ltd",
      date: "2 Months",
      employmentType: "Internship",
      locationType: "On-site",
      location: "Gilgit, Danyore",
      description:
        "Developed responsive web interfaces and built frontend applications using Next.js and Tailwind CSS.",
      skills: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Front End Developer Intern",
      company: "DevelopersHub Corporation",
      date: "June 2025 - July 2025",
      employmentType: "Internship",
      locationType: "Virtual",
      description:
        "Worked on responsive web design based on Figma and developed a project from scratch using given requirements.",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering – Computer Systems Engineering",
      institution: "Mehran University of Engineering and Technology, Jamshoro",
      year: "2022 - 2026",
      description: "Currently in 7th Semester.",
      duration: "4 years",
      courses: [
        "Database Management System",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
      gpa: "",
    },
    {
      degree: "Master of Science – Computer Science",
      institution: "Planned (Future Study)",
      year: "Future",
      description:
        "Planning to pursue a Master's degree to specialize in advanced computing and scalable systems.",
      duration: "2 years",
      courses: [],
      gpa: "",
    },
  ],

  projects: [
    {
      title: "MyLocalDrive",
      type: "Full Stack",
      demo: true,
      description:
        "Secure cloud storage platform with authentication and file management.",
      image: "/images/projects/mylocaldrive.png",
      tags: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://mylocaldrive.vercel.app",
      githubUrl: "https://github.com/imeerai/mylocaldrive",
    },
    {
      title: "Wanderlust",
      type: "Full Stack",
      demo: true,
      description:
        "Listing and review platform with authentication and CRUD features.",
      image: "/images/projects/wanderlust.png",
      tags: ["Node.js", "Express.js", "MongoDB", "EJS"],
      demoUrl: "https://wanderlust-imeer.vercel.app",
      githubUrl: "https://github.com/imeerai/wanderlust",
    },
    {
      title: "Business Nexus",
      type: "Frontend",
      demo: true,
      description: "Investor platform frontend with clean UI.",
      image: "/images/projects/business.jpeg",
      tags: ["React.js", "Tailwind CSS"],
      demoUrl: "https://bntask2.vercel.app",
      githubUrl: "https://github.com/imeerai/bntask2",
    },
    {
      title: "eCommerce Website",
      type: "Frontend",
      demo: true,
      description: "Responsive eCommerce UI built from Figma.",
      image: "/images/projects/ecommerce.jpeg",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "http://ecome-dev.netlify.app",
      githubUrl: "#",
    },
  ],

  contact: {
    infoTitle: "Get in Touch",
    infoText:
      "Open to freelance work, internships, and full stack opportunities.",
    copyEmail: {
      title: "Email",
      subtitle: "Click to copy email",
      actionIdle: "Copy email",
      actionDone: "Copied",
    },
    socialLinks: [
      {
        icon: "Github",
        href: "https://github.com/imeerai",
        label: "GitHub",
      },
      {
        icon: "Mail",
        href: "mailto:abbzameer234@gmail.com",
        label: "Email",
      },
    ],
  },

  contactForm: {
    fields: {
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Write your message...",
    },
    validation: {
      nameMin: "Name must be at least 2 characters",
      emailInvalid: "Invalid email",
      messageMin: "Message must be at least 5 characters",
    },
    buttonLabels: {
      sending: "Sending...",
      success: "Message Ready",
      error: "Try Again",
      idle: "Send Message",
    },
  },
};
