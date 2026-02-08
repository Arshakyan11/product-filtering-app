import { screen } from "@testing-library/react";
import Products from "./Products";
import { renderWithRealStore } from "../../test/renderWithRealStore";
import { PRELOADED_STATE } from "../../mocksData/mocksData";

vi.mock("../Pagination/Pagination.tsx", () => ({
  default: () => <div data-testid="pagination" />,
}));

vi.mock("../../components/Filters/Filters.tsx", () => ({
  default: () => <div data-testid="filters" />,
}));

describe("Products", () => {
  const renderWithState = () =>
    renderWithRealStore(<Products />, {
      preloadedState: {
        ...PRELOADED_STATE,
        products: {
          ...PRELOADED_STATE.products,
          params: {
            category: "Footwear",
            brand: "Brand E",
          },
          items: [
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
        },
      },
    });
  it("renders Pagination  component successfully", () => {
    renderWithState();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
  it("renders Filters component successfully", () => {
    renderWithRealStore(<Products />);
    expect(screen.getByTestId("filters")).toBeInTheDocument();
  });
  it("items count is  0", async () => {
    renderWithRealStore(<Products />, {
      preloadedState: {
        ...PRELOADED_STATE,
        products: {
          ...PRELOADED_STATE.products,
          params: {
            category: "Footwear",
            brand: "Brand E",
          },
        },
      },
    });
    expect(
      await screen.findByText(/No Item avaliable with these filters/i),
    ).toBeInTheDocument();
  });
  it("items count is more than 0", async () => {
    renderWithState();
    expect(screen.getByLabelText(/Each Product/i)).toBeInTheDocument();
  });
});
