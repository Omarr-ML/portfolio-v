export interface Project {
  id: string;
  title: string;
  role: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  techStack: string[];
  features: string[];
  challenges: string[];
  results: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}