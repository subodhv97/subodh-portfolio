
export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface Project {
  name: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface Education {
    degree: string;
    institution: string;
    field: string;
    period: string;
}

export interface Certification {
    name: string;
    issuer: string;
}
