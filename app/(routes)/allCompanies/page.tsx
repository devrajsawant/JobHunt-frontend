import CompaniesSearchBar from "@/app/components/companies/companiesSearchBar";
import CompanyCard from "@/app/components/companies/companyCard";
import Navbar from "@/app/components/navbar";
import React from "react";

const companies = [
  {
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    employees: 150000,
    jobs: 124,
    reviews: 4300,
    rating: 4.5,
  },
  {
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    employees: 181000,
    jobs: 98,
    reviews: 3900,
    rating: 4.4,
  },
  {
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    employees: 1600000,
    jobs: 230,
    reviews: 5200,
    rating: 4.1,
  },
  {
    name: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    employees: 86000,
    jobs: 65,
    reviews: 2100,
    rating: 4.3,
  },
  {
    name: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    employees: 13000,
    jobs: 21,
    reviews: 1200,
    rating: 4.6,
  },
];

const Page = () => {
  return (
    <div>
      <Navbar />

      {/* Search Bar */}
      <div className="flex items-center py-2 mt-10 justify-center">
        <CompaniesSearchBar />
      </div>

      {/* Companies Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
        {companies.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default Page;