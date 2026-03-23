import FeedJobDetails from "@/app/components/globalFeed/feedJobDetails";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-[60%] mx-auto px-5 border-x h-[90vh]">
      <FeedJobDetails isSingleJobPage />;
      </div>
    </div>
  );
};

export default page;
