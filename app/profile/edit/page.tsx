"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/navbar";

type FormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  employmentStatus: string;

  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    portfolio: string;
  };

  skills: string[];

  education: {
    degree: string;
    institute: string;
    year: string;
  };

  experience: {
    position: string;
    company: string;
    location: string;
    duration: string;
  }[];

  projects: {
    title: string;
    description: string;
    demoLink: string;
    github: string;
  }[];
};

const Page = () => {
  const router = useRouter();

  const [skillInput, setSkillInput] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const { register, handleSubmit, control, setValue, watch } =
    useForm<FormData>({
      defaultValues: {
        name: "Devraj Sawant",
        email: "devraj@gmail.com",
        phone: "+91 9876543210",
        location: "Mumbai, India",
        employmentStatus: "Open to Work",

        socials: {
          github: "https://github.com/devraj",
          linkedin: "https://linkedin.com/in/devraj",
          twitter: "https://twitter.com/devraj",
          portfolio: "https://devraj.dev",
        },

        skills: ["React", "TypeScript", "Tailwind", "Node.js"],

        education: {
          degree: "B.Tech in Computer Science",
          institute: "Mumbai University",
          year: "2019 - 2023",
        },

        experience: [
          {
            position: "Frontend Developer",
            company: "Google",
            location: "Mumbai",
            duration: "2023 - Present",
          },
        ],

        projects: [
          {
            title: "Job Portal",
            description: "A platform for job seekers",
            demoLink: "",
            github: "",
          },
        ],
      },
    });

  const {
    fields: expFields,
    append: addExp,
    remove: removeExp,
  } = useFieldArray({
    control,
    name: "experience",
  });

  const {
    fields: projFields,
    append: addProj,
    remove: removeProj,
  } = useFieldArray({
    control,
    name: "projects",
  });

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

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const onSubmit = (data: FormData) => {
    console.log("Saved Data:", data);
    router.push("/profile");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">Edit Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* PROFILE PHOTO */}
          <div>
            <h2 className="font-semibold mb-3">Profile Photo</h2>

            <div className="flex items-center gap-4">
              {preview && (
                <Image
                  src={preview}
                  alt="preview"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              )}

              <input type="file" accept="image/*" onChange={handleImage} />
            </div>
          </div>

          {/* BASIC INFO */}
          <div>
            <h2 className="font-semibold mb-3">Basic Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("name")}
                className="border p-2 rounded"
                placeholder="Name"
              />
              <input
                {...register("location")}
                className="border p-2 rounded"
                placeholder="Location"
              />
              <input
                {...register("email")}
                className="border p-2 rounded"
                placeholder="Email"
              />
              <input
                {...register("phone")}
                className="border p-2 rounded"
                placeholder="Phone"
              />

              <select
                {...register("employmentStatus")}
                className="border p-2 rounded col-span-2"
              >
                <option>Open to Work</option>
                <option>Employed</option>
                <option>Freelancing</option>
              </select>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="font-semibold mb-3">Skills</h2>

            <div className="flex gap-2">
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Add skill"
              />

              <button
                type="button"
                onClick={addSkill}
                className="bg-gray-800 text-white px-3 rounded"
              >
                Add
              </button>
            </div>

            <div className="flex gap-2 mt-3 flex-wrap">
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

          {/* EXPERIENCE */}
          <div>
            <h2 className="font-semibold mb-3">Experience</h2>

            {expFields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-2 gap-3 mb-3 border p-3 rounded"
              >
                <input
                  {...register(`experience.${index}.position`)}
                  placeholder="Position"
                  className="border p-2 rounded"
                />

                <input
                  {...register(`experience.${index}.company`)}
                  placeholder="Company"
                  className="border p-2 rounded"
                />

                <input
                  {...register(`experience.${index}.location`)}
                  placeholder="Location"
                  className="border p-2 rounded"
                />

                <input
                  {...register(`experience.${index}.duration`)}
                  placeholder="Duration"
                  className="border p-2 rounded"
                />

                <button
                  type="button"
                  onClick={() => removeExp(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                addExp({
                  position: "",
                  company: "",
                  location: "",
                  duration: "",
                })
              }
              className="text-sm text-blue-600"
            >
              + Add Experience
            </button>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="font-semibold mb-3">Projects</h2>

            {projFields.map((field, index) => (
              <div key={field.id} className="space-y-2 border p-3 rounded mb-3">
                <input
                  {...register(`projects.${index}.title`)}
                  placeholder="Title"
                  className="border p-2 rounded w-full"
                />

                <input
                  {...register(`projects.${index}.description`)}
                  placeholder="Description"
                  className="border p-2 rounded w-full"
                />

                <input
                  {...register(`projects.${index}.demoLink`)}
                  placeholder="Demo Link"
                  className="border p-2 rounded w-full"
                />

                <input
                  {...register(`projects.${index}.github`)}
                  placeholder="Github Link"
                  className="border p-2 rounded w-full"
                />

                <button
                  type="button"
                  onClick={() => removeProj(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                addProj({
                  title: "",
                  description: "",
                  demoLink: "",
                  github: "",
                })
              }
              className="text-blue-600 text-sm"
            >
              + Add Project
            </button>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
