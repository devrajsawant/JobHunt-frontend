import React from "react";

const reviews = [
  {
    name: "John Doe",
    rating: 4,
    comment: "Great company culture and learning opportunities.",
  },
  {
    name: "Jane Smith",
    rating: 5,
    comment: "Amazing work environment.",
  },
];

const CompanyReviews = () => {
  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <div className="flex justify-between">
            <h3 className="font-semibold">{review.name}</h3>
            <span className="text-yellow-500">
              {"⭐".repeat(review.rating)}
            </span>
          </div>

          <p className="text-gray-600 mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyReviews;
