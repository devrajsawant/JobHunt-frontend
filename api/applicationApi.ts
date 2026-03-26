import { Application, ApplicationStatus } from "@/types/application";
import api from "./apiHelper";

export interface ApplyJobPayload {
  jobId: string;
  resume: string;
  coverLetter?: string;
}
export interface UpdateApplicationStatusPayload {
  applicationId: string;
  status: ApplicationStatus;
}

export const applyToJob = async (data: ApplyJobPayload) => {
  const res = await api.post("/applications", data);
  return res.data;
};

export const getMyApplications = async (): Promise<Application[]> => {
  const res = await api.get("/applications/me");
  return res.data.applications;
};

export const getApplicationsByJob = async (
  jobId: string,
): Promise<Application[]> => {
  const res = await api.get(`/applications/job/${jobId}`);
  return res.data.applications;
};

export const updateApplicationStatus = async ({
  applicationId,
  status,
}: UpdateApplicationStatusPayload) => {
  const res = await api.patch(`/applications/${applicationId}/status`, {
    status,
  });
  return res.data;
};
