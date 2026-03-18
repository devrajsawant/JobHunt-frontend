"use client"; // client component for react-query hooks

import React from "react";
import JobCard from "../common/jobCard";
import { useParams } from "next/navigation";
import { useCompanyJobs } from "@/hooks/useCompany";

const CompanyJobs = () => {
  const params = useParams();
  const { slug } = params;
  const { data: jobs, isLoading, isError } = useCompanyJobs(slug);

  if (isLoading) return <div>Loading jobs...</div>;
  if (isError) return <div>Failed to load jobs.</div>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {jobs && jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job._id} job={job} />)
      ) : (
        <div>No jobs found</div>
      )}
    </div>
  );
};

export default CompanyJobs;
