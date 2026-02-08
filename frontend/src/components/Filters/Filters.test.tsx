import { PRELOADED_STATE } from "../../mocksData/mocksData";
import { renderWithRealStore } from "../../test/renderWithRealStore";
import Filters from "./Filters";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Filters", () => {
  const renderFilters = (width: number, state = PRELOADED_STATE) =>
    renderWithRealStore(<Filters width={width} />, {
      preloadedState: state,
    });
  it("render Filters", () => {
    renderFilters(1024, PRELOADED_STATE);
    expect(
      screen.getByRole("button", { name: /reset filters/i }),
    ).toBeInTheDocument();
  });
  it("reset filters when clicking Reset Filters", async () => {
    const user = userEvent.setup();
    renderFilters(1024, {
      ...PRELOADED_STATE,
      products: {
        ...PRELOADED_STATE.products,
        params: {
          category: "Clothing",
          brand: "Brand C",
        },
      },
    });

    await user.click(screen.getByRole("button", { name: /reset filters/i }));
  });
  it("Mobile version doesnt show filters automatically", () => {
    renderFilters(425, PRELOADED_STATE);
    expect(
      screen.queryByRole("button", { name: /reset filters/i }),
    ).not.toBeInTheDocument();
  });
});
