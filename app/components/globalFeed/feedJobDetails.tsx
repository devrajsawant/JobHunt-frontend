"use client";

import { useJobById } from "@/hooks/useJobs";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import selectJobFeed from "../../../public/vectorIllustrations/select-job-feed.svg";
import { useApplyToJob, useMyApplications } from "@/hooks/useApplication";
import toast from "react-hot-toast";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LoginRequiredModal from "../model/loginRequiredModel";
import { useState } from "react";
type props = {
  isSingleJobPage?: boolean;
};
const FeedJobDetails = ({ isSingleJobPage }: props) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const params = useParams();
  const slug = params.slug as string;
  const jobId = (params["job-id"] as string) || searchParams.get("jobId");

  const { data: job, isLoading, isError } = useJobById(jobId);
  const { data: applications, isLoading: isAppLoading } = useMyApplications();
  const { mutate: applyJob, isPending } = useApplyToJob();
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const isOwner =
  //@ts-expect-error: ownerid not present
    currentUser?._id?.toString() === job?.companyId?.ownerId?.toString();
  const alreadyApplied = isLoggedIn
    ? applications?.some((app) => app.jobId._id === jobId)
    : false;

  const handleApply = () => {
    if (!jobId) return;
    if (!isLoggedIn) {
      setLoginModalOpen(true);
      return;
    }
    applyJob(
      {
        jobId,
        resume: "https://your-resume-link.pdf", // replace later with user.resume
        coverLetter: "I am interested in this role",
      },
      {
        onSuccess: () => {
          toast.success("Applied successfully!");
        },
        onError: (err: any) => {
          toast.error(err?.response?.data?.message || "Failed to apply");
        },
      },
    );
  };

  if (isLoading) return <div>Loading job details...</div>;
  if (isError) return <div>Failed to load job.</div>;
  if (!job)
    return (
      <div className=" h-full w-full flex items-center justify-center text-center">
        <div>
          <Image
            src={selectJobFeed}
            alt="Auth Page Svg"
            height={300}
            width={300}
            className="mb-8 "
          />
          Please select a Job to see the details
        </div>
      </div>
    );

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
        {isAppLoading && isLoggedIn && !isOwner ? (
          <button
            disabled
            className="w-full py-2 bg-gray-400 text-white rounded-md my-3"
          >
            Checking...
          </button>
        ) : alreadyApplied ? (
          <div className="w-full text-center py-2 bg-green-100 text-green-700 rounded-md my-3 font-semibold">
            Applied
          </div>
        ) : (
          !isOwner && (
            <button
              onClick={handleApply}
              disabled={isPending}
              className="flex border gap-2 justify-center items-center px-2 bg-gray-800 text-white py-1 rounded-md w-full my-3 cursor-pointer disabled:opacity-50"
            >
              {isPending ? "Applying..." : "Apply"}
              <MoveUpRight size={15} />
            </button>
          )
        )}
        {isOwner && (
          <button className="flex border gap-2 justify-center items-center px-2 bg-gray-800 text-white py-1 rounded-md w-full my-3 cursor-pointer disabled:opacity-50">
            <Link href={`/companyProfile/${slug}/${jobId}/applications`}>
              Track Applications
            </Link>
          </button>
        )}
      </div>

      <LoginRequiredModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
};

export default FeedJobDetails;
