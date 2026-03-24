import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex pt-[20vh] justify-center overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 -z-10 
bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)]
bg-[size:12px_12px] md:bg-[size:16px_16px]"
        />

        {/* Content */}
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif tracking-tight text-gray-900 leading-tight">
            Find Your Next Job Faster
          </h1>

          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl font-medium text-gray-600">
            Discover thousands of job opportunities from top companies. Search
            by role, location, and experience to find the perfect match for your
            career.
          </p>

          <div className="mt-6 md:mt-8 flex flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/login"
              className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Get Started
            </Link>

            <Link
              href="/feed"
              className="px-5 py-2 border rounded-lg hover:bg-gray-100 transition text-sm sm:text-base"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
