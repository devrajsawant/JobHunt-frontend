export type JobForm = {
  title: string;
  workMode: string;
  experience: string;
  location: string;
  salary: string;
  description: string;
  skills: string[];
};

export type Job = {
  _id: string;
  title: string;
  companyId: string;
  workMode: string;
  experience: string;
  location: string;
  salary: string;
  description: string;
  skills: string[];
  createdAt: string;
};

