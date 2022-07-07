import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "../slices/cartSlice";
import { bookReducers } from "../slices/bookSlice";
import { ordersReducers } from "../slices/ordersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducers,
    books: bookReducers,
    orders: ordersReducers,
  },
});
