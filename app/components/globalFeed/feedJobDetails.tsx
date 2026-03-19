"use client";

import { MoveUpRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useJobById } from "@/hooks/useJobs";

const FeedJobDetails = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  const { data: job, isLoading, isError } = useJobById(jobId);

  if (isLoading) return <div>Loading job details...</div>;
  if (isError) return <div>Failed to load job.</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div className="p-6">
      <div>
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <p className="text-gray-700 font-semibold mt-1 text-xl">
          {/* @ts-expect-error: name field is populated from backend to show the name but on FE we kept companyId as string for simplification */}
          {job.companyId?.name || "Company"}
        </p>
      </div>

      <p className="text-gray-600 my-2 text-lg">
        Location:{" "}
        <span className="font-medium text-gray-800">{job.location}</span> | Work
        mode: <span className="font-medium text-gray-800">{job.workMode}</span>{" "}
        | Experience:{" "}
        <span className="font-medium text-gray-800">{job.experience}</span>
      </p>

      <p className="text-gray-600 my-2 text-lg">
        Salary: <span className="font-medium text-gray-800">{job.salary}</span>
      </p>

      {/* Skills */}
      <h3 className="font-semibold mt-4 mb-2 text-xl">Skills :</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills?.map((skill: string, index: number) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-200 text-sm rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Description */}
      <h3 className="font-semibold mb-2 text-xl">Job Description :</h3>

      <p className="text-md text-gray-700 leading-relaxed">{job.description}</p>

      <div>
        <button className="flex border gap-2 justify-center items-center px-2 bg-gray-800 text-white py-1 rounded-md w-full my-3 cursor-pointer ">
          Apply <MoveUpRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default FeedJobDetails;
