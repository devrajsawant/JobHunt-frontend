import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 items-center py-3 border-b bg-gray-200">
      <p className="text-3xl font-serif text-shadow-zinc-700 font-medium">
        JOB HUNT
      </p>
      <div className="flex gap-4 text-lg">
        <p>
          <Link href="/allJobs">Job</Link>
        </p>
        <p>
          <Link href="/allCompanies">Companies</Link>
        </p>
        <button className="border px-4 font-thin rounded-sm">Login</button>
        <button className="border px-4 bg-zinc-700 text-white font-thin rounded-sm">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
