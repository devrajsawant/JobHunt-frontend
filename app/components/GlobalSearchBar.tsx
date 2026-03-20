"use client";

import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchSuggestions } from "@/hooks/useSearch";
import { useAppDispatch } from "@/store/hook";
import { setSearchFilters } from "@/store/searchSlice";
import { useRouter, useSearchParams } from "next/navigation";

const GlobalSearchBar = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [showExpDropdown, setShowExpDropdown] = useState(false);
  const [showJobDropdown, setShowJobDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const searchParams = useSearchParams();

  const debouncedQuery = useDebounce(query, 300);
  const debouncedLocation = useDebounce(location, 300);

  const { data: jobSuggestions = [] } = useSearchSuggestions(
    debouncedQuery,
    "job",
  );

  const { data: locationSuggestions = [] } = useSearchSuggestions(
    debouncedLocation,
    "location",
  );

  const EXPERIENCE_OPTIONS = [
    { label: "Fresher (<1 year)", value: "intern" },
    { label: "Junior (1 - 3 years)", value: "entry" },
    { label: "Mid Level (3 - 5 years)", value: "mid" },
    { label: "Senior (5+ Years)", value: "senior" },
  ];

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="flex items-center gap-3">
        {/* Job Input */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onFocus={() => setShowJobDropdown(true)}
            onBlur={() => setTimeout(() => setShowJobDropdown(false), 150)}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Job title, keywords..."
            className="px-4 py-2 w-md outline-none border rounded-md bg-white"
          />

          {showJobDropdown && jobSuggestions.length > 0 && (
            <div className="absolute w-full bg-white border mt-1 rounded-md shadow z-10">
              {jobSuggestions.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setQuery(item);
                    setShowJobDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location Input */}
        <div className="relative">
          <input
            type="text"
            value={location}
            onFocus={() => setShowLocationDropdown(true)}
            onBlur={() => setTimeout(() => setShowLocationDropdown(false), 150)}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="px-4 py-2 w-56 outline-none border rounded-md bg-white"
          />

          {showLocationDropdown && locationSuggestions.length > 0 && (
            <div className="absolute w-full bg-white border mt-1 rounded-md shadow z-10">
              {locationSuggestions.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setLocation(item);
                    setShowLocationDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Experience */}
        <div className="relative">
          <div
            onClick={() => setShowExpDropdown((prev) => !prev)}
            className="px-4 py-2 w-56 border rounded-md bg-white cursor-pointer"
          >
            {experience
              ? EXPERIENCE_OPTIONS.find((e) => e.value === experience)?.label
              : "Experience Level"}
          </div>

          {showExpDropdown && (
            <div className="absolute w-full bg-white border mt-1 rounded-md shadow z-10">
              {EXPERIENCE_OPTIONS.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setExperience((prev) =>
                      prev === item.value ? "" : item.value,
                    );
                    setShowExpDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          className="px-6 py-2 bg-zinc-600 text-white rounded-md"
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());

            // Remove unwanted params
            params.delete("jobId");
            params.delete("companyId");

            router.push(`?${params.toString()}`);

            // Dispatch filters
            dispatch(
              setSearchFilters({
                position: query,
                location,
                experience,
              }),
            );
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GlobalSearchBar;
