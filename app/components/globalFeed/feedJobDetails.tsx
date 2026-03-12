import { MoveUpRight } from "lucide-react";
import React from "react";

const FeedJobDetails = () => {
  const jobData = {
    title: "Frontend Developer",
    company: "Google",
    workMode: "onSite",
    experience: "1-3 years",
    location: "Mumbai",
    salary: "30,000/- per month",
    description:
      "We are looking for a skilled frontend developer with experience in React and modern UI frameworks. You will work with our design and backend teams to build scalable applications.",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Git"],
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{jobData.title}</h2>
          <p className="text-gray-700 font-semibold mt-1 text-xl">
            {jobData.company}
          </p>
        </div>
        <div>
          <button className="flex border gap-2 justify-center items-center px-2 bg-gray-800 text-white py-1 rounded-md cursor-pointer ">
            Apply <MoveUpRight size={15} />
          </button>
        </div>
      </div>

      <p className="text-gray-600 my-2 text-lg">
        Location:{" "}
        <span className="font-medium text-gray-800">{jobData.location}</span> |
        Work mode:{" "}
        <span className="font-medium text-gray-800">{jobData.workMode}</span> |
        Experience:{" "}
        <span className="font-medium text-gray-800">{jobData.experience}</span>
      </p>
      <p className="text-gray-600 my-2 text-lg">
        Salary:{" "}
        <span className="font-medium text-gray-800">{jobData.salary}</span>
      </p>
      {/* Skills Section */}
      <h3 className="font-semibold mt-4 mb-2 text-xl">Skills :</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {jobData.skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-200 text-sm rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="font-semibold mb-2 text-xl">Job Description : </h3>

      <p className="text-md text-gray-700 leading-relaxed">
        {jobData.description}
      </p>

      <div>
        <button className="flex border gap-2 justify-center items-center px-2 bg-gray-800 text-white py-1 rounded-md w-full my-3 cursor-pointer ">
          Apply <MoveUpRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default FeedJobDetails;
