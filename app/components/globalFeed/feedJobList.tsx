import React from "react";

const FeedJobsList = () => {
  const jobs = Array.from({ length: 10 });

  return (
    <div className="p-4 space-y-3">
      {jobs.map((_, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
        >
          <h3 className="font-semibold">Frontend Developer</h3>
          <p className="text-sm text-gray-600">Google</p>
          <p className="text-sm text-gray-500">Remote • ₹12L - ₹18L</p>
        </div>
      ))}
    </div>
  );
};

export default FeedJobsList;
