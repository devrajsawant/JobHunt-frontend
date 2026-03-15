export type Education = {
  degree: string;
  institute: string;
  year: string;
};

export type Experience = {
  position: string;
  company: string;
  location: string;
  duration: string;
};

export type Project = {
  title: string;
  description: string;
  demoLink: string;
  github: string;
};

export type Profile = {
  name: string;
  phone: string;
  location: string;
  employmentStatus: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
};