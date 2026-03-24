"use client";

import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LoginRequiredModal from "./model/loginRequiredModel";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [employeeDropdownOpen, setEmployeeDropdownOpen] = useState(false);
  const [userAccordion, setUserAccordion] = useState(false);
  const [employerAccordion, setEmployerAccordion] = useState(false);

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
    <>
      <div className="flex justify-between px-6 md:px-10 items-center py-3 border-b bg-gray-200">
        {/* Logo */}
        <p className="text-2xl md:text-3xl font-serif font-medium">
          <Link href="/">JOB HUNT</Link>
        </p>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 text-lg items-center">
          <Link href="/feed">Job</Link>
          <Link href="/allCompanies">Companies</Link>

          {!isLoggedIn ? (
            <>
              <Link href="/login" className="border px-4 font-thin rounded-sm">
                Login
              </Link>
              <Link
                href="/register"
                className="border px-4 bg-zinc-700 text-white font-thin rounded-sm"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="bg-zinc-800 px-3 rounded-sm text-white"
              >
                {user.name}
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-45 bg-white border rounded-lg shadow-md">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/profile/applications"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Applications
                  </Link>
                  <Link
                    href="/logout"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}

          <div>|</div>

          {/* Employer Dropdown */}
          <div className="relative">
            <button
              onClick={handleEmployerClick}
              className="bg-zinc-800 px-3 rounded-sm text-white"
            >
              {company?.name || "For Employer"}
            </button>

            {employeeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-md">
                {company ? (
                  <>
                    <Link
                      href={`/companyProfile/${company.slug}/jobPosting`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Post Job
                    </Link>
                    <Link
                      href={`/companyProfile/${company.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Company Profile
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/registerCompany"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Register Company
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <p className="text-xl font-semibold">Menu</p>
          <button onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-4 gap-3">
          <Link href="/feed" onClick={() => setSidebarOpen(false)}>
            Job
          </Link>
          <Link href="/allCompanies" onClick={() => setSidebarOpen(false)}>
            Companies
          </Link>

          {!isLoggedIn ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          ) : (
            <>
              {/* User Accordion */}
              <button
                onClick={() => setUserAccordion(!userAccordion)}
                className="text-left font-medium flex items-center gap-2"
              >
                {user.name}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    userAccordion ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  userAccordion ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {userAccordion && (
                  <div className="ml-4 flex flex-col gap-2">
                    <Link href="/profile">Profile</Link>
                    <Link href="/profile/applications">My Applications</Link>
                    <Link href="/logout">Logout</Link>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Employer Accordion */}
          <button
            onClick={() => {
              if (!isLoggedIn) {
                setLoginModalOpen(true);
                return;
              }
              setEmployerAccordion(!employerAccordion);
            }}
            className="text-left font-medium mt-2 flex items-center gap-3"
          >
            {company?.name || "For Employer"}
            <ChevronDown
            size={20}
              className={`transition-transform duration-300 ${
                employerAccordion ? "rotate-180" : ""
              }`}
            />
          </button>

          {employerAccordion && (
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                employerAccordion ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 flex flex-col gap-2">
                {company ? (
                  <>
                    <Link href={`/companyProfile/${company.slug}/jobPosting`}>
                      Post Job
                    </Link>
                    <Link href={`/companyProfile/${company.slug}`}>
                      Company Profile
                    </Link>
                  </>
                ) : (
                  <Link href="/registerCompany">Register Company</Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <LoginRequiredModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
