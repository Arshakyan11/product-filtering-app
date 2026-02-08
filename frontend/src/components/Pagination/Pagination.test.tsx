import { screen } from "@testing-library/react";
import { renderWithRealStore } from "../../test/renderWithRealStore";
import Pagination from "./Pagination";
import { PRELOADED_STATE } from "../../mocksData/mocksData";

describe("Pagination", () => {
  it("renders Pagination page if it exists", () => {
    renderWithRealStore(<Pagination width={1024} />, {
      preloadedState: PRELOADED_STATE,
    });
    expect(screen.getByRole("button", { name: "<" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: ">" })).toBeInTheDocument();
  });
  it("dont render Pagination page if pagination doesnt exist", () => {
    renderWithRealStore(<Pagination width={1024} />);
    expect(
      screen.queryByRole("button", { name: /</i }),
    ).not.toBeInTheDocument();
  });
});
