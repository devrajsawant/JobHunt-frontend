"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useSearchSuggestions } from "@/hooks/useSearch";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const GlobalSearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("position") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [experience, setExperience] = useState(
    searchParams.get("experience") || "",
  );

  const [showExpDropdown, setShowExpDropdown] = useState(false);
  const [showJobDropdown, setShowJobDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

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
    <div className="w-full flex justify-center mt-6 px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-3">
        {/* Job Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onFocus={() => setShowJobDropdown(true)}
            onBlur={() => setTimeout(() => setShowJobDropdown(false), 150)}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Job title, keywords..."
            className="w-full px-4 py-2 border rounded-md bg-white outline-none"
          />

          {showJobDropdown && jobSuggestions.length > 0 && (
            <div className="absolute w-full bg-white border mt-1 rounded-md shadow z-10 max-h-60 overflow-y-auto">
              {jobSuggestions.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setQuery(item);
                    setShowJobDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location */}
        <div className="relative flex-1">
          <input
            type="text"
            value={location}
            onFocus={() => setShowLocationDropdown(true)}
            onBlur={() => setTimeout(() => setShowLocationDropdown(false), 150)}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full px-4 py-2 border rounded-md bg-white outline-none"
          />

          {showLocationDropdown && locationSuggestions.length > 0 && (
            <div className="absolute w-full bg-white border mt-1 rounded-md shadow z-10 max-h-60 overflow-y-auto">
              {locationSuggestions.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setLocation(item);
                    setShowLocationDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Experience */}
        <div className="relative flex-1">
          <div
            onClick={() => setShowExpDropdown((prev) => !prev)}
            className="w-full px-4 py-2 border rounded-md bg-white cursor-pointer"
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
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Button */}
        <button
          className="w-full md:w-auto px-6 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700 transition"
          onClick={() => {
            const params = new URLSearchParams();

            if (query) params.set("position", query);
            if (location) params.set("location", location);
            if (experience) params.set("experience", experience);

            router.push(`?${params.toString()}`);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GlobalSearchBar;
