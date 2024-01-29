import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
    removeGptMovieResult: (state) => {
        state.movieResults = null;
        state.movieNames = null;
    }
  },
});

export const { addGptMovieResult, removeGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
