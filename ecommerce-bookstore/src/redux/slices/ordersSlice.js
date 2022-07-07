import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: { orders: [] },
  reducers: {
    addOrders(state, action) {
      state.orders = [...state.orders, ...action.payload];
    },
  },
});

export const ordersReducers = orderSlice.reducer;
export const ordersAction = orderSlice.actions;
