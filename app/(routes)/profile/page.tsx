"use client";

import Image from "next/image";
import React from "react";
import userFallback from "../../../public/userFallback.png";

import { Github, Linkedin, Twitter, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { useProfile } from "@/hooks/useProfile";

const Page = () => {
  const { data: user, isLoading, error } = useProfile();
  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center">Loading profile...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center text-red-500">
          Failed to load profile
        </div>
      </>
    );
  }

  if (!user) return null;

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
        {/* Edit button */}
        <div className="flex justify-end mb-4 ">
          <Link href="/profile/edit" className="w-full sm:w-fit">
            <button className="border px-3 py-1 w-full rounded-sm bg-gray-800 text-gray-300">
              Edit Profile
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-4 lg:border-r lg:pr-6">
            {/* PROFILE HEADER */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <Image
                src={user.avatar || userFallback}
                alt="profile"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />

              <div>
                <h1 className="text-xl sm:text-2xl font-semibold">
                  {user.name}
                </h1>

                <p className="text-gray-500">{user.location}</p>

                <span className="text-sm text-green-700">
                  {user.employmentStatus}
                </span>
              </div>
            </div>

            {/* CONTACT */}
            <div className="my-4 sm:text-left">
              <p>
                <span className="font-medium text-gray-700">Phone: {"  "}</span>
                <span className="ml-1 font-semibold">{user.phone}</span>
              </p>
            </div>

            {/* SKILLS */}
            <div className="my-4">
              <h2 className="font-semibold text-lg">Skills</h2>

              <div className="flex flex-wrap gap-2 mt-2 justify-start sm:justify-start">
                {user.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-sm rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="my-4">
              <h2 className="font-semibold text-lg">Education</h2>

              {user.education?.map((edu, index) => (
                <div key={index} className="mt-2 sm:text-left">
                  <p className="font-semibold">{edu.degree}</p>
                  <div className="flex gap-2">
                    <p className="text-sm text-gray-600">{edu.institute}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-8 space-y-10">
            {/* EXPERIENCE */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Experience</h2>

              <div className="space-y-4">
                {user.experience?.map((exp, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between gap-1"
                  >
                    <div>
                      <h3 className="font-semibold">{exp.position}</h3>
                      <p className="text-sm text-gray-600">
                        {exp.company} • {exp.location}
                      </p>
                    </div>

                    <span className="text-sm text-gray-500">
                      {exp.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t" />

            {/* PROJECTS */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Projects</h2>

              <div className="space-y-6">
                {user.projects?.map((project, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-semibold">{project.title}</h3>

                        {project.demoLink && (
                          <a href={project.demoLink} target="_blank">
                            <ExternalLink size={16} />
                          </a>
                        )}

                        {project.github && (
                          <a href={project.github} target="_blank">
                            <Github size={16} />
                          </a>
                        )}
                      </div>

                      <p className="text-sm text-gray-600 mt-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
