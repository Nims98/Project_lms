import { createSlice } from "@reduxjs/toolkit";
// import { apiCallBegan } from "../middleware/api";

const authSlice = createSlice({
  name: "auth",
  initialState: { authData: null },
  reducers: {
    auth: (auth, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      console.log(action.payload);
      return { ...auth, authData: action.payload };
    },
    logout: (auth, action) => {
      localStorage.clear();
      return { ...auth, authData: null };
    },
  },
});

export const { auth, logout } = authSlice.actions;

export default authSlice.reducer;

// Action Creators

// const url = "/users/signup";
