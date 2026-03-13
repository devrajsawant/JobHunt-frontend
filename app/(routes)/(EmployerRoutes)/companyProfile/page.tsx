"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Star } from "lucide-react";

import userFallback from "../../../../public/userFallback.png";

import CompanyAbout from "@/app/components/companyProfile/companyAbout";
import CompanyJobs from "@/app/components/companyProfile/companyJobs";
import CompanyReviews from "@/app/components/companyProfile/companyReview";

const Page = () => {
  const [activeTab, setActiveTab] = useState("about");

  const company = {
    name: "Google",
    location: "Mountain View, California",
    rating: 4,
    ratingValue: 4.2,
    logo: userFallback,
  };

  const tabs = [
  { id: "about", label: "About Company" },
  { id: "jobs", label: "Jobs" },
  { id: "reviews", label: "Reviews" },
];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Company Banner */}
      <div className="rounded-xl p-6 flex items-center gap-6">
        <Image
          src={company.logo}
          className="w-20 h-20 rounded-lg"
          height={200}
          width={200}
          alt="company pfp"
        />

        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-800">{company.name}</h1>
          <p className="text-gray-500 text-xl font-semibold">
            {company.location}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={`${
                  i < company.rating ? "text-yellow-500" : "text-gray-400"
                }`}
              />
            ))}

            <span className="text-gray-600 text-md ml-2">
              {company.ratingValue} Rating
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b mt-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 cursor-pointer  text-lg ${
              activeTab === tab.id
                ? "border-b-2 border-gray-600 text-gray-700 font-semibold"
                : "text-gray-500 font-normal"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Body */}
      <div className="mt-6">
        {activeTab === "about" && <CompanyAbout />}
        {activeTab === "jobs" && <CompanyJobs />}
        {activeTab === "reviews" && <CompanyReviews />}
      </div>
    </div>
  );
};

export default Page;
