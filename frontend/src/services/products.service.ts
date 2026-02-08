import { apiProducts } from "./instance";

export const getProductsApi = async (params: Record<string, any>) => {
  const res = await apiProducts.get("/products", { params });
  return res.data;
};

export const getFiltersApi = async () => {
  const res = await apiProducts.get("/filters");
  return res.data;
};
