import { render, screen } from "@testing-library/react";
import App from "./App";
import { customRender } from "./setupTests";
import { initialState } from "./store";
import dropdowns_data from "./mock_data/dropdown_data";

describe("App Component", () => {
  test("renders images", () => {
    render(<App />);
    const logo = screen.getAllByRole("img");
    expect(logo).toHaveLength(2);
    expect(logo[0]).toHaveAttribute("src", "logo.svg");
    expect(logo[1]).toHaveAttribute("src", "nextrip.jpg");
  });
});

describe("App Component with Context", () => {
  test("renders Loader", () => {
    const providerProps = {
      value: initialState,
    };
    customRender(<App />, { providerProps });

    const loader = screen.getByText("Loading...");
    expect(loader).toBeInTheDocument();
  });
});

describe("App Component with error", () => {
  test("renders Errior", () => {
    const providerProps = {
      value: {
        ...initialState,
        showError: true,
        showLoader: false,
        errorMessage: "Bad Request",
      },
    };
    customRender(<App />, { providerProps });

    const loader = screen.getByText("Bad Request");
    expect(loader).toBeInTheDocument();
  });
});

describe("App Component with options set for dropdowns", () => {
  test("renders dropdown", () => {
    const providerProps = {
      value: {
        ...initialState,
        showLoader: false,
        dropdowns: dropdowns_data,
      },
    };
    customRender(<App />, { providerProps });

    const dropdowns = screen.getAllByRole("combobox");

    expect(dropdowns.length).toBe(3);
  });
});
