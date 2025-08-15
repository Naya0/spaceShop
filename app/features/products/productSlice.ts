import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { BASE_API_URL } from "~/utils/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ id }) => `/products/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
