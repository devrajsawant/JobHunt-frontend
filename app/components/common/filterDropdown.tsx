"use client";

import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  placeholder: string;
  options: Option[];
  value: string;
  onChange: (val: string) => void;
};

const FilterDropdown = ({ placeholder, options, value, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative sm:w-40">
      {/* Trigger */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-2 border rounded-md bg-white cursor-pointer truncate"
      >
        {value ? options.find((o) => o.value === value)?.label : placeholder}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute w-28 bg-white border mt-1 rounded-md shadow z-10">
          {options.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(item.value);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md" 
            >
              {item.label}
            </div>
          ))}

          {/* Clear Option */}
          <div
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer rounded-md"
          >
            Clear selection
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
