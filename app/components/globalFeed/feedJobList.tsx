"use client";

import { useSearchParams } from "next/navigation";
import { useSearchResults } from "@/hooks/useSearch";
import { useJobs } from "@/hooks/useJobs";
import JobCard from "../common/jobCard";
import { Job } from "@/types/job";

const FeedJobsList = () => {
  const searchParams = useSearchParams();

  const filters = {
    position: searchParams.get("position") || "",
    location: searchParams.get("location") || "",
    experience: searchParams.get("experience") || "",
    jobType: searchParams.get("jobType") || "",
    salary: searchParams.get("salary") || "",
    workMode: searchParams.get("workMode") || "",
  };

  const isSearching = Object.values(filters).some(Boolean);

  const { data: searchJobs, isLoading: searchLoading } =
    useSearchResults(filters);

  const { data: defaultJobs, isLoading: defaultLoading, isError } = useJobs();

  const jobs = isSearching ? searchJobs : defaultJobs;
  const isLoading = isSearching ? searchLoading : defaultLoading;

  if (isLoading) return <div>Loading jobs...</div>;
  if (isError) return <div>Failed to load jobs.</div>;

  return (
    <div className="p-4 space-y-3">
      {jobs && jobs.length > 0 ? (
        jobs.map((job: Job) => <JobCard key={job._id} job={job} />)
      ) : (
        <div>No jobs found</div>
      )}
    </div>
  );
};

export default FeedJobsList;
