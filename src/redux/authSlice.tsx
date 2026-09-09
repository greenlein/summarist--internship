import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    uid: "",
    email: null,
    subscription: "basic",
    isLoading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.subscription = "basic";
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.uid = "";
      state.email = null;
      state.subscription = "basic";
      state.isLoading = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
