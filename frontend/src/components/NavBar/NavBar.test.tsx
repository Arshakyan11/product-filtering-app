import { screen } from "@testing-library/react";
import { renderWithRealStore } from "../../test/renderWithRealStore";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<any>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe("NavBar", () => {
  it("renders Navbar brand title", () => {
    renderWithRealStore(<NavBar />);
    expect(screen.getByText(/Smart/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
  });
  it("navigates user to home when project Name is clicked", async () => {
    renderWithRealStore(<NavBar />);
    const user = userEvent.setup();
    await user.click(screen.getByLabelText(/project Name/i));
    expect(navigateMock).toHaveBeenCalledWith("/", { replace: true });
  });
  it("navigates user to home when project logo is clicked", async () => {
    renderWithRealStore(<NavBar />);
    const user = userEvent.setup();
    await user.click(screen.getByLabelText(/project logo/i));
    expect(navigateMock).toHaveBeenCalledWith("/", { replace: true });
  });
  it("renders Products link", () => {
    renderWithRealStore(<NavBar />);
    expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument();
  });
});
