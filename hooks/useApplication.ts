import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  applyToJob,
  ApplyJobPayload,
  getMyApplications,
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
