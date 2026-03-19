import { useRouter } from "next/navigation";
import React from "react";
type JobProps = {
  job: {
    _id: string
    title: string;
    company: string;
    location: string;
    experience: string;
    salary: string;
    companyId: string;
  };
};

const JobCard = ({ job }: JobProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`?jobId=${job._id}&companyId=${job.companyId}`);
  };
  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onClick={handleClick}>
      <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>

      <p className="text-md text-gray-800 font-semibold">{job.company}</p>

      <p className="text-md text-gray-800">
        {job.location} | {job.experience} | {job.salary}
      </p>
    </div>
  );
};

export default JobCard;
