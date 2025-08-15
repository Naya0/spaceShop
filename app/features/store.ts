import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import { apiSlice } from "./products/productSlice";
import type { Cart } from "~/types/product.types";
import cartReducer from "./cart/cartSlise";

const loadState = (): Cart[] | undefined => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  preloadedState: {
    cart: {
      items: loadState() || [],
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

const saveState = (items: Cart[]) => {
  try {
    const serialized = JSON.stringify(items);
    localStorage.setItem('cart', serialized);
  } catch {}
};


store.subscribe(() => {
  saveState(store.getState().cart.items);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
