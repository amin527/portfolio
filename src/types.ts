export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  /** Full-length screenshot shown uncropped in the dialog instead of `image`. */
  fullImage?: string;
  liveUrl?: string;
  /** Text for the live link. Defaults to "Live demo". */
  liveLabel?: string;
  /** Omitted for closed-source (commercial) projects. */
  repoUrl?: string;
}

export interface ProjectGroup {
  id: string;
  title: string;
  /** Short kind label shown beside the section number, e.g. "Company". */
  label: string;
  description: string;
  link?: { href: string; label: string };
  /** Shown as a chip in the group's meta row instead of in the grid. */
  featured?: Project;
  projects: Project[];
  /** Before/after comparison shown as the last card in the grid. */
  showcase?: BeforeAfterProject;
}

/** A project shown with a before/after slider. `image` is the "after" shot. */
export interface BeforeAfterProject extends Project {
  beforeImage: string;
  beforeImageAlt: string;
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
