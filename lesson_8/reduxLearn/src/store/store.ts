import { configureStore } from "@reduxjs/toolkit";
import yourReducer from "./yourSlice";

export const store = configureStore({
  reducer: {
    yourSlice: yourReducer,
  },
});
