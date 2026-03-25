import Image from "next/image";
import React from "react";
import noResultsFound from "../../../public/vectorIllustrations/no-results-found.svg";
const NoResultsFound = () => {
  return (
    <div className="text-center flex justify-center items-center h-full mx-auto mt-10">
      <div>
        <Image
          src={noResultsFound}
          alt="Auth Page Svg"
          height={600}
          width={600}
          className="mx-auto mt-8 mb-8"
        />
        <p>No Results Found</p>
      </div>
    </div>
  );
};

export default NoResultsFound;
