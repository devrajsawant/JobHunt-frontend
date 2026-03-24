"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Star } from "lucide-react";

import userFallback from "../../../../../public/userFallback.png";

import CompanyAbout from "@/app/components/companyProfile/companyAbout";
import CompanyJobs from "@/app/components/companyProfile/companyJobs";
import CompanyReviews from "@/app/components/companyProfile/companyReview";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCompany } from "@/hooks/useCompany";

const Page = () => {
  const [activeTab, setActiveTab] = useState("about");

  const params = useParams();
  const slug = params.slug as string;
  const { data: company, isLoading } = useCompany(slug);

  if (isLoading) return <p>Loading...</p>;

  const tabs = [
    { id: "about", label: "About Company" },
    { id: "jobs", label: "Jobs" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      {/* Company Banner */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {/* Logo */}
          <Image
            src={company.logo || userFallback}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
            height={200}
            width={200}
            alt="company pfp"
          />

          {/* Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              {company.name}
            </h1>

            <p className="text-gray-500 text-sm sm:text-base font-semibold">
              {company.location}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < company.rating ? "text-yellow-500" : "text-gray-400"
                  }`}
                />
              ))}

              <span className="text-gray-600 text-sm ml-2">
                {company.ratingValue} Rating
              </span>
            </div>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/companyProfile/${slug}/edit`}
            className="bg-zinc-700 text-white px-4 py-2 rounded-md text-sm sm:text-base h-fit"
          >
            Edit Details
          </Link>

          <Link
            href={`/companyProfile/${slug}/jobPosting`}
            className="bg-zinc-700 text-white px-4 py-2 rounded-md text-sm sm:text-base h-fit"
          >
            Create Job
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 sm:gap-8 border-b mt-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 whitespace-nowrap text-sm sm:text-base ${
              activeTab === tab.id
                ? "border-b-2 border-gray-600 text-gray-700 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Body */}
      <div className="mt-6">
        {activeTab === "about" && <CompanyAbout data={company} />}
        {activeTab === "jobs" && <CompanyJobs />}
        {activeTab === "reviews" && <CompanyReviews />}
      </div>
    </div>
  );
};

export default Page;
