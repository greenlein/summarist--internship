import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    value: "closed",
  },
  reducers: {
    login: (state) => {
      state.value = "login";
    },
    signup: (state) => {
      state.value = "signup";
    },
    forgotPassword: (state) => {
      state.value = "forgotPassword";
    },
    closed: (state) => {
      state.value = "closed";
    },
  },
});

export const { login, signup, forgotPassword, closed } = modalSlice.actions;
export default modalSlice.reducer;
