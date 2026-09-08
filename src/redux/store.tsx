import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice.tsx";
import authSlice from "./authSlice.tsx";

export const store = configureStore({
  reducer: {
    // Add your feature reducers here
    modal: modalSlice,
    auth: authSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
