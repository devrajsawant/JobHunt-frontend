import { Job, JobForm } from "@/types/job";
import api from "./apiHelper";

export const createJob = async (data: JobForm) => {
  const res = await api.post("/jobs", data);
  return res.data;
};

export const getAllJobs = async (): Promise<Job[]> => {
  const res = await api.get("/jobs");
  console.log(res,"--- res[ponse")
  return res.data.jobs;
};