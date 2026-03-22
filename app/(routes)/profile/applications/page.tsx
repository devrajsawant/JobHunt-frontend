"use client";

import Navbar from "@/app/components/navbar";
import { useMyApplications } from "@/hooks/useApplication";

const Page = () => {
  const { data: applications, isLoading, isError } = useMyApplications();

  return (
    <>
      <Navbar />
      {isLoading && <div className="p-6">Loading applications...</div>}
      {isError && <div className="p-6">Failed to load applications</div>}

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Track Your Applications</h1>
        {!applications ||
          (applications.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              You haven&apos;t applied to any jobs yet.
            </div>
          ))}

        {applications && applications.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-200 text-left border">
                <tr>
                  <th className="p-3 border">Job</th>
                  <th className="p-3 border">Company</th>
                  <th className="p-3 border">Location</th>
                  <th className="p-3 border">Applied On</th>
                  <th className="p-3 border">Status</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((app) => (
                  <tr key={app._id} className="border-t">
                    <td className="p-3 font-medium border">
                      {app.jobId?.title || "N/A"}
                    </td>

                    <td className="p-3 border">
                      {app.jobId?.companyId?.name || "N/A"}
                    </td>

                    <td className="p-3 border ">
                      {app.jobId?.location || "N/A"}
                    </td>

                    <td className="p-3 border">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>

                    <td className="p-3 border">
                      <StatusBadge status={app.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;

const StatusBadge = ({ status }: { status: string }) => {
  const base = "px-2 py-1 rounded text-sm font-medium";

  switch (status) {
    case "pending":
      return (
        <span className={`${base} bg-yellow-100 text-yellow-700`}>Pending</span>
      );
    case "reviewed":
      return (
        <span className={`${base} bg-blue-100 text-blue-700`}>Reviewed</span>
      );
    case "shortlisted":
      return (
        <span className={`${base} bg-purple-100 text-purple-700`}>
          Shortlisted
        </span>
      );
    case "accepted":
      return (
        <span className={`${base} bg-green-100 text-green-700`}>Accepted</span>
      );
    case "rejected":
      return (
        <span className={`${base} bg-red-100 text-red-700`}>Rejected</span>
      );
    default:
      return <span className={`${base} bg-gray-100`}>{status}</span>;
  }
};
