import React from "react";
import FeedJobsList from "./feedJobList";
import FeedJobDetails from "./feedJobDetails";
import FeedCompanyDetails from "./feedCompanyDetails";
const MainFeed = () => {
  return (
    <div className="grid grid-cols-12 h-[70vh] px-24">
      {/* Jobs List */}
      <div className="col-span-4 border-r overflow-y-auto">
        <FeedJobsList />
      </div>

      {/* Job Details */}
      <div className="col-span-5 border-r overflow-y-auto">
        <FeedJobDetails />
      </div>

      {/* Company Details */}
      <div className="col-span-3 overflow-y-auto">
        <FeedCompanyDetails />
      </div>
    </div>
  );
};

export default MainFeed;
