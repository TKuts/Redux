import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorit: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // You can mutate state thenks to Immer library
      state.title = action.payload;
      // You can also return new state as usually
      // return {
      //   ...state,
      //   title: action.payload,
      // };
    },
    setAuthorFillter: (state, action) => {
      state.author = action.payload;
    },
    setOnlyFavoritFilter: (state) => {
      state.onlyFavorit = !state.onlyFavorit;
    },
    resetFilteres: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFillter,
  setOnlyFavoritFilter,
  resetFilteres,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavorit = (state) => state.filter.onlyFavorit;

export default filterSlice.reducer;
