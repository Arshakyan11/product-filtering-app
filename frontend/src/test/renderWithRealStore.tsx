import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import type { ReactElement } from "react";
import ProductsReducer from "../features/ProductsSlice/ProductsSlice";

type Options = {
  preloadedState?: {
    products: ReturnType<typeof ProductsReducer>;
  };
};

export const renderWithRealStore = (
  ui: ReactElement,
  { preloadedState }: Options = {},
) => {
  const store = configureStore({
    reducer: {
      products: ProductsReducer,
    },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>,
  );
};
