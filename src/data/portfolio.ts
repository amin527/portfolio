import studiosWebsiteImage from "../assets/projects/527studios-website.png";
import journalImage from "../assets/projects/journal-app.png";
import pokemonImage from "../assets/projects/pokemon-app.png";
import redesignAfterFullImage from "../assets/projects/redesign-after-full.jpg";
import redesignAfterImage from "../assets/projects/redesign-after.jpg";
import redesignBeforeImage from "../assets/projects/redesign-before.jpg";
import socialQuestImage from "../assets/projects/socialquest.png";
import type { Profile, Project, ProjectGroup, Qualification, Role } from "../types";

export const profile: Profile = {
  name: "Amin Parvareshnia",
  role: "Founder & Full-stack Developer",
  location: "Cardiff, UK · Open to relocation",
  intro:
    "Fullstack developer and founder of an app development business with a live product on the App Store",
  about: [
    "Fullstack developer and founder of an app development business with a live product on the App Store (400 downloads and 10 active subscribers). Strong background in mathematics and data analysis with the ability to break down complex problems and assess the viability of solutions. Experienced in working directly with stakeholders and confident at interpreting business needs and communicating technical information to non-technical audiences effectively.",
  ],
  skills: [
    { label: "Frontend & Mobile", items: ["React", "Vite", "TanStack Query", "Zustand", "Tailwind CSS", "React Router", "Redux"] },
    { label: "Backend & APIs", items: ["Node.js & Express", "Spring Boot", "Flask", "Django", "RESTful API", "JWT Auth"] },
    { label: "Cloud & DevOps", items: ["AWS", "Docker", "Git", "CI/CD (Automated Testing)", "Serverless Functions"] },
    { label: "Data & Storage", items: ["PostgreSQL", "SQLAlchemy", "Supabase"] },
    { label: "Mobile", items: ["React Native", "Expo"] },
    { label: "Testing", items: ["Vitest", "React Testing Library"] },
    { label: "AI", items: ["LLM Integration", "Claude Code", "Claude Skills", "Agentic Workflows"] },
    { label: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS", "Python", "Java", "SQL"] },
  ],
  email: "maparvareshnia@gmail.com",
  githubUrl: "https://github.com/amin527",
  linkedinUrl: "https://www.linkedin.com/in/amin-parvareshnia/",
};


export const projects: Project[] = [
  {
    id: "pokemon-app",
    title: "Pokémon App",
    tagline: "Frontend · React and TypeScript",
    description:
      "A responsive Pokémon browser powered by PokéAPI, built with a professional workflow: feature branches, a CI/CD pipeline running ESLint and automated tests, and a no-regressions merge rule.",
    highlights: [
      "PokéAPI data fetching and caching with TanStack Query",
      "Dynamic routes with React Router and pagination stored in URL search params",
      "Global theme state in a persisted Zustand store",
      "Mobile-responsive layouts styled with Tailwind CSS and custom CSS",
      "Automated tests with Vitest and React Testing Library",
    ],
    stack: ["TypeScript", "React", "TanStack Query", "Zustand", "React Router", "Tailwind CSS", "Vitest"],
    image: pokemonImage,
    imageAlt: "Pokémon App home page showing a searchable grid of Pokémon cards",
    liveUrl: "https://pokemon-app-phi-six.vercel.app",
    repoUrl: "https://github.com/amin527/pokemon-app",
  },
  {
    id: "journal-app",
    title: "Journal App",
    tagline: "Fullstack · React and Spring Boot",
    description:
      "An end-to-end journaling app. A Spring Boot and PostgreSQL REST API handles authentication and persistence, while a React client manages journals and entries.",
    highlights: [
      "Authentication and authorisation with client-side JWT-based sessions",
      "RESTful API endpoints implementing full CRUD for journals and entries",
      "Journal state management with React Context",
      "Custom React hook for dismissing context menus",
    ],
    stack: ["JavaScript", "React", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: journalImage,
    imageAlt: "Journal App home page",
    liveUrl: "https://journal-app-gamma-ten.vercel.app",
    repoUrl: "https://github.com/amin527/journal-app",
  },
];

/** Shown as a chip in the 527Studios section's meta row. */
export const studiosWebsite: Project = {
  id: "527studios-website",
  title: "527Studios Website",
  tagline: "Business website · Next.js",
  description:
    "The company website for 527Studios Limited, a UK-based mobile app studio. It presents the studio's services and shipped apps, and hosts each app's privacy policy and terms.",
  highlights: [
    "Responsive single-page layout with About, Services and Applications sections",
    "Optimised app logos served through Next.js image optimisation",
    "Per-app privacy policy and terms pages required for App Store submission",
  ],
  stack: ["TypeScript", "Next.js", "React", "CSS Modules"],
  image: studiosWebsiteImage,
  imageAlt: "527Studios website hero reading 'Consumer apps built to the highest standard'",
  liveUrl: "https://www.527studios.co.uk/",
  liveLabel: "Visit website",
};

export const businessProjects: Project[] = [
  {
    id: "socialquest",
    title: "SocialQuest",
    tagline: "iOS app · React Native and Supabase",
    description:
      "A live App Store app that helps users level up their social life, with around 400 downloads and 10 active subscribers.",
    highlights: [
      "Onboarding designed to maximise user retention",
      "In-app subscription paywall integrated with RevenueCat",
      "User authentication with Supabase and session management through React Context",
      "Access control for sensitive backend operations through Supabase RPC functions",
      "Dual-frame loader synced with data fetching to prevent transition flicker",
    ],
    stack: ["TypeScript", "React Native", "Expo", "Supabase", "RevenueCat"],
    image: socialQuestImage,
    imageAlt: "SocialQuest app logo, a green pixel-art octopus",
    liveUrl: "https://apps.apple.com/app/socialquest/id6761503836",
    liveLabel: "View on App Store",
  },
];

/** Sections on the projects page, in display order. */
export const projectGroups: ProjectGroup[] = [
  {
    id: "527studios",
    title: "527Studios Limited",
    label: "Company",
    description:
      "My mobile app studio. I design, build and ship consumer apps end to end, from research to App Store release.",
    featured: studiosWebsite,
    projects: businessProjects,
    showcase: {
      id: "love-board-games-redesign",
      title: "Website redesign",
      tagline: "Drag the handle to compare before and after",
      // TODO: replace with the real project summary, highlights and stack.
      description:
        "A redesign of the Love Board Games homepage, a UK board game rental subscription, replacing a busy stacked layout with a clear, illustrated brand.",
      highlights: [],
      stack: [],
      fullImage: redesignAfterFullImage,
      image: redesignAfterImage,
      imageAlt:
        "After: the redesigned board game rental homepage with a dark illustrated hero, serif headline and gold call-to-action buttons",
      beforeImage: redesignBeforeImage,
      beforeImageAlt: "Before: a busy, multi-colour board game rental homepage with stacked banners",
    },
  },
  {
    id: "personal",
    title: "Personal Projects",
    label: "Personal",
    description:
      "Side projects built with a professional workflow: feature branches, CI pipelines and automated tests.",
    projects,
  },
];

export const roles: Role[] = [
  {
    title: "Founder & Full-Stack Developer",
    organisation: "527Studios Ltd",
    organisationUrl: "https://www.527studios.co.uk/",
    period: "March 2026 – Present",
    summary:
      "Designed and developed mobile applications independently, leading commercial research, requirements gathering, user testing, App Store submission and marketing.",
    stack: ["TypeScript", "React Native & Expo", "Supabase", "RevenueCat"],
    achievements: [
      {
        heading: "SocialQuest (Available on App Store): ~400 Downloads | 10 Active Subscribers",
        features: [
          "Onboarding designed to maximise user retention",
          "In-app subscription paywall integrated with RevenueCat",
          "User authentication with Supabase",
          "User session management through React Context",
          "Access control for sensitive backend operations through Supabase RPC functions",
          "dual-frame loader with continuously mounted frames to prevent transition flicker",
          "loader dismissal synced with data fetch and animation completion.",
        ],
      },
      {
        heading: "Hearth (Release Pending Approval)",
        features: [
          "Dynamic onboarding flow based on user responses",
          "Optimistic UI rendering for instant feedback",
          "Off-screen tab persistence to prevent image re-decoding",
          "Serverless recipe extraction through Supabase Edge Functions and LLM processing",
          "Secure account deletion through a protected backend function with privileged access.",
        ],
      },
    ],
  },
  {
    title: "Data Analyst",
    organisation: "Digital Health and Care Wales",
    period: "January 2023 – Present",
    stack: ["React", "TypeScript", "SQL", "Python"],
    achievements: [
      {
        text: "Took initiative to develop an in-house dashboard to track data quality issues for individual system clients – using Python to retrieve the data and React/TypeScript to build the dashboard interface. The dashboard automated a process that was previously conducted manually in preparation for weekly stakeholder meetings, saving the data team close to one hour every week.",
      },
      {
        text: "Led the data discovery for the decommissioning and migration of a legacy system. Identified the data owned by each client as part of the internal procedure and took initiative to challenge the need to migrate specific datasets. This revealed that approximately 29% of the system data did not need to be migrated which reduced migration and storage costs by nearly 25%.",
      },
      {
        text: "Managed the technical relationship with a platform provider responsible for ingesting and displaying safeguarding data. Collaborated with stakeholders to design a data delivery structure that maximised the amount of health data delivered within the constraints of the platform’s ingestion API. The resulting data structure eliminated the risk of incomplete health records completely.",
      },
    ],
  },
];

export const qualifications: Qualification[] = [
  {
    award: "BSc Computer Science",
    details: "First Class Honours Degree",
    institution: "Cardiff University",
    period: "2020-2023",
  },
  {
    award: "Integrated Masters Physics",
    institution: "University of Oxford",
    period: "2019-2020",
  },
  {
    award: "A-levels",
    details: "A*A*A*A – Maths, Further Maths, Physics, Chemistry",
    institution: "Fitzalan High School",
    period: "2016 – 2018",
  },
  {
    award: "AWS Certified Cloud Practitioner: Foundational",
  },
];
