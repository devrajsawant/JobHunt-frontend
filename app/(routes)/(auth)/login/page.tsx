"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useLogin } from "@/hooks/useAuth";
import { LoginForm } from "@/types/auth";
import { loginValidation } from "@/validation/authValidation";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>();

  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = useLogin();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = (data: LoginForm) => {
    mutate(data, {
      onSuccess: (res) => {
        dispatch(login(res));
        toast.success("Login successful");
        reset();
        router.push("/feed");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center">
          Login
        </h1>
        <p className="text-lg sm:text-xl mt-2 mb-6 text-center font-mono text-gray-600">
          Welcome Back
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm sm:text-base font-mono">Email</label>
            <input
              type="email"
              {...register("email", loginValidation.email)}
              className="w-full h-10 border rounded-md outline-none px-3 mt-1"
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
              {...register("password", loginValidation.password)}
              className="w-full h-10 border rounded-md outline-none px-3 pr-10 mt-1"
            />

            {/* Eye Icon */}
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgetPassword"
              className="text-sm text-amber-700 hover:underline"
            >
              Forget Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-zinc-700 text-white py-2.5 rounded-md text-base sm:text-lg font-serif hover:bg-zinc-800 transition"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-sm sm:text-base text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-amber-700 hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
