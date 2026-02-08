import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFiltersApi, getProductsApi } from "../../services/products.service";
import type {
  FiltersType,
  ProductsParamsType,
  ProductsTypeWrapper,
} from "../../types/dataTypes";

export const getProductsThunk = createAsyncThunk<
  ProductsTypeWrapper,
  ProductsParamsType,
  { rejectValue: string }
>("products/getProductsThunk", async (params, { rejectWithValue }) => {
  try {
    return await getProductsApi(params);
  } catch (error) {
    return rejectWithValue("Failed to get products list");
  }
});

export const getFiltersThunk = createAsyncThunk<
  FiltersType,
  void,
  { rejectValue: string }
>("products/getFiltersThunk", async (_, { rejectWithValue }) => {
  try {
    return await getFiltersApi();
  } catch (error) {
    return rejectWithValue("Failed to get filters list");
  }
});
