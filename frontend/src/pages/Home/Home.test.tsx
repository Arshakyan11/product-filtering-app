import { getFiltersThunk, getProductsThunk } from "../../features/api/api";
import { scrolTo } from "../../helpers/scrollToTop";
import { renderWithRealStore } from "../../test/renderWithRealStore";
import Home from "./Home";
import { screen } from "@testing-library/react";

vi.mock("../../features/api/api.ts", () => ({
  getFiltersThunk: vi.fn(() => ({
    type: "getFiltersThunk",
  })),
  getProductsThunk: vi.fn(() => ({
    type: "getProductsThunk",
  })),
}));

vi.mock("../../helpers/scrollToTop", () => ({
  scrolTo: vi.fn(),
}));

vi.mock("../../components/Products/Products", () => ({
  default: () => <div data-testid="products" />,
}));

describe("Home Page", () => {
  it("dispatches getFiltersThunk on mount", () => {
    renderWithRealStore(<Home />);
    expect(getFiltersThunk).toHaveBeenCalledTimes(1);
  });
  it("dispatches getProductsThunk with params and calls scrollTo", () => {
    renderWithRealStore(<Home />);
    expect(getProductsThunk).toHaveBeenCalled();
    expect(scrolTo).toHaveBeenCalled();
  });
  it("renders Products component", () => {
    renderWithRealStore(<Home />);
    expect(screen.getByTestId("products")).toBeInTheDocument();
  });
});
