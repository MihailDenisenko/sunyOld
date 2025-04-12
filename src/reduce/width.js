/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: 0,
  searchShow: false,
};

const width = createSlice({
  name: "width",
  initialState,
  reducers: {
    setWidth: (state, action) =>{
      state.width = action.payload;
    },
    setSearchShow: (state, action) =>{
      state.searchShow = action.payload;
      console.log(state.searchShow)
    },
  },
});

export const { setWidth, setSearchShow } = width.actions;

export default width.reducer;
