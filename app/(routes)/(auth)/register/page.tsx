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
    console.log(data)
    mutate(
      {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success("User registered successfully");

          reset(); // clears form

          router.push("/login"); // redirect
        },
      },
    );
  };

  return (
    <div>
      <h1 className="text-6xl font-serif text-center">Register</h1>
      <h1 className="text-xl mt-4 mb-8 text-center font-mono">
        Create account to get started
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First + Last Name */}
        <div className="my-3 flex justify-between">
          <div>
            <p className="text-xl font-mono">First name</p>
            <input
              type="text"
              {...register("firstname", registerValidation.firstname)}
              className="w-53.75 h-8 border rounded-sm outline-none px-2 py-1"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname.message}</p>
            )}
          </div>

          <div>
            <p className="text-xl font-mono">Last name</p>
            <input
              type="text"
              {...register("lastname",registerValidation.lastname)}
              className="w-53.75 h-8 border rounded-sm outline-none px-2 py-1"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="my-3">
          <p className="text-xl font-mono">Email</p>
          <input
            type="email"
            {...register("email", registerValidation.email)}
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
            {...register("password", registerValidation.password)}
            className="w-md h-8 border rounded-sm outline-none px-2 py-1 pr-10"
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

        {/* Confirm Password */}
        <div className="my-3 relative">
          <p className="text-xl font-mono">Confirm password</p>

          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-md h-8 border rounded-sm outline-none px-2 py-1 pr-10"
          />

          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-zinc-700 text-white py-2 rounded-sm text-xl font-serif"
        >
          {isPending ? "Registering..." : "Register"}
        </button>

        <p className="mt-3">
          Already have an account{" "}
          <Link href="/login" className="text-amber-700">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
