import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  user: any | null;
  company: any | null;
} // this is the type

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  company: null,
}; // initial stage

const authSlice = createSlice({
  name: "auth", // name of the slice
  initialState, // initial state
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.company = action.payload.company;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.company = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
