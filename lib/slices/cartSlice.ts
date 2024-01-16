import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "@/app/types";

interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

const loadState = (): CartState | undefined => {
  try {
    const serializedState = localStorage.getItem("cartState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Error loading state from localStorage", err);
    return undefined;
  }
};

const saveState = (state: CartState): void => {
  try {
    localStorage.setItem("cartState", JSON.stringify(state));
  } catch (err) {
    console.error("Error saving state to localStorage", err);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState() || initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const { id, title } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.title === title
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      saveState(state);
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const { id, title } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.title === title)
      );
      saveState(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; title: string; quantity: number }>
    ) => {
      const { id, title, quantity } = action.payload;
      const itemToUpdate = state.items.find(
        (item) => item.id === id && item.title === title
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;

        // Remove the item if the resulting quantity is zero
        if (quantity === 0) {
          state.items = state.items.filter(
            (item) => !(item.id === id && item.title === title)
          );
        }
      }

      saveState(state);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const selectCart = (state: { cart: CartState }) => state.cart;
export default cartSlice.reducer;
