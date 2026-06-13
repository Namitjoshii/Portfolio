export const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  eyebrow: '// Bennett University · CS \'27',
  name: 'Namit Joshi',
  tagline: ['Full-stack engineer. ', 'I own the product', ' —\nfrom first commit to ', 'production.'],
  links: [
    { label: 'Get in touch', href: 'mailto:namitjoshi11@gmail.com', variant: 'primary' },
    { label: 'GitHub ↗', href: 'https://github.com/Namitjoshii', variant: 'ghost', target: '_blank' },
    { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/namit-joshi-b39487270', variant: 'ghost', target: '_blank' },
  ],
};

export const ABOUT = {
  text: [
    { text: "I'm a CS undergrad who builds things end-to-end — from system architecture to production deployment. Currently shipping a " },
    { text: 'WebRTC video conferencing system', bold: true },
    { text: ' at District Court Nainital. Before that, animated and deployed a full React app at a startup. I don\'t just write code — I ' },
    { text: 'own the product', bold: true },
    { text: '.' },
  ],
  meta: [
    { val: '2', label: 'Internships' },
    { val: 'P2P', label: 'WebRTC from scratch' },
    { val: 'APK', label: 'Shipped to prod' },
    { val: "'27", label: 'Available full-time' },
  ],
};

export const EXPERIENCES = [
  {
    role: 'Software Developer Intern',
    company: 'District Court Nainital · Remote',
    period: 'Jun 2026 – Present',
    bullets: [
      'Building a real-time video conferencing system using WebRTC and WebSockets with efficient signaling architecture',
      'Designing RESTful backend services with Node.js, Express, MongoDB, and JWT auth; integrated AWS S3 for secure media storage',
      'Architecting the full P2P signaling flow — room management, ICE negotiation, and media stream coordination',
    ],
    stack: ['WebRTC', 'WebSockets', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
  },
  {
    role: 'Frontend Intern',
    company: 'ICCRS Startup · Remote',
    period: 'Feb 2026 – Mar 2026',
    bullets: [
      'Built responsive, production-ready UI components in React with performance-optimized CSS and cross-device compatibility',
      'Engineered complex multi-stage animation flows using Framer Motion with precise timing control',
      'Deployed the full application to production, owning the build pipeline and final delivery end-to-end',
    ],
    stack: ['React', 'Framer Motion', 'CSS'],
  },
];

export const PROJECTS = [
  {
    type: 'Full-stack · AI',
    name: 'Interview – AI Analyser',
    link: { label: 'GitHub ↗', href: '#' },
    desc: 'Full-stack AI platform that matches resumes to JDs, identifies skill gaps, and generates structured interview reports using Gemini API with Zod-validated outputs. Puppeteer-powered HTML-to-PDF generation pipeline. End-to-end system design — API, schema modeling, frontend integration, deployment.',
    stack: ['Node.js', 'Express', 'MongoDB', 'React', 'Gemini API', 'Puppeteer', 'Zod'],
  },
  {
    type: 'Mobile · React Native',
    name: 'Recurrly – Subscription Manager',
    link: { label: 'GitHub ↗', href: '#' },
    desc: 'Cross-platform subscription manager built in React Native + TypeScript with file-based navigation, Clerk authentication, and state-driven recurring payment UI. PostHog for real-time analytics. Shipped production APK and AAB via EAS — independent deployment, start to finish.',
    stack: ['React Native', 'TypeScript', 'Expo', 'Clerk', 'PostHog', 'EAS'],
  },
  {
    type: 'Mobile · Production APK',
    name: 'Mume – Music Player App',
    link: { label: 'Download APK ↗', href: 'https://drive.google.com/drive/folders/17PFIoDodL0ztGmM8F6u38I14rtgMKSiO?usp=sharing', target: '_blank' },
    desc: 'Full-featured Android music player streaming via the JioSaavn API — background audio, persistent queue system, artist and album screens, bottom tab navigation. Not a side project, a shipped product. Production APK built and deployed via EAS cloud builds.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'JioSaavn API', 'EAS'],
  },
];

export const SKILLS = [
  { category: 'Languages', chips: ['C++', 'JavaScript', 'TypeScript'] },
  { category: 'Frontend', chips: ['React', 'React Native', 'Framer Motion', 'HTML', 'CSS'] },
  { category: 'Backend', chips: ['Node.js', 'Express.js', 'WebSockets', 'WebRTC', 'JWT'] },
  { category: 'Tools & Infra', chips: ['MongoDB', 'Docker', 'AWS S3', 'Vercel', 'PostHog', 'Expo EAS', 'Git'] },
  { category: 'CS Core', chips: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'] },
];

export const CONTACT = [
  { key: 'Email', val: 'namitjoshi11@gmail.com', href: 'mailto:namitjoshi11@gmail.com' },
  { key: 'GitHub', val: 'github.com/Namitjoshii', href: 'https://github.com/Namitjoshii', target: '_blank' },
  { key: 'LinkedIn', val: 'linkedin.com/in/namit-joshi-b39487270', href: 'https://www.linkedin.com/in/namit-joshi-b39487270', target: '_blank' },
  { key: 'Phone', val: '+91-9911829861' },
];

export const RESUME_CONTEXT = `
You are an AI assistant embedded in Namit Joshi's portfolio website. Answer questions about Namit concisely and confidently, like a well-informed colleague would. Keep answers short (2-4 sentences max). Be direct, not formal.

About Namit:
- B.Tech CS student at Bennett University (Class of 2027)
- Currently interning as Software Developer at District Court Nainital — building a WebRTC + WebSockets real-time video conferencing system from scratch (P2P signaling, ICE negotiation, room management, JWT auth, AWS S3, Node/Express/MongoDB)
- Previously Frontend Intern at ICCRS Startup — built production React UI with Framer Motion animations, deployed end-to-end
- Projects: Interview AI Analyser (Gemini API, full-stack, PDF generation with Puppeteer), Recurrly (React Native subscription manager, shipped APK+AAB via EAS), Mume (React Native music player with JioSaavn API, Zustand, background audio, shipped production APK)
- Stack: TypeScript, JavaScript, C++, React, React Native, Node.js, Express, MongoDB, WebRTC, WebSockets, Framer Motion, Expo EAS, AWS S3, Docker, PostHog, Clerk, Zustand
- VP of Student Cabinet — led 40+ events for 8000+ students
- Open to internships and full-time roles
- Email: namitjoshi11@gmail.com | GitHub: github.com/Namitjoshii | LinkedIn: linkedin.com/in/namit-joshi-b39487270

If asked something you don't know, say you're not sure but suggest they email Namit directly.
`.trim();
