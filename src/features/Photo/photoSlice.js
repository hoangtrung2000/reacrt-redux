const { createSlice } = require("@reduxjs/toolkit");

const photo = createSlice({
  name: "photos",
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      const newPhoto = action.payload;
      state.push(newPhoto);
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer;
