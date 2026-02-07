import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {},
});

export default ProductsSlice.reducer;
export const getAllProductsInfo = (state: RootState) => state.products;
