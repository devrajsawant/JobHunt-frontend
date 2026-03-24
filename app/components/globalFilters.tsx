"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FilterDropdown from "./common/filterDropdown";

const FiltersBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ read from URL (source of truth)
  const jobType = searchParams.get("jobType") || "";
  const salary = searchParams.get("salary") || "";
  const workMode = searchParams.get("workMode") || "";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key); // clear selection
    }

    router.push(`?${params.toString()}`);
  };

  const JOB_TYPE_OPTIONS = [
    { label: "Full Time", value: "fulltime" },
    { label: "Part Time", value: "parttime" },
    { label: "Internship", value: "internship" },
  ];

  const SALARY_OPTIONS = [
    { label: "0 - 5 LPA", value: "0-5" },
    { label: "5 - 10 LPA", value: "5-10" },
    { label: "10+ LPA", value: "10+" },
  ];

  const REMOTE_OPTIONS = [
    { label: "Remote", value: "remote" },
    { label: "On-site", value: "onsite" },
    { label: "Hybrid", value: "hybrid" },
  ];

  return (
    <div className="flex gap-1 sm:gap-4 mt-4 justify-center ">
      <FilterDropdown
        placeholder="Job Type"
        options={JOB_TYPE_OPTIONS}
        value={jobType}
        onChange={(val) => updateParam("jobType", val)}
      />

      <FilterDropdown
        placeholder="Salary"
        options={SALARY_OPTIONS}
        value={salary}
        onChange={(val) => updateParam("salary", val)}
      />

      <FilterDropdown
        placeholder="Work Mode"
        options={REMOTE_OPTIONS}
        value={workMode}
        onChange={(val) => updateParam("workMode", val)}
      />
    </div>
  );
};

export default FiltersBar;
