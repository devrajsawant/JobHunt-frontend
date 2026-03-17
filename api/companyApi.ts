import { CompanyForm } from "@/types/company";
import api from "./apiHelper";

export const getCompanyBySlug = async (slug: string) => {
  const res = await api.get(`/companies/${slug}`);
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
