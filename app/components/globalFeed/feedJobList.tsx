"use client"
import React from "react";
import JobCard from "../common/jobCard";
import { useJobs } from "@/hooks/useJobs"; // adjust path

const FeedJobsList = () => {
  const { data: jobs, isLoading, isError } = useJobs();
  console.log(jobs,"----")
  if (isLoading) return <div>Loading jobs...</div>;
  if (isError) return <div>Failed to load jobs.</div>;

  return (
    <div className="p-4 space-y-3">
      {jobs && jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job._id} job={job} />)
      ) : (
        <div>No jobs found</div>
      )}
    </div>
  );
};

export default FeedJobsList;
