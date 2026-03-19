import { useQuery } from "@tanstack/react-query";
import { getSuggestions } from "@/api/searchApi";

export const useSearchSuggestions = (
  query: string,
  type: "job" | "location"
) => {
  return useQuery({
    queryKey: ["searchSuggestions", query, type],
    queryFn: () => getSuggestions(query, type),
    enabled: query.length >= 2,
    staleTime: 1000 * 60 * 5,
  });
};