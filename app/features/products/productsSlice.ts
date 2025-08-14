import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "~/api/baseApi";
import type { Product } from "~/types/product.types";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/planets?min_mass=0");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

interface ProductsList {
  list: Product[];
  isLoading: boolean;
}

const initialState: ProductsList = {
  list: [],
  isLoading: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, {payload}) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
  reducers: {},
});

export default productsSlice.reducer;
