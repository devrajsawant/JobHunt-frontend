import React from "react";
type JobProps = {
  title: string;
  company: string;
  location: string;
  experience: string;
  salary: string;
};

const JobCard = ({job}: JobProps) => {
  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
      <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>

      <p className="text-md text-gray-800 font-semibold">{job.company}</p>

      <p className="text-md text-gray-800">
        {job.location} | {job.experience} | {job.salary}
      </p>
    </div>
  );
};

export default JobCard;
