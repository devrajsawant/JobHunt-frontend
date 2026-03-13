'use client'
import React, { useState } from "react";

const companies: string[] = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Apple",
  "Adobe",
  "Uber",
  "Airbnb",
  "Spotify",
];

const CompaniesSearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFiltered([]);
      setShowDropdown(false);
      return;
    }

    const results = companies.filter((company) =>
      company.toLowerCase().includes(value.toLowerCase()),
    );

    setFiltered(results);
    setShowDropdown(true);
  };

  const handleSearch = () => {
    if (!query) return;

    console.log("Searching for:", query);
    setShowDropdown(false);
  };

  const handleSelect = (company: string) => {
    setQuery(company);
    setShowDropdown(false);

    console.log("Searching for:", company);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-3xl relative">
      {/* Search Input */}
      <div className="flex border rounded-lg overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search companies..."
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="flex-1 px-4 py-2 outline-none"
        />

        <button
          onClick={handleSearch}
          className="bg-black text-white px-5 hover:bg-gray-800"
        >
          Search
        </button>
      </div>

      {/* Dropdown */}
      {showDropdown && filtered.length > 0 && (
        <div className="absolute w-full bg-white border mt-1 rounded-lg shadow-md z-10">
          {filtered.map((company, index) => (
            <div
              key={index}
              onClick={() => handleSelect(company)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {company}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompaniesSearchBar;
