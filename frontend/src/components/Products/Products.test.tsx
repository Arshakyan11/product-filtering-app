import { screen } from "@testing-library/react";
import Products from "./Products";
import { renderWithRealStore } from "../../test/renderWithRealStore";
import { PRELOADED_STATE } from "../../mocksData/mocksData";
import { Home } from "../../pages";

vi.mock("../Pagination/Pagination.tsx", () => ({
  default: () => <div data-testid="pagination" />,
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
  it("loads filters from API and renders categories", async () => {
    renderWithRealStore(<Home />);
    expect(await screen.findByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Footwear")).toBeInTheDocument();
    expect(screen.getByText("Clothing")).toBeInTheDocument();
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
