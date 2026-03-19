"use client";

import { useCompanyById } from "@/hooks/useCompany";
import { StarIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

const FeedCompanyDetails = () => {
  const searchParams = useSearchParams();
  const companyId = searchParams.get("companyId");

  const { data: company, isLoading, isError } = useCompanyById(companyId!);

  const renderStars = (rating: number = 0) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < fullStars ? "text-yellow-500" : "text-gray-400"}
        >
          <StarIcon size={20} />
        </span>,
      );
    }

    return stars;
  };

  // 🔹 Loading state
  if (isLoading) return <div className="p-6">Loading company...</div>;

  // 🔹 Error state
  if (isError || !company)
    return <div className="p-6">Failed to load company.</div>;

  return (
    <div className="p-6 space-y-3">
      {/* Company Name */}
      <h2 className="text-3xl font-bold">{company.name}</h2>

      {/* Industry */}
      <p className="text-md text-gray-700">
        <span className="font-semibold">Industry:</span> {company.industry}
      </p>

      {/* Employees */}
      <p className="text-md text-gray-700">
        <span className="font-semibold">Employees:</span> {company.employees}
      </p>

      {/* Location */}
      <p className="text-md text-gray-700">
        <span className="font-semibold">Headquarters:</span> {company.location}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 text-md">
        <span className="font-semibold">Reviews:</span>
        <div className="flex gap-1">{renderStars(company.rating)}</div>
        <span className="text-gray-500">({company.rating || 0})</span>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 leading-relaxed pt-2">
        {company.description}
      </p>
    </div>
  );
};

export default FeedCompanyDetails;
