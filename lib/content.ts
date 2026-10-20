// All page copy lives here so components stay markup-only.
export const EMAIL = 'abbaszameer234@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/imeerai/'
export const GITHUB = 'https://github.com/imeerai'
export const CV = '/cv/Zameer-Abbas-CV.pdf'

export const navLinks = [['#about', 'About'], ['#services', 'Services'], ['#work', 'Work'], ['#journey', 'Journey'], ['#faq', 'FAQ']] as const

// Rotates in the hero status line ("AVAILABLE FOR …"). Keep in sync with the 18-step `roles` keyframes in globals.css.
export const roles = ['SQA ENGINEER', 'QA AUTOMATION', 'SECURITY ANALYST', 'PENETRATION TESTER', 'SOC ANALYST', 'FULL STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'DEVSECOPS', 'CLOUD ENGINEER', 'NETWORK ENGINEER', 'PROJECT MANAGEMENT', 'DATA ANALYST', 'IT SUPPORT', 'TECHNICAL TRAINER', 'GRADUATE TRAINEE', 'INTERNSHIPS', 'FREELANCE PROJECTS']

export const tapeA = ['Test cases', 'Web development', 'Secure by design', 'Motion design', 'Vulnerability analysis', 'Bug reports', 'REST APIs', 'Clean code']
export const tapeB = ['Web development', 'Motion design', 'UI engineering', 'React / Next.js', 'API testing', 'Full stack apps', 'Threat modeling', 'Responsive UI']

export const services = [
  { num: '01', title: 'Software QA', text: 'How well does it work, and what could break?', items: ['Functional Testing', 'Test Case Design', 'Defect Reporting', 'API Testing'] },
  { num: '02', title: 'Cybersecurity', text: 'Understanding why vulnerabilities exist and how to fix them.', items: ['Web App Security', 'Vulnerability Analysis', 'Threat Modeling'] },
  { num: '03', title: 'Full Stack Dev', text: 'Complete web apps across frontend and backend.', items: ['React / Next.js', 'Node / Express', 'MongoDB / MySQL', 'Auth'] },
]

export const featured = [
  { reverse: false, label: 'FEATURED', type: 'Cybersecurity', title: 'SecureIX', image: '/images/projects/secureix.webp', w: 960, h: 540, description: 'Web security scanner that audits any URL for SSL/TLS, security headers, DNS anti-spoofing, exposed .env/.git files and phishing signals, then grades it A+ to F with a PDF report. Web dashboard + Chrome extension.', tags: ['react', 'nodejs', 'chrome-mv3', 'security'], demo: 'https://secure-ix.vercel.app', code: 'https://github.com/imeerai/secureIX' },
  { reverse: true, label: 'AI · FULL STACK', type: 'Website builder', title: 'FlowIX', image: '/images/projects/flowix.webp', w: 687, h: 407, description: 'Turns natural-language prompts into complete websites: in-browser file editor, live Sandpack preview, AI chat revisions, autosave with versions, publishing and export — with JWT auth and rate limiting.', tags: ['react', 'express', 'mongodb', 'openrouter'], demo: 'https://flow-ix-paw5.vercel.app/', code: 'https://github.com/imeerai/FlowIX' },
  { reverse: false, label: 'FULL STACK', type: 'Cloud storage', title: 'MyLocalDrive', image: '/images/projects/mylocaldrive.webp', w: 1200, h: 600, description: 'Secure cloud storage platform with authentication and file management.', tags: ['nodejs', 'express', 'mongodb', 'tailwind'], demo: 'https://mylocaldrive.vercel.app', code: 'https://github.com/imeerai/mylocaldrive' },
]

export const more = [
  { title: 'Wanderlust', type: 'Full Stack', image: '/images/projects/wanderlust.webp', demo: 'https://wanderlust-imeer.vercel.app' },
  { title: 'Business Nexus', type: 'Frontend', image: '/images/projects/business.webp', demo: 'https://bntask2.vercel.app' },
  { title: 'eCommerce Website', type: 'Frontend', image: '/images/projects/ecommerce.webp', demo: 'https://ecome-dev.netlify.app' },
]

export const journey = [
  { when: '2022 — 2026', role: 'B.E. Computer Systems Engineering', org: 'MUET, Jamshoro', text: 'Software Engineering, Computer Networks, Operating Systems, Database Systems.' },
  { when: 'JUN — JUL 2025', role: 'Front End Developer Intern', org: 'DevelopersHub Corp.', text: 'Turned Figma designs into responsive pages and built a project from scratch against given requirements.' },
  { when: '2 MONTHS', role: 'Frontend Developer Intern', org: 'Spark Code Pvt Ltd', text: 'Built responsive interfaces and frontend applications with Next.js and Tailwind CSS.' },
]

export const faqs = [
  { q: 'What roles are you looking for?', a: 'Software Quality Assurance roles first, plus internships, freelance work and full stack opportunities.' },
  { q: 'What does your QA work look like?', a: 'Functional testing, writing clear test cases, identifying and reporting defects, and API testing with Postman — asking not just whether something works, but how well and what could break.' },
  { q: 'Which project should I look at first?', a: 'SecureIX: a web security scanner (web dashboard + Chrome extension) with a zero-dependency Node.js backend, SSRF protection and rate limiting.' },
  { q: 'Where can I get your CV?', a: 'Use the Download CV button at the top of the page, or email me and I will send the latest version.' },
]
