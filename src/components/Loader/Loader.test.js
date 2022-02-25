import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader Component", () => {
  test("renders Loading text", () => {
    render(<Loader />);
    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();
    expect(loader.textContent).toBe("Loading...");
  });
});
