import { configureStore } from "@reduxjs/toolkit";
import urlSlicer from './urls'
import service from "./services"

export const store = configureStore({
  reducer: {
    urlSlicer,
    service
  },
});
