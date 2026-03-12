import { StarIcon } from "lucide-react";
import React from "react";

const companyData = {
  name: "Google",
  industry: "Technology",
  employees: "10,000+",
  location: "Mountain View, California",
  rating: 4.5,
  description:
    "Google is a global technology company specializing in internet-related services and products including search, cloud computing, artificial intelligence, and advertising technologies.",
};

const FeedCompanyDetails = () => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < fullStars ? "text-yellow-500" : "text-gray-500"}>
          <StarIcon size={20}/>
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="p-6 space-y-3">
      {/* Company Name */}
      <h2 className="text-3xl font-bold">{companyData.name}</h2>

      {/* Industry */}
      <p className="text-md text-gray-700">
        <span className="font-semibold">Industry:</span> {companyData.industry}
      </p>

      {/* Employees */}
      <p className="text-md text-gray-700">
        <span className="font-semibold">Employees:</span> {companyData.employees}
      </p>

      {/* Location */}
      <p className="text-md text-gray-700">
        <span className="font-semibold">Headquarters:</span> {companyData.location}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 text-md">
        <span className="font-semibold">Reviews:</span>
        <div className="flex gap-1">{renderStars(companyData.rating)}</div>
        <span className="text-gray-500">({companyData.rating})</span>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 leading-relaxed pt-2">
        {companyData.description}
      </p>
    </div>
  );
};

export default FeedCompanyDetails;