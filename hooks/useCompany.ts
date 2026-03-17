import { useQuery } from "@tanstack/react-query";
import { getCompanyBySlug, updateCompany } from "@/api/companyApi";
import { useMutation } from "@tanstack/react-query";
import { createCompany } from "@/api/companyApi";
import { CompanyForm } from "@/types/company";

export const useCompany = (slug: string) => {
  return useQuery({
    queryKey: ["company", slug],
    queryFn: () => getCompanyBySlug(slug),
    enabled: !!slug,
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