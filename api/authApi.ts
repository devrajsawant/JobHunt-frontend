import { LoginForm } from "@/types/auth";
import api from "./apiHelper";

export type RegisterPayload = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export const registerUser = async (data: RegisterPayload) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const loginUser = async (data: LoginForm) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};