import { useQuery } from "@tanstack/react-query";
import { getSearchResults, getSuggestions } from "@/api/searchApi";

export const useSearchSuggestions = (
  query: string,
  type: "job" | "location",
) => {
  return useQuery({
    queryKey: ["searchSuggestions", query, type],
    queryFn: () => getSuggestions(query, type),
    enabled: query.length >= 2,
    staleTime: 1000 * 60 * 5,
  });
};

export const useSearchResults = (filters: {
  position?: string;
  location?: string;
  experience?: string;
  jobType?: string;
  salary?: string;
  workMode?: string;
}) => {
  return useQuery({
    queryKey: ["search-results", filters],
    queryFn: () => getSearchResults(filters),
    enabled: Object.values(filters).some(Boolean),
  });
};
