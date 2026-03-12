import React from "react";

const FeedJobsList = () => {
  const jobs = Array.from({ length: 10 });
  const jobData = {
    title: "Frontend Developer",
    company: "Google",
    experience: "1-3 years",
    location: "Mumbai",
    salary: "30,000/- per month",
  };

  return (
    <div className="p-4 space-y-3">
      {jobs.map((_, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
        >
          <h3 className="font-semibold text-lg text-gray-900">
            {jobData.title}
          </h3>
          <p className="text-md text-gray-800 font-semibold">
            {jobData.company}
          </p>
          <p className="text-md text-gray-800">
            {jobData.location} | {jobData.experience} | {jobData.salary}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeedJobsList;
