export const PAGE_SIZES = [
  { max: 425, size: 4 },
  { max: 628, size: 6 },
  { max: 925, size: 8 },
];

export const MAX_VISIBLE_PAGES = 5;

export const PRELOADED_STATE = {
  products: {
    items: [],
    filters: {
      categories: ["Electronics", "Footwear", "Clothing"],
      brands: ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"],
      priceRange: { min: 0, max: 1000 },
      ratingRange: { min: 1, max: 5 },
    },
    params: {},
    pagination: { page: 1, limit: 10, total: 30, totalPages: 3 },
    loading: false,
    filtersLoading: false,
    error: null,
    filtersError: null,
  },
};
