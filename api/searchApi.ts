import api from "./apiHelper";

export const getSuggestions = async (
  q: string,
  type: "job" | "location",
): Promise<string[]> => {
  const res = await api.get(`/search/suggestions`, {
    params: { q, type },
  });

  return res.data;
};

export const getSearchResults = async ({
  position,
  location,
  experience,
}: {
  position?: string;
  location?: string;
  experience?: string;
}) => {
  const res = await api.get("/search/results", {
    params: { position, location, experience },
  });

  return res.data;
};
