"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/app/components/navbar";

type JobForm = {
  title: string;
  company: string;
  workMode: string;
  experience: string;
  location: string;
  salary: string;
  description: string;
  skills: string[];
};

const Page = () => {
  const { register, handleSubmit, setValue, watch } = useForm<JobForm>({
    defaultValues: {
      title: "",
      company: "",
      workMode: "onSite",
      experience: "",
      location: "",
      salary: "",
      description: "",
      skills: [],
    },
  });

  const [skillInput, setSkillInput] = useState("");

  const skills = watch("skills");

  const addSkill = () => {
    if (!skillInput) return;
    setValue("skills", [...skills, skillInput]);
    setSkillInput("");
  };

  const removeSkill = (index: number) => {
    const updated = skills.filter((_, i) => i !== index);
    setValue("skills", updated);
  };

  const onSubmit = (data: JobForm) => {
    console.log("Job Posted:", data);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">Create Job Posting</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* BASIC INFO */}
          <div>
            <h2 className="font-semibold mb-3">Basic Job Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Job Title</label>
                <input
                  {...register("title")}
                  placeholder="Frontend Developer"
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Company Name</label>
                <input
                  {...register("company")}
                  placeholder="Google"
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Location</label>
                <input
                  {...register("location")}
                  placeholder="Mumbai"
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Salary</label>
                <input
                  {...register("salary")}
                  placeholder="30,000/month"
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Experience</label>
                <input
                  {...register("experience")}
                  placeholder="1-3 years"
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Work Mode</label>
                <select
                  {...register("workMode")}
                  className="border p-2 rounded"
                >
                  <option value="onSite">On-site</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="font-semibold mb-3">Required Skills</h2>

            <div className="flex gap-2">
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Add skill (React, Node, etc)"
                className="border p-2 rounded w-full"
              />

              <button
                type="button"
                onClick={addSkill}
                className="bg-gray-800 text-white px-4 rounded"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-200 px-3 py-1 rounded flex items-center gap-2"
                >
                  {skill}

                  <button
                    type="button"
                    onClick={() => removeSkill(i)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <h2 className="font-semibold mb-3">Job Description</h2>

            <textarea
              {...register("description")}
              rows={6}
              placeholder="Describe the job role, responsibilities, requirements..."
              className="border p-3 rounded w-full"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-gray-800 text-white px-5 py-2 rounded"
            >
              Post Job
            </button>

            <button type="button" className="border px-5 py-2 rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
