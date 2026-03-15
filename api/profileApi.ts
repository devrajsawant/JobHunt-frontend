import api from "./apiHelper";
import { Profile } from "@/types/profile";

export const getProfile = async (): Promise<Profile> => {
  const res = await api.get("/users/me");
  return res.data;
};

export const updateProfile = async (data: Profile) => {
  const res = await api.put("/users/me", data);
  return res.data;
};