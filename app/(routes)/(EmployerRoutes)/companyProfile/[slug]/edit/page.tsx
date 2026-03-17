"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useCompany, useUpdateCompany } from "@/hooks/useCompany";
import { CompanyForm } from "@/types/company";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const { mutate } = useUpdateCompany();

  const { data: company, isLoading } = useCompany(slug);

  const [preview, setPreview] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<CompanyForm>();

  useEffect(() => {
    if (company) {
      reset({
        name: company.name,
        location: company.location,
        industry: company.industry,
        size: company.size,
        website: company.website,
        description: company.description,
      });

      // optional: set existing logo preview
      // if (company.logo) {
      //   setPreview(company.logo);
      // }
    }
  }, [company, reset]);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const onSubmit = (data: CompanyForm) => {
    mutate(
      { slug, data },
      {
        onSuccess: () => {
          router.push(`/companyProfile/${slug}`);
        },
      },
    );
  };

  if (isLoading) return <p>Loading...</p>;

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
            <input {...register("name")} className="border p-2 rounded" />
            <input {...register("location")} className="border p-2 rounded" />
          </div>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="font-semibold mb-3">About Company</h2>

          <textarea
            {...register("description")}
            rows={4}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h2 className="font-semibold mb-3">Company Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <input {...register("industry")} className="border p-2 rounded" />
            <input {...register("size")} className="border p-2 rounded" />
            <input
              {...register("website")}
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
            onClick={() => router.push(`/companyProfile/${slug}`)}
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
