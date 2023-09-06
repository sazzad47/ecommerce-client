import userReducer from "../Features/Users/state";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/Cart/state";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
