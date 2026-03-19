import { useMutation, useQuery } from "@tanstack/react-query";
import { createJob, getAllJobs, getJobById } from "@/api/jobApi";
import { Job, JobForm } from "@/types/job";

export const useCreateJob = () => {
  return useMutation({
    mutationFn: (data: JobForm) => createJob(data),
  });
};

export const useJobs = () => {
  return useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
    staleTime: 1000 * 60, // 1 min
  });
};

export const useJobById = (id: string | null) => {
  return useQuery<Job>({
    queryKey: ["job", id],
    queryFn: () => getJobById(id as string),
    enabled: !!id,
    staleTime: 1000 * 60,
  });
};