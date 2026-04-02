"use client";

import { useRegister } from "@/hooks/useAuth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RegisterForm } from "@/types/auth";
import { registerValidation } from "@/validation/authValidation";

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const { mutate, isPending } = useRegister();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");

  const onSubmit = (data: RegisterForm) => {
    mutate(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success("User registered successfully");
          reset();
          router.push("/login");
        },
      },
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center">
          Register
        </h1>
        <p className="text-base sm:text-lg mt-2 mb-6 text-center font-mono text-gray-600">
          Create account to get started
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm sm:text-base font-mono">
                First name
              </label>
              <input
                type="text"
                {...register("firstName", registerValidation.firstName)}
                className="w-full h-10 border rounded-md px-3 mt-1"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm sm:text-base font-mono">
                Last name
              </label>
              <input
                type="text"
                {...register("lastName", registerValidation.lastName)}
                className="w-full h-10 border rounded-md px-3 mt-1"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm sm:text-base font-mono">Email</label>
            <input
              type="email"
              {...register("email", registerValidation.email)}
              className="w-full h-10 border rounded-md px-3 mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-sm sm:text-base font-mono">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              {...register("password", registerValidation.password)}
              className="w-full h-10 border rounded-md px-3 pr-10 mt-1"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="text-sm sm:text-base font-mono">
              Confirm Password
            </label>

            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full h-10 border rounded-md px-3 pr-10 mt-1"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-zinc-700 text-white py-2.5 rounded-md text-base sm:text-lg font-serif hover:bg-zinc-800 transition"
          >
            {isPending ? "Registering..." : "Register"}
          </button>

          {/* Footer */}
          <p className="text-sm sm:text-base text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-700 hover:underline">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
