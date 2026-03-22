"use client";

import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LoginRequiredModal from "./model/loginRequiredModel";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [employeeDropdownOpen, setEmployeeDropdownOpen] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const user = useSelector((state: RootState) => state.auth.user);
  const company = useSelector((state: RootState) => state.auth.company);
  const handleEmployerClick = () => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
      return;
    }

    setEmployeeDropdownOpen(!employeeDropdownOpen);
  };
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
            <button className="border px-4 font-thin rounded-sm">
              <Link href="/login">Login</Link>
            </button>

            <button className="border px-4 bg-zinc-700 text-white font-thin rounded-sm">
              <Link href="/register">Register</Link>
            </button>
          </>
        ) : (
          <div className="relative">
            {/* Avatar */}
            <button
              onClick={() => setOpen(!open)}
              className="bg-zinc-800 px-3 rounded-sm text-white flex items-center justify-center"
            >
              {user.name}
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-45 bg-white border rounded-lg shadow-md">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                >
                  Profile
                </Link>
                <Link
                  href="/profile/applications"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                >
                  My Applications
                </Link>

                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
                  <Link href="/logout">Logout</Link>
                </button>
              </div>
            )}
          </div>
        )}
          <div className="text-md font-thin">|</div>
        <div className="relative">
          {/* Avatar */}
          <button
            onClick={handleEmployerClick}
            className="bg-zinc-800 px-3 rounded-sm text-white flex items-center justify-center"
          >
            {company?.name || "For Employer"}{" "}
          </button>

          {/* Dropdown */}
          {employeeDropdownOpen && (
            <div>
              {company ? (
                <div className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-md">
                  <Link
                    href={`/companyProfile/${company.slug}/jobPosting`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Post A New Job Opening
                  </Link>

                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    <Link
                      href={`/companyProfile/${company.slug}`}
                      className="block hover:bg-gray-100"
                    >
                      Company Profile
                    </Link>
                  </button>
                </div>
              ) : (
                <div className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-md">
                  <Link
                    href="/registerCompany"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Register your company
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <LoginRequiredModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
};

export default Navbar;
