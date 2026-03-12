"use client";
import React, { useState } from "react";
type FilterKey = "workmode" | "salary" | "education" | "freshness";
type SelectedFilters = Partial<Record<FilterKey, string>>;

const filterOptions: Record<FilterKey, string[]> = {
  workmode: ["Remote", "Hybrid", "Onsite"],
  salary: ["3-5 LPA", "5-10 LPA", "10-20 LPA", "20+ LPA"],
  education: ["Bachelors", "Masters", "PhD", "Diploma"],
  freshness: ['Past 24 hours','4 days ago', '1 week ago', '1 month ago'],
};

const GlobalFilters: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  const handleChange = (filter: FilterKey, value: string) => {
    if (!value) return;

    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const removeFilter = (filter: FilterKey) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      delete updated[filter];
      return updated;
    });
  };

  return (
    <div>
      {/* Filter Row */}
      <div className="flex gap-4 py-4 justify-center items-center">
        {(Object.keys(filterOptions) as FilterKey[]).map((filter) => (
          <select
            key={filter}
            value={selectedFilters[filter] || ""}
            onChange={(e) => handleChange(filter, e.target.value)}
            className="border px-2 py-1 rounded-md appearance-none"
          >
            <option value="">
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </option>

            {filterOptions[filter].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ))}
      </div>

      {/* Selected Filter Chips */}
      <div className="w-fit mx-auto flex gap-2">
        {(Object.entries(selectedFilters) as [FilterKey, string][]).map(
          ([filter, value]) => (
            <div
              key={filter}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 10px",
                border: "1px solid #ccc",
                borderRadius: "20px",
                fontSize: "14px",
                background: "#f5f5f5",
              }}
            >
              {filter}: {value}
              <span
                onClick={() => removeFilter(filter)}
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                ×
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default GlobalFilters;
