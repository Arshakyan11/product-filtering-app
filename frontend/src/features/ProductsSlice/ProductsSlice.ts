import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type {
  FiltersType,
  PaginationType,
  ProductsParamsType,
  ProductsType,
} from "../../types/dataTypes";
import { getFiltersThunk, getProductsThunk } from "../api/api";

type ProductsState = {
  items: ProductsType[];
  filters: FiltersType | null;
  params: ProductsParamsType;
  loading: boolean;
  filtersLoading: boolean;
  error: string | null;
  filtersError: string | null;
  pagination: PaginationType | null;
};

const initialState: ProductsState = {
  items: [],
  filters: null,
  params: {
    page: 1,
    limit: 9,
  },
  error: null,
  loading: false,
  filtersLoading: false,
  filtersError: null,
  pagination: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setParams(state, action) {
      state.params = {
        ...state.params,
        ...action.payload,
        page: 1,
      };
    },
    setPage(state, action) {
      state.params.page = action.payload;
    },
    resetParams(state) {
      state.params = {
        category: undefined,
        brand: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        minRating: undefined,
        limit: 9,
        page: 1,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.items = [];
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? "Something Went Wrong while getting products!!";
      })

      //for Filters
      .addCase(getFiltersThunk.pending, (state) => {
        state.filtersLoading = false;
        state.filtersError = null;
      })
      .addCase(getFiltersThunk.fulfilled, (state, action) => {
        state.filtersLoading = false;
        state.filters = action.payload;
      })
      .addCase(getFiltersThunk.rejected, (state, action) => {
        state.filtersLoading = false;
        state.filtersError =
          action.payload ?? "Something Went Wrong while getting filters";
      });
  },
});

export default ProductsSlice.reducer;
export const { setParams, setPage, resetParams } = ProductsSlice.actions;
export const getAllProductsInfo = (state: RootState) => state.products;
