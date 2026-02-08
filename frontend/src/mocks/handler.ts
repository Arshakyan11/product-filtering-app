import { http, HttpResponse } from "msw";
import { PRELOADED_STATE } from "../mocksData/mocksData";
export const handler = [
  http.get(`${import.meta.env.VITE_API_BASE_URL}/products`, () => {
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: "Wireless Headphones",
          category: "Electronics",
          brand: "Brand A",
          price: 99.99,
          rating: 4.5,
          imageUrl: `https://picsum.photos/seed/1/300/200`,
        },
      ],
      pagination: {
        page: 1,
        limit: 9,
        total: 36,
        totalPages: 4,
      },
    });
  }),
  http.get(`${import.meta.env.VITE_API_BASE_URL}/filters`, () => {
    return HttpResponse.json(PRELOADED_STATE.products.filters);
  }),
];
