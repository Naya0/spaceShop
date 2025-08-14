import { configureStore } from '@reduxjs/toolkit';

import productsSlice from './products/productsSlice'
import { useSelector } from 'react-redux';


export const store = configureStore({
  reducer: {
    products: productsSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

