import { configureStore } from "@reduxjs/toolkit";
import urlSlicer from './urls'
import service from "./services"
import width from './width'
import searchVal from './search'
export const store = configureStore({
  reducer: {
    urlSlicer,
    service,
    width,
    searchVal,
  },
});
