"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="">
      <h1 className="text-5xl font-serif text-center">Forget Password ?</h1>
      <h1 className="text-lg mt-4 mb-8 text-center font-mono">No problem, recover it in few simple steps</h1>

      <form onSubmit={handleSubmit(() => {})}>
        <div className="my-3">
          <p className="text-xl font-mono">Email</p>
          <input
            type="email"
            {...register("email")}
            className="w-md h-8 border rounded-sm outline-none px-2 py-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-zinc-700 text-white py-2 rounded-sm text-xl font-serif"
        >
          Continue
        </button>
      </form>
      <p className="mt-3 flex gap-1">
        Go back to{" "}
        <Link href="/register" className="text-amber-700">
          <div className="flex gap-1 items-center">
            Login <ArrowRight size={15} />
          </div>
        </Link>
      </p>
    </div>
  );
};

export default Page;
