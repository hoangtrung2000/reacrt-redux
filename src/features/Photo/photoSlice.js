import { INITIAL_STATE_PHOTOS } from "constants/global";

const { createSlice } = require("@reduxjs/toolkit");

const photo = createSlice({
  name: "photos",
  initialState: INITIAL_STATE_PHOTOS,
  reducers: {
    addPhoto: (state, action) => {
      const newPhoto = action.payload;
      state.unshift(newPhoto);
    },
    removePhoto: (state, action) => {
      const idPhotoRemove = action.payload;
      // Do filter tao ra array moi nen phai return
      return (state = state.filter((photo) => photo.id !== idPhotoRemove));
    },
    updatePhoto: (state, action) => {
      const photoUpdated = action.payload;
      const indexPhoto = state.findIndex(
        (photo) => photo.id === photoUpdated.id
      );
      if (indexPhoto >= 0) {
        state[indexPhoto] = photoUpdated;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
