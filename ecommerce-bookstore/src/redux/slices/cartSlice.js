import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    books: [],
    totalBooks: 0,
    totalPrice: 0,
  },
  reducers: {
    addBook(state, action) {
      const newBook = action.payload;
      state.totalBooks = state.totalBooks + 1;
      state.totalPrice += newBook.price;
      const alreadyexistingbook = state.books.find((book) => {
        return book.id === newBook.id;
      });
      if (alreadyexistingbook) {
        alreadyexistingbook.quantity++;
      } else {
        state.books.push(newBook);
      }
    },

    removeBook(state, action) {
      const id = action.payload;
      state.totalBooks = state.totalBooks - 1;

      const alreadyexistingbook = state.books.find((book) => {
        return book.id === id;
      });
      if (alreadyexistingbook.quantity === 1) {
        state.books = state.books.filter((book) => {
          return book.id !== id;
        });
      } else {
        alreadyexistingbook.quantity--;
      }
      state.totalPrice = state.totalPrice - alreadyexistingbook.price;
    },
    
    emptyCart(state) {
      state.books = [];
      state.totalBooks = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartReducers = cartSlice.reducer;
export const cartActions = cartSlice.actions;
