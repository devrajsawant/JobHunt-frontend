import { useQuery } from "@tanstack/react-query";
import { getAllCompanies, getCompanyById, getCompanyBySlug, getCompanyJobs, updateCompany } from "@/api/companyApi";
import { useMutation } from "@tanstack/react-query";
import { createCompany } from "@/api/companyApi";
import { Company, CompanyForm } from "@/types/company";
import { Job } from "@/types/job";

export const useCompany = (slug: string) => {
  return useQuery({
    queryKey: ["company", slug],
    queryFn: () => getCompanyBySlug(slug),
    enabled: !!slug,
  });
};

export const useCompanyById = (id: string) => {
  return useQuery({
    queryKey: ["company", id],
    queryFn: () => getCompanyById(id),
    enabled: !!id,
  });
};

export const useCreateCompany = () => {
  return useMutation({
    mutationFn: createCompany,
  });
};

export const useUpdateCompany = () => {
  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: CompanyForm }) =>
      updateCompany(slug, data),
  });
};

export const useCompanyJobs = (slug: string) => {
  return useQuery<Job[]>({
    queryKey: ["companyJobs", slug],
    queryFn: () => getCompanyJobs(slug),
    enabled: !!slug, // only fetch if slug is truthy
    staleTime: 1000 * 60, // 1 min caching
  });
};


export const useCompanies = () => {
  return useQuery<Company[]>({
    queryKey: ["companies"],
    queryFn: getAllCompanies,
    staleTime: 1000 * 60 * 5, // cache for 5 mins
  });
};