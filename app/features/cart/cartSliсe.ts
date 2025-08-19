import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartType } from "~/types/product.types";

interface CartState {
  items: CartType[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartFromStorage(state, action: PayloadAction<CartType[]>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<Omit<CartType, "quantity">>) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    decrementItem(state, action: PayloadAction<string>) {
      const existingItem = state.items.find((i) => i.id === action.payload);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  loadCartFromStorage,
  decrementItem,
} = cartSlice.actions;

export default cartSlice.reducer;
