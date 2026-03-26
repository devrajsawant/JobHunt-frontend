"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  useJobApplications,
  useUpdateApplicationStatus,
} from "@/hooks/useApplication";
import { ApplicationStatus } from "@/types/application";

const statusStyles: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  reviewed: "bg-blue-100 text-blue-700",
  shortlisted: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  accepted: "bg-purple-100 text-purple-700",
};

const Page = () => {
  const params = useParams();
  const jobId = params?.["job-id"] as string;

  const { data, isLoading, isError } = useJobApplications(jobId);
  const { mutate: updateStatus, isPending } = useUpdateApplicationStatus();

  if (isLoading) {
    return <div className="p-6">Loading applications...</div>;
  }

  if (isError) {
    return <div className="p-6 text-red-500">Failed to load applications</div>;
  }

  if (!data || data.length === 0) {
    return <div className="p-6">No applications for this job</div>;
  }

  const handleStatusChange = (applicationId: string, newStatus: ApplicationStatus) => {
    updateStatus({
      applicationId,
      status: newStatus,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Job Applications</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border-b">Applied On</th>
              <th className="p-3 border-b">Candidate</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Resume</th>
              <th className="p-3 border-b text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((app) => (
              <tr key={app._id} className="hover:bg-gray-50">
                <td className="p-3 border-b">
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>

                <td className="p-3 border-b">{app.userId?.name || "N/A"}</td>

                <td className="p-3 border-b">{app.userId?.email || "N/A"}</td>

                <td className="p-3 border-b">
                  <a
                    href={app.resume}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    View Resume
                  </a>
                </td>

                {/* STATUS DROPDOWN */}
                <td className="p-3 border-b text-center">
                  <select
                    value={app.status || "pending"}
                    disabled={isPending}
                    onChange={(e) =>
                      handleStatusChange(app._id, e.target.value as ApplicationStatus)
                    }
                    className={`px-3 py-1 rounded-full text-sm font-medium outline-none cursor-pointer ${
                      statusStyles[app.status || "pending"]
                    }`}
                  >
                    <option value="pending">Pending</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="rejected">Rejected</option>
                    <option value="accepted">Accepted</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
