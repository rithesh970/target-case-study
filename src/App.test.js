import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders images", () => {
    render(<App />);
    const logo = screen.getAllByRole("img");
    expect(logo).toHaveLength(2);
    expect(logo[0]).toHaveAttribute("src", "logo.svg");
    expect(logo[1]).toHaveAttribute("src", "nextrip.jpg");
  });
});
