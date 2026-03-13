"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="">
      <h1 className="text-6xl font-serif text-center">Register</h1>
      <h1 className="text-xl mt-4 mb-8 text-center font-mono">
        Create account to get started
      </h1>

      <form onSubmit={handleSubmit(() => {})}>
        <div className="my-3 flex justify-between">
          <div>
            <p className="text-xl font-mono">First name</p>
            <input
              type="text"
              {...register("FirstName")}
              className="w-53.75 h-8 border rounded-sm outline-none px-2 py-1"
            />
          </div>
          <div>
            <p className="text-xl font-mono">Last name</p>
            <input
              type="text"
              {...register("LastName")}
              className="w-53.75 h-8 border rounded-sm outline-none px-2 py-1"
            />
          </div>
        </div>

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

        <div className="my-3">
          <p className="text-xl font-mono">Confirm password</p>
          <input
            type="password"
            {...register("confirmPassword")}
            className="w-md h-8 border rounded-sm outline-none px-2 py-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-zinc-700 text-white py-2 rounded-sm text-xl font-serif"
        >
          Login
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
