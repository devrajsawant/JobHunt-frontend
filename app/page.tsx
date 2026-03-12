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
bg-[size:10px_10px]"
        />
        {/* Content */}
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-8xl font-bold font-serif tracking-tight text-gray-900">
            Find Your Next Job Faster
          </h1>

          <p className="mt-6 text-xl font-medium text-gray-600">
            Discover thousands of job opportunities from top companies. Search
            by role, location, and experience to find the perfect match for your
            career.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-4 py-1.5 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer">
              <Link href="/login">Get Started</Link>
            </button>

            <button className="px-4 py-1.5 border rounded-lg hover:bg-gray-100 transition cursor-pointer">
              <Link href="/feed">
              Browse Jobs
              </Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
