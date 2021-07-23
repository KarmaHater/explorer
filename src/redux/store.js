import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "./topicsSlice";

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
  },
});
