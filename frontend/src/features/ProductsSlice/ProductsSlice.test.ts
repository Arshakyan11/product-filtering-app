import { getProductsThunk } from "../api/api";
import reducer, { resetParams, setPage, setParams } from "./ProductsSlice";

describe("ProductSlice", () => {
  const usedState = {
    items: [],
    filters: null,
    params: { page: 1, limit: 9 },
    loading: false,
    filtersLoading: false,
    error: null,
    filtersError: null,
    pagination: null,
  };
  const payload = {
    data: [
      {
        id: 2,
        name: "Bluetooth Speaker",
        category: "Electronics",
        brand: "Brand B",
        price: 49.99,
        rating: 4.0,
        imageUrl: "https://picsum.photos/seed/2/300/200",
      },
    ],
    pagination: {
      page: 1,
      limit: 9,
      total: 1,
      totalPages: 1,
    },
  };
  const params = { page: 1, limit: 9 };

  it("need to return initial state", () => {
    const state = reducer(undefined, { type: "unknown" });
    expect(state.params.page).toBe(1);
    expect(state.filters).toBeNull();
    expect(state.items).toEqual([]);
  });

  it("reducer setParams and reset page to 1", () => {
    const state = reducer(
      { ...usedState, params: { page: 3, limit: 10 } },
      setParams({ category: "Clothing" }),
    );
    expect(state.params.category).toBe("Clothing");
    expect(state.params.page).toBe(1);
  });

  it("reducer setPage", () => {
    const state = reducer(usedState, setPage(2));
    expect(state.params.page).toBe(2);
  });

  it("reducer reset params", () => {
    const state = reducer(
      {
        ...usedState,
        params: {
          page: 5,
          limit: 9,
          category: "Clothing",
          brand: "Brand A",
        },
      },
      resetParams(),
    );
    expect(state.params.page).toBe(1);
    expect(state.params.category).toBeUndefined();
    expect(state.params.brand).toBeUndefined();
  });

  it("getProductsThunk.pending", () => {
    const state = reducer(undefined, getProductsThunk.pending("", params));
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it("getProductsThunk.fulfilled", () => {
    const state = reducer(
      undefined,
      getProductsThunk.fulfilled(payload, "", params),
    );
    expect(state.loading).toBe(false);
    expect(state.items).toHaveLength(1);
    expect(state.pagination).toEqual(payload.pagination);
  });
  it("getProductsThunk.rejected", () => {
    const state = reducer(
      undefined,
      getProductsThunk.rejected(null, "", params, "error"),
    );
    expect(state.loading).toBe(false);
    expect(state.error).toBeTruthy();
  });
});
