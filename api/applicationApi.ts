import { Application } from "@/types/application";
import api from "./apiHelper";

export interface ApplyJobPayload {
  jobId: string;
  resume: string;
  coverLetter?: string;
}

export const applyToJob = async (data: ApplyJobPayload) => {
  const res = await api.post("/applications", data);
  return res.data;
};

export const getMyApplications = async (): Promise<Application[]> => {
  const res = await api.get("/applications/me");
  return res.data.applications;
};