import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/user/userSlice";
import cartReducer from "./feature/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
