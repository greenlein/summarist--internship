import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    isLoading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.email = null;
      state.isLoading = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
