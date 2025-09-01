import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import { apiSlice } from "./products/productSlice";
import userSlice from "./user/userSlice";
import cartReducer from "./cart/cartSliсe";
import type { CartType } from "~/types/product.types";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsSlice,
    categories: categoriesSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

store.subscribe(() => {
  try {
    const serialized = JSON.stringify(store.getState().cart.items);
    localStorage.setItem("cart", serialized);
  } catch {}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
