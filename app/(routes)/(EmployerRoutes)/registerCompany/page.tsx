"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCreateCompany } from "@/hooks/useCompany";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/authSlice";
import { RootState } from "@/store/store";

type CompanyForm = {
  name: string;
  location: string;
  industry: string;
  size: string;
  website: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  linkedin: string;
  twitter: string;
  logo: string;
};

const Page = () => {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const { register, handleSubmit, setValue } = useForm<CompanyForm>();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);

    setValue("logo", url);
  };

  const { mutate, isPending } = useCreateCompany();

  const dispatch = useDispatch();

  const onSubmit = (data: CompanyForm) => {
    mutate(data, {
      onSuccess: (res) => {
        dispatch(
          login({
            user: currentUser,
            company: res.company,
          }),
        );

        router.push(`/companyProfile/${res.company.slug}`);
      },
      onError: (err: any) => {
        toast.error(err.response?.data?.message || "Failed to create company");
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Create Company</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* COMPANY LOGO */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Company Logo</label>

          <div className="flex items-center gap-4">
            {preview && (
              <Image
                src={preview}
                alt="preview"
                width={100}
                height={100}
                className="rounded-lg"
              />
            )}

            <input type="file" accept="image/*" onChange={handleImage} />
          </div>
        </div>

        {/* BASIC INFO */}
        <div>
          <h2 className="font-semibold mb-3">Basic Information</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium">
                Company Name
              </label>
              <input
                id="name"
                {...register("name", { required: true })}
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="location" className="text-sm font-medium">
                Location
              </label>
              <input
                id="location"
                {...register("location", { required: true })}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-1">
          <label htmlFor="description" className="text-sm font-medium">
            Company Description
          </label>

          <textarea
            id="description"
            {...register("description", { required: true })}
            rows={4}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* COMPANY DETAILS */}
        <div>
          <h2 className="font-semibold mb-3">Company Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="industry" className="text-sm font-medium">
                Industry
              </label>
              <input
                id="industry"
                {...register("industry", { required: true })}
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="size" className="text-sm font-medium">
                Company Size
              </label>
              <input
                id="size"
                {...register("size", { required: true })}
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="space-y-1 col-span-2">
              <label htmlFor="website" className="text-sm font-medium">
                Website
              </label>
              <input
                id="website"
                {...register("website")}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h2 className="font-semibold mb-3">Contact Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="contactEmail" className="text-sm font-medium">
                Contact Email
              </label>
              <input
                id="contactEmail"
                {...register("contactEmail")}
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="contactPhone" className="text-sm font-medium">
                Contact Phone
              </label>
              <input
                id="contactPhone"
                {...register("contactPhone")}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h2 className="font-semibold mb-3">Social Links</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="linkedin" className="text-sm font-medium">
                LinkedIn
              </label>
              <input
                id="linkedin"
                {...register("linkedin")}
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="twitter" className="text-sm font-medium">
                Twitter
              </label>
              <input
                id="twitter"
                {...register("twitter")}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={isPending}
            className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {isPending ? "Creating..." : "Create Company"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
