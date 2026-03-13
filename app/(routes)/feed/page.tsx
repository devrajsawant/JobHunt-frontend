import MainFeed from "@/app/components/globalFeed/mainFeed";
import GlobalFilters from "@/app/components/globalFilters";
import GlobalSearchBar from "@/app/components/GlobalSearchBar";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <GlobalSearchBar />
      <GlobalFilters />
      <MainFeed />
    </>
  );
}
