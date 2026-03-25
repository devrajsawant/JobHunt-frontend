export type CompanyForm = {
  name: string;
  location: string;
  industry: string;
  size: string;
  website: string;
  description: string;
};

export type Company = {
  _id: string;
  name: string;
  slug: string;

  description?: string;
  industry?: string;
  size?: string;
  location?: string;

  logo?: string;
  website?: string;

  contactEmail?: string;
  contactPhone?: string;

  linkedin?: string;
  twitter?: string;

  ownerId?: string;

  createdAt?: string;
  updatedAt?: string;
};