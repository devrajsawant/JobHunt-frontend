import React from "react";
import JobCard from "../common/jobCard";

const jobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    experience: "1-3 years",
    salary: "30k/month",
  },
  {
    title: "Backend Developer",
    company: "Google",
    location: "Bangalore",
    experience: "2-4 years",
    salary: "40k/month",
  },
  {
    title: "Full Stack Developer",
    company: "Google",
    location: "Mumbai",
    experience: "2-5 years",
    salary: "45k/month",
  },
];

const CompanyJobs = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default CompanyJobs;