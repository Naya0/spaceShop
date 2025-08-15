import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "~/api/baseApi";
import type { Category } from "~/types/product.types";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/categories");
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

interface CategoriesList {
  list: Category[];
  isLoading: boolean;
}

const initialState: CategoriesList = {
  list: [],
  isLoading: true,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, {payload}) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
  reducers: {},
});

export default categoriesSlice.reducer;
