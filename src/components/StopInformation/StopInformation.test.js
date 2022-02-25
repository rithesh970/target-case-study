import { render, screen } from "@testing-library/react";
import StopInformation from "./StopInformation";

describe("Loader Component", () => {
  test("renders Loading text", () => {
    render(<StopInformation name="Stop 1" stopNumber="12345" />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe("Stop 1");

    const StopNumber = screen.getByText("12345");
    expect(StopNumber).toBeInTheDocument();
  });
});
