import { useMutation, useQuery } from "@tanstack/react-query";
import { createJob, getAllJobs } from "@/api/jobApi";
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