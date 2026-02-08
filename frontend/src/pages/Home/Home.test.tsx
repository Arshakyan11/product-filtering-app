import { scrolTo } from "../../helpers/scrollToTop";
import { renderWithRealStore } from "../../test/renderWithRealStore";
import Home from "./Home";
import { screen } from "@testing-library/react";

vi.mock("../../features/api/api", () => {
  const getFiltersThunk = vi.fn(() => ({
    type: "getFiltersThunk/pending",
  })) as any;

  getFiltersThunk.pending = { type: "getFiltersThunk/pending" };
  getFiltersThunk.fulfilled = { type: "getFiltersThunk/fulfilled" };
  getFiltersThunk.rejected = { type: "getFiltersThunk/rejected" };

  const getProductsThunk = vi.fn(() => ({
    type: "getProductsThunk/pending",
  })) as any;

  getProductsThunk.pending = { type: "getProductsThunk/pending" };
  getProductsThunk.fulfilled = { type: "getProductsThunk/fulfilled" };
  getProductsThunk.rejected = { type: "getProductsThunk/rejected" };

  return {
    getFiltersThunk,
    getProductsThunk,
  };
});

vi.mock("../../helpers/scrollToTop", () => ({
  scrolTo: vi.fn(),
}));

vi.mock("../../components/Products/Products", () => ({
  default: () => <div data-testid="products" />,
}));

describe("Home Page", () => {
  it("renders without crashing", () => {
    renderWithRealStore(<Home />);
  });

  it("scrolls to top on mount", () => {
    renderWithRealStore(<Home />);
    expect(scrolTo).toHaveBeenCalled();
  });

  it("renders Products component", () => {
    renderWithRealStore(<Home />);
    expect(screen.getByTestId("products")).toBeInTheDocument();
  });
});
