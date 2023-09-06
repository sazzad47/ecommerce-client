import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [], quantity: 0, total: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items = [...action.payload.items];
      state.quantity = action.payload.quantity;
    },
    setTotal: (state, action) => {
      state.total = action.payload.total;
    },
  },
});
export const selectCart = (state) => state.cart;
export const { setCart, setTotal } = cartSlice.actions;
export default cartSlice.reducer;
