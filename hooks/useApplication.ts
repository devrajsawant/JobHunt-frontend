import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  applyToJob,
  ApplyJobPayload,
  getMyApplications,
  getApplicationsByJob,
  updateApplicationStatus,
} from "@/api/applicationApi";
import { Application } from "@/types/application";

export const useApplyToJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ApplyJobPayload) => applyToJob(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myApplications"] });
    },
  });
};

export const useMyApplications = () => {
  return useQuery<Application[]>({
    queryKey: ["myApplications"],
    queryFn: getMyApplications,
    staleTime: 1000 * 60, // 1 min
  });
};

export const useJobApplications = (jobId: string) => {
  return useQuery<Application[]>({
    queryKey: ["jobApplications", jobId],
    queryFn: () => getApplicationsByJob(jobId),
    enabled: !!jobId, // important
    staleTime: 1000 * 60,
  });
};

export const useUpdateApplicationStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateApplicationStatus,

    onSuccess: (_, variables) => {
      // Refresh job applications list
      queryClient.invalidateQueries({
        queryKey: ["jobApplications"],
      });

      // Optional: also refresh my applications
      queryClient.invalidateQueries({
        queryKey: ["myApplications"],
      });
    },
  });
};
