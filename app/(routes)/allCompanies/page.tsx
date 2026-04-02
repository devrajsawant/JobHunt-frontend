"use client";

import CompaniesSearchBar from "@/app/components/companies/companiesSearchBar";
import CompanyCard from "@/app/components/companies/companyCard";
import Navbar from "@/app/components/navbar";
import React from "react";
import { useCompanies } from "@/hooks/useCompany";

const Page = () => {
  const { data: companies, isLoading, isError } = useCompanies();

  return (
    <div>
      <Navbar />

      {/* Search Bar */}
      <div className="flex items-center py-2 mt-10 justify-center">
        <CompaniesSearchBar />
      </div>

      {/* States */}
      {isLoading && <p className="text-center mt-10">Loading companies...</p>}

      {isError && (
        <p className="text-center mt-10 text-red-500">
          Failed to load companies
        </p>
      )}

      {/* Companies Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
        {companies?.map((company) => (
          <CompanyCard
            key={company._id}
            name={company.name}
            logo={company.logo}
            employees={company.size} 
            jobs={0}
            reviews={0} // placeholder
            rating={0} // placeholder
          />
        ))}
      </div>

      {/* Empty State */}
      {companies?.length === 0 && !isLoading && (
        <p className="text-center mt-10">No companies found</p>
      )}
    </div>
  );
};

export default Page;
