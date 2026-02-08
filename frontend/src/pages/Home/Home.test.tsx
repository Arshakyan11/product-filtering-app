import { scrolTo } from "../../helpers/scrollToTop";
import { renderWithRealStore } from "../../test/renderWithRealStore";
import Home from "./Home";
import { screen } from "@testing-library/react";

vi.mock("../../helpers/scrollToTop", () => ({
  scrolTo: vi.fn(),
}));

describe("Home Page", () => {
  it("handle loading products from API and renders them", async () => {
    renderWithRealStore(<Home />);
    expect(await screen.findByText(/Wireless Headphones/i)).toBeInTheDocument();
  });

  it("scrolls to top on mount", () => {
    renderWithRealStore(<Home />);
    expect(scrolTo).toHaveBeenCalled();
  });
});
