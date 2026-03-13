import React from "react";
import JobCard from "../common/jobCard";

const FeedJobsList = () => {
  const jobs = Array.from({ length: 10 }).map(() => ({
    title: "Frontend Developer",
    company: "Google",
    experience: "1-3 years",
    location: "Mumbai",
    salary: "30,000/- per month",
  }));

  return (
    <div className="p-4 space-y-3">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default FeedJobsList;
