import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: { books: [] },
  reducers: {
    loadBooks(state, action) {
      state.books = action.payload;
    },
  },
});

export const booksAction = bookSlice.actions;
export const bookReducers = bookSlice.reducer;
