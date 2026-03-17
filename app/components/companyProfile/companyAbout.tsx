import React from "react";

const CompanyAbout = (data: any) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        {data.data.description}
      </p>

      <div>
        <h3 className="font-semibold text-lg">Industry</h3>
        <p className="text-gray-600">{data.data.Industry}</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Company Size</h3>
        <p className="text-gray-600">{data.data.size} Employees</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Website</h3>
        <p className="text-blue-600">{data.data.website}</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Email:</h3>
        <p className="text-blue-600">{data.data.contactEmail}</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Phone number:</h3>
        <p className="text-blue-600">{data.data.contactPhone}</p>
      </div>
    </div>
  );
};

export default CompanyAbout;
