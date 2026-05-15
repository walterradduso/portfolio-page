import type { ReactNode } from 'react';

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'github' | 'twitter';
}

export interface Company {
  name: string;
  href: string;
  logo: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyHref: string;
  companyLogo: string;
  period: string;
  startMonth: string;
  startYear: number;
  endMonth: string | 'present';
  endYear: number | 'present';
  bullets: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  role: string;
  description: string;
  outcome: string;
  stack: string[];
  thumbnail: string;
  liveUrl?: string;
  codeUrl?: string;
  status?: string;
}

export interface StackGroup {
  id: string;
  label: string;
  items: string[];
}

export interface NavSection {
  id: string;
  label: string;
}

export const profile = {
  name: 'Walter Radduso',
  role: 'Senior Frontend Engineer · Tech Lead',
  location: 'Santa Fe, Argentina',
  timezone: 'GMT-3 (Argentina)',
  email: 'w.radduso@gmail.com',
  resumeUrl: '/resume-walter-radduso.pdf',
  siteUrl: 'https://walterradduso.dev',
  availability: 'Open to senior, staff & lead frontend roles',
  languages: ['Spanish (Native)', 'English (Upper Intermediate)'],
  hero: {
    eyebrow: 'Senior Frontend Engineer · Tech Lead',
    headline: 'I build production-grade React apps for teams that ship fast.',
    subheadline:
      'Nine plus years turning complex product requirements into scalable web platforms. Now contributing to a micro-frontend platform and AI tooling at Nullplatform.',
  },
  about: {
    summary: [
      'I help engineering teams ship reliable, accessible React applications without slowing down. My focus sits at the intersection of architecture, performance, and developer experience — the boring parts that determine whether a frontend stays maintainable past month six.',
      'I have spent the last decade going from PHP and WordPress to leading frontend initiatives at MercadoLibre, building marketplace and fintech products at Mundi and Deel, and currently working on a micro-frontend platform and AI-powered developer tools at Nullplatform. I care about clean abstractions, honest code reviews, and shipping things that move metrics.',
    ],
    highlights: [
      { label: 'Experience', value: '9+ years' },
      { label: 'Currently', value: 'Nullplatform' },
      { label: 'Based in', value: 'Santa Fe, AR · GMT-3' },
      { label: 'Status', value: 'Senior · Staff · Lead' },
    ],
  },
} as const;

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/walterradduso/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/walterradduso', icon: 'github' },
  { label: 'Twitter', href: 'https://twitter.com/walterradduso', icon: 'twitter' },
];

export const companies: Company[] = [
  { name: 'Nullplatform', href: 'https://www.linkedin.com/company/nullplatform/', logo: '/images/companies/nullplatform.jpeg' },
  { name: 'Deel', href: 'https://www.linkedin.com/company/deel/', logo: '/images/companies/deel.jpeg' },
  { name: 'Mercado Libre', href: 'https://www.linkedin.com/company/mercadolibre/', logo: '/images/companies/mercadolibre.jpeg' },
  { name: 'Mundi', href: 'https://www.linkedin.com/company/munditrade/', logo: '/images/companies/mundi.jpeg' },
  { name: 'Endeev', href: 'https://www.linkedin.com/company/endeev/', logo: '/images/companies/endeev.jpeg' },
];

export const experience: ExperienceEntry[] = [
  {
    id: 'nullplatform-2025',
    role: 'Senior Frontend Engineer',
    company: 'Nullplatform',
    companyHref: 'https://www.linkedin.com/company/nullplatform/',
    companyLogo: '/images/companies/nullplatform.jpeg',
    period: 'Jan 2025 — Present',
    startMonth: 'Jan',
    startYear: 2025,
    endMonth: 'present',
    endYear: 'present',
    bullets: [
      'Lead frontend architecture decisions across the internal developer platform, applying a micro-frontend approach to keep multiple product surfaces consistent and independently deployable.',
      'Own a gateway service that bridges UI modules with backend APIs, reducing integration friction for every new frontend team that ships on the platform.',
      'Integrate AI-powered features into the developer experience, building automation tools that shorten the path from idea to deployed feature.',
    ],
  },
  {
    id: 'deel-2023',
    role: 'Senior Frontend Engineer',
    company: 'Deel',
    companyHref: 'https://www.linkedin.com/company/deel/',
    companyLogo: '/images/companies/deel.jpeg',
    period: 'Oct 2023 — Dec 2024',
    startMonth: 'Oct',
    startYear: 2023,
    endMonth: 'Dec',
    endYear: 2024,
    bullets: [
      'Shipped frontend features for global hiring workflows used by thousands of customers, partnering closely with backend and product to maintain quality under high release velocity.',
      'Drove code reviews and refactors that improved consistency across squads, reducing the cost of onboarding new engineers to the codebase.',
    ],
  },
  {
    id: 'mundi-2022',
    role: 'Senior Frontend Software Engineer',
    company: 'Mundi',
    companyHref: 'https://www.linkedin.com/company/munditrade/',
    companyLogo: '/images/companies/mundi.jpeg',
    period: 'Nov 2022 — Oct 2023',
    startMonth: 'Nov',
    startYear: 2022,
    endMonth: 'Oct',
    endYear: 2023,
    bullets: [
      'Owned and evolved the cross-border financing dashboard used by SMB exporters in LATAM, focused on performance and conversion through reliable forms and async flows.',
      'Established testing baselines and reusable form patterns that the rest of the frontend team adopted, lowering the bug surface in the most user-facing flows.',
    ],
  },
  {
    id: 'mercadolibre-techlead-2022',
    role: 'Tech Lead Frontend',
    company: 'Mercado Libre',
    companyHref: 'https://www.linkedin.com/company/mercadolibre/',
    companyLogo: '/images/companies/mercadolibre.jpeg',
    period: 'Jan 2022 — Nov 2022',
    startMonth: 'Jan',
    startYear: 2022,
    endMonth: 'Nov',
    endYear: 2022,
    bullets: [
      'Led frontend initiatives across multiple squads, defining technical direction in React and Node.js for high-traffic internal tools that supported marketplace operations.',
      'Mentored mid-level engineers, ran technical interviews, and introduced lightweight RFCs to surface architecture decisions before they hit production.',
    ],
  },
  {
    id: 'mercadolibre-sr-2021',
    role: 'Senior Frontend Software Engineer',
    company: 'Mercado Libre',
    companyHref: 'https://www.linkedin.com/company/mercadolibre/',
    companyLogo: '/images/companies/mercadolibre.jpeg',
    period: 'Jan 2021 — Dec 2021',
    startMonth: 'Jan',
    startYear: 2021,
    endMonth: 'Dec',
    endYear: 2021,
    bullets: [
      'Delivered frontend features across cross-functional squads, owning the React stack from component design to deployment and observability.',
      'Drove code quality initiatives: introduced stricter review guidelines and refactored legacy modules into typed, tested components.',
    ],
  },
  {
    id: 'mercadolibre-ssr-2019',
    role: 'Semi-Senior Frontend Software Engineer',
    company: 'Mercado Libre',
    companyHref: 'https://www.linkedin.com/company/mercadolibre/',
    companyLogo: '/images/companies/mercadolibre.jpeg',
    period: 'Oct 2019 — Dec 2020',
    startMonth: 'Oct',
    startYear: 2019,
    endMonth: 'Dec',
    endYear: 2020,
    bullets: [
      'Built and maintained React and Node.js features across internal tools, adapting quickly to multiple product domains and stacks.',
      'Contributed to migrations from legacy stacks to modern React, prioritizing incremental delivery and parity with existing flows.',
    ],
  },
  {
    id: 'endeev-2016',
    role: 'Frontend Developer',
    company: 'Endeev',
    companyHref: 'https://www.linkedin.com/company/endeev/',
    companyLogo: '/images/companies/endeev.jpeg',
    period: 'Jun 2016 — Oct 2019',
    startMonth: 'Jun',
    startYear: 2016,
    endMonth: 'Oct',
    endYear: 2019,
    bullets: [
      'Built React and React Native applications across multiple client projects, collaborating directly with product managers to shape requirements.',
      'Contributed to RESTful APIs in Node.js to support the same products, gaining full-stack context and improving API/UI handoffs.',
    ],
  },
  {
    id: 'freelancer-2011',
    role: 'Web Developer',
    company: 'Freelancer · Tecnosan · 1st Outsourcing Choice',
    companyHref: '#',
    companyLogo: '/images/companies/webdev.jpeg',
    period: 'May 2011 — Jun 2016',
    startMonth: 'May',
    startYear: 2011,
    endMonth: 'Jun',
    endYear: 2016,
    bullets: [
      'Built and maintained custom WordPress sites, RESTful APIs, and PHP-based user interfaces for local businesses and freelance clients.',
      'Designed and shipped a regional e-commerce platform for Santa Fe, Argentina, enabling local merchants to publish and sell products online.',
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'adopsys',
    title: 'Adopsys',
    role: 'Side project · Built end-to-end (frontend + backend)',
    description:
      'Full-stack adoption platform that lets animal shelters move off spreadsheets — custom adoption forms, real-time chat between adopters and shelters, foster placements, post-adoption check-ins with scheduled crons, digital contracts, and verified shelter profiles.',
    outcome:
      'Owned every layer in my own time: Next.js 16 frontend, Convex backend with real-time queries and cron-based follow-ups, OAuth + email auth, transactional emails via Resend, full ES/EN i18n, and a Playwright e2e suite. Live at adopsys.pet.',
    stack: ['Next.js 16', 'React 19', 'Convex', 'TypeScript', 'shadcn/ui', 'next-intl', 'Resend', 'Playwright'],
    thumbnail: '/images/work/adopsys.png',
    liveUrl: 'https://adopsys.pet',
  },
  {
    id: 'new-saas-wip',
    title: 'A new SaaS · In development',
    role: 'Side project · Building end-to-end (frontend + backend)',
    description: "A new SaaS I'm building from scratch in my own time — designed, coded and shipped solo across the full stack.",
    outcome:
      'Working on it with a modern stack: React frontend, serverless real-time backend, paid subscriptions, on-the-fly PDF generation, third-party data ingestion, multi-method auth, and PWA support.',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Serverless backend',
      'Real-time queries',
      'Subscriptions',
      'PDF generation',
      'shadcn/ui',
    ],
    thumbnail: '/images/work/new-saas-wip.svg',
    status: 'Work in progress · MVP under construction',
  },
];

export const stackGroups: StackGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'GraphQL', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'React Native', 'Redux', 'Tailwind CSS', 'Sass'],
  },
  {
    id: 'tooling',
    label: 'Tooling & DX',
    items: ['Git', 'GitHub', 'Vite', 'Webpack', 'Jest', 'Cypress', 'ESLint', 'Prettier', 'Storybook'],
  },
  {
    id: 'patterns',
    label: 'Patterns & Practices',
    items: [
      'Micro-frontends',
      'Design systems',
      'Clean Architecture',
      'Component-driven UI',
      'REST APIs',
      'GraphQL APIs',
      'Performance optimization',
      'Web accessibility (a11y)',
    ],
  },
  {
    id: 'ai-workflow',
    label: 'AI & Workflow',
    items: [
      'Claude Code',
      'Cursor',
      'Windsurf',
      'GitHub Copilot',
      'Codex CLI',
      'Antigravity',
      'v0',
      'n8n',
      'Prompt engineering',
      'Agentic workflows',
    ],
  },
];

export const navigationSections: NavSection[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export const contact = {
  headline: 'Looking for a frontend engineer who can lead?',
  body: "I'm open to senior, staff and lead frontend roles, contract work, and consulting on React and Next.js architecture. Drop me a line and let's talk.",
  primaryAction: { label: 'Email me', href: `mailto:${profile.email}` },
  secondaryAction: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/walterradduso/' },
  resumeLabel: 'Or download my resume (PDF)',
} as const;

// Re-export ReactNode to keep imports clean in consumers that augment data
export type { ReactNode };
