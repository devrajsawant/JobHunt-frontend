"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CompanyForm = {
  name: string;
  location: string;
  industry: string;
  size: string;
  website: string;
  description: string;
};

const Page = () => {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);

  const { register, handleSubmit } = useForm<CompanyForm>({
    defaultValues: {
      name: "Google",
      location: "Mountain View, California",
      industry: "Technology",
      size: "10,000+ Employees",
      website: "https://google.com",
      description:
        "Google is a global technology company focused on search engine technology, artificial intelligence, cloud computing, and advertising platforms.",
    },
  });

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const onSubmit = (data: CompanyForm) => {
    console.log("Updated Company:", data);

    // later call API here

    router.push("/companyProfile");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Edit Company Details</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* COMPANY LOGO */}
        <div>
          <h2 className="font-semibold mb-2">Company Logo</h2>

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
            <input
              {...register("name")}
              placeholder="Company Name"
              className="border p-2 rounded"
            />

            <input
              {...register("location")}
              placeholder="Location"
              className="border p-2 rounded"
            />
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div>
          <h2 className="font-semibold mb-3">About Company</h2>

          <textarea
            {...register("description")}
            rows={4}
            className="border p-2 rounded w-full"
            placeholder="Company description"
          />
        </div>

        {/* COMPANY DETAILS */}
        <div>
          <h2 className="font-semibold mb-3">Company Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              {...register("industry")}
              placeholder="Industry"
              className="border p-2 rounded"
            />

            <input
              {...register("size")}
              placeholder="Company Size"
              className="border p-2 rounded"
            />

            <input
              {...register("website")}
              placeholder="Website"
              className="border p-2 rounded col-span-2"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => router.push("/companyProfile")}
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
