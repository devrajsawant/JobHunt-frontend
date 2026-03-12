import Image from "next/image";
import React from "react";
import userFallback from "../../public/userFallback.png";
import Navbar from "../components/navbar";

import { Github, Linkedin, Twitter, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const user = {
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
      {
        position: "React Developer Intern",
        company: "StartupX",
        location: "Remote",
        duration: "2022 - 2023",
      },
    ],

    projects: [
      {
        title: "Job Portal",
        description: "A platform for job seekers to discover opportunities",
        demoImage: "/projectDemo.png",
        demoLink: "https://jobportal.com",
        github: "https://github.com/devraj/jobportal",
        skills: ["React", "Node", "MongoDB"],
      },
      {
        title: "Portfolio Website",
        description: "Personal developer portfolio",
        demoImage: "/projectDemo.png",
        demoLink: "https://portfolio.com",
        github: "https://github.com/devraj/portfolio",
        skills: ["Next.js", "Tailwind"],
      },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col items-end gap-2">
        <button className="border px-3 py-1 rounded-sm items-end w-fit bg-gray-800 text-gray-300 cursor-pointer">
            <Link href="/profile/edit">
            Edit Profile
            </Link>
        </button>
        <div className="grid grid-cols-12 gap-10">
          {/* LEFT SIDE */}
          <div className="col-span-4 border-r pr-6">
            <div className="flex items-center gap-3">
              <Image
                src={userFallback}
                alt="profile"
                width={120}
                height={120}
                className="rounded-full object-cover"
              />

              <div>
                <h1 className="text-2xl font-semibold">{user.name}</h1>

                <p className="text-lg text-gray-500">{user.location}</p>

                <span className="text-sm text-green-800">
                  {user.employmentStatus}
                </span>
              </div>
            </div>

            {/* CONTACT */}
            <div className="my-4">
              <p>
                <span className="font-medium text-gray-700 text-md">
                  Email:
                </span>

                <span className="text-gray-800 ml-1 text-md font-semibold">
                  {user.email}
                </span>
              </p>

              <p className="my-2">
                <span className="font-medium text-gray-700 text-md">
                  Phone:
                </span>

                <span className="text-gray-800 ml-1 text-md font-semibold">
                  {user.phone}
                </span>
              </p>
            </div>

            {/* SOCIALS */}
            <div className="my-4">
              <h2 className="font-medium text-gray-700 text-md">Socials</h2>

              <div className="flex gap-4 mt-2">
                <a href={user.socials.github} target="_blank">
                  <Github className="w-5 h-5 text-gray-700 hover:text-black" />
                </a>

                <a href={user.socials.linkedin} target="_blank">
                  <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-600" />
                </a>

                <a href={user.socials.twitter} target="_blank">
                  <Twitter className="w-5 h-5 text-gray-700 hover:text-sky-500" />
                </a>

                <a href={user.socials.portfolio} target="_blank">
                  <Globe className="w-5 h-5 text-gray-700 hover:text-green-600" />
                </a>
              </div>
            </div>

            {/* SKILLS */}
            <div className="my-4">
              <h2 className="font-medium text-gray-700 text-md">Skills</h2>

              <div className="flex flex-wrap gap-2 mt-2">
                {user.skills.map((skill, index) => (
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
              <h2 className="font-medium text-gray-700 text-md">Education</h2>

              <p className="font-semibold text-gray-800">
                {user.education.degree}
              </p>

              <p className="text-gray-600 text-sm">
                {user.education.institute}
              </p>

              <p className="text-gray-500 text-sm">{user.education.year}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-8 space-y-10">
            {/* EXPERIENCE */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Experience</h2>

              <div className="space-y-5">
                {user.experience.map((exp, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {exp.position}
                      </h3>

                      <p className="text-gray-600 text-sm">
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
                {user.projects.map((project, index) => (
                  <div key={index} className="flex gap-4">
                    <Image
                      src={userFallback}
                      alt={project.title}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{project.title}</h3>

                        <a
                          href={project.demoLink}
                          target="_blank"
                          className="text-gray-600 hover:text-black"
                        >
                          <ExternalLink size={16} />
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          className="text-gray-600 hover:text-black"
                        >
                          <Github size={16} />
                        </a>
                      </div>

                      <p className="text-sm text-gray-600 mt-1">
                        {project.description}
                      </p>

                      <div className="flex gap-2 mt-2 flex-wrap">
                        {project.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-200 text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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
