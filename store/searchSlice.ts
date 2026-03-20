import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: "",
  location: "",
  experience: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchFilters: (state, action) => {
      state.position = action.payload.position || "";
      state.location = action.payload.location || "";
      state.experience = action.payload.experience || "";
    },
    clearSearchFilters: (state) => {
      state.position = "";
      state.location = "";
      state.experience = "";
    },
  },
});

export const { setSearchFilters, clearSearchFilters } =
  searchSlice.actions;

export default searchSlice.reducer;