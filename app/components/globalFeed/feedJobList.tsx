"use client"
import { useSearchResults } from "@/hooks/useSearch";
import { useJobs } from "@/hooks/useJobs";
import { useAppSelector } from "@/store/hook";
import JobCard from "../common/jobCard";

const FeedJobsList = () => {
  const { position, location, experience } = useAppSelector(
    (state) => state.search,
  );

  const isSearching = position || location || experience;

  const { data: searchJobs, isLoading: searchLoading } = useSearchResults({
    position,
    location,
    experience,
  });

  const { data: defaultJobs, isLoading: defaultLoading, isError } = useJobs();

  const jobs = isSearching ? searchJobs : defaultJobs;
  const isLoading = isSearching ? searchLoading : defaultLoading;

  if (isLoading) return <div>Loading jobs...</div>;
  if (isError) return <div>Failed to load jobs.</div>;

  return (
    <div className="p-4 space-y-3">
      {jobs && jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job._id} job={job} />)
      ) : (
        <div>No jobs found</div>
      )}
    </div>
  );
};

export default FeedJobsList;
