import Image from "next/image";
import React from "react";
import userFallback from "../../../public/userFallback.png";
import { StarIcon } from "lucide-react";
import Link from "next/link";
type Company = {
  name: string;
  logo: string;
  employees: number;
  jobs: number;
  reviews: number;
  rating: number;
};

const CompanyCard: React.FC<Company> = ({
  name,
  logo,
  employees,
  jobs,
  reviews,
  rating,
}) => {
  const renderStars = (rating: number) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-yellow-400" : "text-gray-300"}
        >
          <StarIcon size={20} />
        </span>,
      );
    }

    return stars;
  };

  return (
    <Link className="border rounded-xl p-5 shadow-sm hover:shadow-md transition" href={`/allCompanies/${name}`}>
      <div className="flex items-center gap-3">
        <Image
          src={userFallback}
          alt={name}
          className="w-24 h-24 rounded-md object-contain"
          height={300}
          width={300}
        />

        <div>
          <h2 className="text-lg font-semibold">{name}</h2>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex gap-1">{renderStars(rating)}</div>
            <span className="text-gray-800 font-semibold">{rating}</span>
          </div>

          <div className="text-md font-normal text-gray-600 space-y-1 mb-3 flex gap-3">
            <p>
              {" "}
              Employees:{" "}
              <span className="font-semibold text-gray-700">
                {employees.toLocaleString()}
              </span>{" "}
            </p>{" "}
            |
            <p>
              Jobs: <span className="font-semibold text-gray-700">{jobs} </span>
            </p>{" "}
            |
            <p>
              {" "}
              Reviews:{" "}
              <span className="font-semibold text-gray-700">
                {reviews.toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
