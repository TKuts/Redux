import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
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
    resetFilteres: (state) => {
      return initialState;
    },
  },
});

export const { setTitleFilter, setAuthorFillter, resetFilteres } =
  filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
