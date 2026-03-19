import { CompanyForm } from "@/types/company";
import api from "./apiHelper";
import { Job } from "@/types/job";

export const getCompanyBySlug = async (slug: string) => {
  const res = await api.get(`/companies/${slug}`);
  return res.data;
};

export const getCompanyById = async (id: string) => {
  const res = await api.get(`/companies/id/${id}`);
  return res.data;
};

export const createCompany = async (data: CompanyForm) => {
  const res = await api.post("/companies", data);
  return res.data;
};

export const updateCompany = async (slug: string, data: CompanyForm) => {
  const res = await api.put(`/companies/${slug}`, data);
  return res.data;
};

export const getCompanyJobs = async (slug: string): Promise<Job[]> => {
  const res = await api.get(`/jobs/company/${slug}`);
  return res.data.jobs; // matches the backend response
};