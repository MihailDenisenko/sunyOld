import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#53ccbd",
  homeUrl: `https://sunshint.spb.ru`,
  logo: "https://sunshint.spb.ru/img/logo.jpg",
  newUrl: "",
};

const urlSlicer = createSlice({
  name: "urlSlicer",
  initialState,
  reducers: {
    setNewUrl(state, action) {
      state.newUrl = action.payload }
  }
});

export const { setNewUrl } = urlSlicer.actions

export default urlSlicer.reducer