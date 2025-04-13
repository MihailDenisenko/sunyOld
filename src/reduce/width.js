/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: 0,
  searchShow: false,
  showHelper: false,

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
    setShowHelper(state, action) {
      state.showHelper = action.payload
    }
  },
});

export const { setWidth, setSearchShow, setShowHelper } = width.actions;

export default width.reducer;
