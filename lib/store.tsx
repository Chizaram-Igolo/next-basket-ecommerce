// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlist from "./slices/wishListSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlist,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
