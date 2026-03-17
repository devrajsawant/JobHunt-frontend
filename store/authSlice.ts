import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  user: any | null;
  company: any | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  company: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
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
