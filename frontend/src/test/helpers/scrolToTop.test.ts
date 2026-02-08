import { scrolTo } from "../../helpers/scrollToTop";

describe("scrolTo", () => {
  it("scrolTo function execution", () => {
    const spy_scroll = vi
      .spyOn(window, "scrollTo")
      .mockImplementation(() => {});
    scrolTo();
    expect(spy_scroll).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
    spy_scroll.mockRestore();
  });
});
