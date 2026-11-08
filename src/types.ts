export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  repoUrl: string;
}

export interface Achievement {
  heading?: string;
  text?: string;
  /** "Noteworthy Features" from the CV, one entry per feature. */
  features?: string[];
}

export interface Role {
  title: string;
  organisation: string;
  organisationUrl?: string;
  period: string;
  summary?: string;
  stack?: string[];
  achievements: Achievement[];
}

export interface Qualification {
  award: string;
  institution?: string;
  period?: string;
  details?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  intro: string;
  about: string[];
  skills: SkillGroup[];
  email: string;
  githubUrl: string;
  linkedinUrl?: string;
}
