"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="">
      <h1 className="text-6xl font-serif text-center">Login</h1>
      <h1 className="text-2xl mt-4 mb-8 text-center font-mono">Welcome Back</h1>

      <form onSubmit={handleSubmit(() => {})}>
        <div className="my-3">
          <p className="text-xl font-mono">Email</p>
          <input
            type="email"
            {...register("email")}
            className="w-md h-8 border rounded-sm outline-none px-2 py-1"
          />
        </div>

        <div className="my-3">
          <p className="text-xl font-mono">Password</p>
          <input
            type="password"
            {...register("password")}
            className="w-md h-8 border rounded-sm outline-none px-2 py-1"
          />
        </div>
        <p className="text-amber-700 my-2 text-end">
          <Link href="/forgetPassword">Forget Password ?</Link>
        </p>

        <button
          type="submit"
          className="w-full bg-zinc-700 text-white py-2 rounded-sm text-xl font-serif"
        >
          Login
        </button>
      </form>
      <p className="mt-3">
        Don&apos;t have a account yet ?{" "}
        <Link href="/register" className="text-amber-700">
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default Page;
