import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/app/types";

interface WishlistState {
  items: IProduct[];
}

const initialState: WishlistState = {
  items: [],
};

const loadState = (): WishlistState | undefined => {
  try {
    const serializedState = localStorage.getItem("wishlistState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Error loading state from localStorage", err);
    return undefined;
  }
};

const saveState = (state: WishlistState): void => {
  try {
    localStorage.setItem("wishlistState", JSON.stringify(state));
  } catch (err) {
    console.error("Error saving state to localStorage", err);
  }
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: loadState() || initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.items.push(action.payload);
      }

      saveState(state);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveState(state);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;
export const selectWishlist = (state: { wishlist: WishlistState }) =>
  state.wishlist;
export default wishListSlice.reducer;
