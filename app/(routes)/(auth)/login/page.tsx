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
    <div>
      <h1 className="text-6xl font-serif text-center">Login</h1>
      <h1 className="text-2xl mt-4 mb-8 text-center font-mono">Welcome Back</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="my-3">
          <p className="text-xl font-mono">Email</p>
          <input
            type="email"
            {...register("email", loginValidation.email)}
            className="w-md h-8 border rounded-sm outline-none px-2 py-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="my-3 relative">
          <p className="text-xl font-mono">Password</p>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", loginValidation.password)}
            className="w-md h-8 border rounded-sm outline-none px-2 py-1"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <p className="text-amber-700 my-2 text-end">
          <Link href="/forgetPassword">Forget Password ?</Link>
        </p>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-zinc-700 text-white py-2 rounded-sm text-xl font-serif"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-3">
        Don&apos;t have an account yet?{" "}
        <Link href="/register" className="text-amber-700">
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default Page;
