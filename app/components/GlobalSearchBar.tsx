const GlobalSearchBar = () => {
  return (
    <div className="w-full flex justify-center mt-6">
      <div className="flex items-center overflow-hidden gap-3">
        {/* Position */}
        <input
          type="text"
          placeholder="Job title, keywords..."
          className="px-4 py-2 w-md outline-none border rounded-md"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          className="px-4 py-2 w-56 outline-none border rounded-md"
        />

        {/* Experience */}
        <select className="px-4 py-2 w-56 outline-none border rounded-md bg-white">
          <option value="">Experience Level</option>
          <option value="intern">Fresher (&gt;1 year)</option>
          <option value="entry">Junior (1 - 3 years)</option>
          <option value="mid">Mid Level (3 - 5 years)</option>
          <option value="senior">Senior (5+ Years) </option>
        </select>

        {/* Search Button */}
        <button className="px-6 py-2 bg-zinc-600 text-white rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default GlobalSearchBar;
