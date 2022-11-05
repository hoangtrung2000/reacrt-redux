import PhotoReducer from "features/Photo/photoSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  photos: PhotoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
