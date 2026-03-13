"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const isLoggedIn = true; // dummy variable for now
  const [open, setOpen] = useState(false);
  const [employeeDropdownOpen, setEmployeeDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between px-10 items-center py-3 border-b bg-gray-200">
      <p className="text-3xl font-serif font-medium">
        <Link href="/">JOB HUNT</Link>
      </p>

      <div className="flex gap-4 text-lg items-center">
        <p>
          <Link href="/feed">Job</Link>
        </p>

        <p>
          <Link href="/allCompanies">Companies</Link>
        </p>

        {!isLoggedIn ? (
          <>
            <button className="border px-4 font-thin rounded-sm">Login</button>

            <button className="border px-4 bg-zinc-700 text-white font-thin rounded-sm">
              Register
            </button>
          </>
        ) : (
          <div className="relative">
            {/* Avatar */}
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-zinc-700 text-white flex items-center justify-center"
            >
              U
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>

                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        <div className="relative">
          {/* Avatar */}
          <button
            onClick={() => setEmployeeDropdownOpen(!open)}
            className="bg-zinc-700 px-3 py-1 rounded-md text-white flex items-center justify-center"
          >
            For Employeer
          </button>

          {/* Dropdown */}
          {employeeDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-md">
              <Link
                href="/jobPosting"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Post A New Job Opening
              </Link>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                <Link
                  href="/companyProfile"
                  className="block hover:bg-gray-100"
                >
                  Company Profile
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
