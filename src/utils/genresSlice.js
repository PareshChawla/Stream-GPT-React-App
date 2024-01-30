import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: [],
  reducers: {
    setGenres: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;
export default genresSlice.reducer;
