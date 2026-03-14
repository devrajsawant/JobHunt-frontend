import { RegisterOptions } from "react-hook-form";
import { RegisterForm } from "../types/auth";
import { LoginForm } from "../types/auth";

export const registerValidation: Record<
  keyof RegisterForm,
  RegisterOptions<RegisterForm>
> = {
  firstname: {
    required: "First name is required",
    minLength: {
      value: 2,
      message: "Minimum 2 characters",
    },
  },

  lastname: {
    required: "Last name is required",
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      message: "Invalid email",
    },
  },

  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Minimum 6 characters",
    },
  },

  confirmPassword: {
    required: "Confirm password is required",
  },
};


export const loginValidation: Record<
  keyof LoginForm,
  RegisterOptions<LoginForm>
> = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      message: "Invalid email",
    },
  },

  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Minimum 6 characters",
    },
  },
};