import React from "react";

const CompanyAbout = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        Google is a global technology company focused on search engine
        technology, artificial intelligence, cloud computing, and advertising
        platforms.
      </p>

      <div>
        <h3 className="font-semibold text-lg">Industry</h3>
        <p className="text-gray-600">Technology</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Company Size</h3>
        <p className="text-gray-600">10,000+ Employees</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Website</h3>
        <p className="text-blue-600">https://google.com</p>
      </div>
    </div>
  );
};

export default CompanyAbout;
