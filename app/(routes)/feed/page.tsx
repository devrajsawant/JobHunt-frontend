import MainFeed from "@/app/components/globalFeed/mainFeed";
import GlobalFilters from "@/app/components/globalFilters";
import GlobalSearchBar from "@/app/components/GlobalSearchBar";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mb-2 border-b pb-2">
        <GlobalSearchBar />
        <GlobalFilters />
      </div>
      <MainFeed />
    </>
  );
}
