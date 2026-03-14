import { loginUser, registerUser } from "@/api/authApi";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
    },
  });
};
