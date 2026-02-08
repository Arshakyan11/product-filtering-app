export type FiltersType = {
  categories: string[];
  brands: string[];
  priceRange: {
    min: number;
    max: number;
  };
  ratingRange: {
    min: number;
    max: number;
  };
};

export type ProductsParamsType = {
  page?: number;
  limit?: number;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
};

export type ProductsType = {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  imageUrl: string;
};

export type PaginationType = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type ProductsTypeWrapper = {
  data: ProductsType[];
  pagination: PaginationType;
};
