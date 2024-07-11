import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "../features/unauth-features/ActionSlice";

export const store = configureStore({
  reducer: {
    action: actionReducer,
  },
});
