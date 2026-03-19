import { Job, JobForm } from "@/types/job";
import api from "./apiHelper";

export const createJob = async (data: JobForm) => {
  const res = await api.post("/jobs", data);
  return res.data;
};

export const getAllJobs = async (): Promise<Job[]> => {
  const res = await api.get("/jobs");
  return res.data.jobs;
};

export const getJobById = async (id: string): Promise<Job> => {
  const res = await api.get(`/jobs/${id}`);
  return res.data.job;
};