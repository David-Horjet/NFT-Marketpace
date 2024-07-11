import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidenav: false,
};

const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    toggleSidenav(state, action) {
      state.sidenav = action.payload;
    }
  },
});

export const { toggleSidenav } = actionSlice.actions;
export default actionSlice.reducer;
