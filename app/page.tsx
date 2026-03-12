import GlobalSearchBar from "./components/GlobalSearchBar";
import MainFeed from "./components/globalFeed/mainFeed";
import GlobalFilters from "./components/globalFilters";
import Navbar from "./components/navbar";

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
