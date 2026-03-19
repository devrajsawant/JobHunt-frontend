import api from "./apiHelper";

export const getSuggestions = async (
  q: string,
  type: "job" | "location"
): Promise<string[]> => {
  const res = await api.get(`/search/suggestions`, {
    params: { q, type },
  });

  return res.data;
};