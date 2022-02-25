import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";
import { cleanUpRoutes } from "../../utils";
import routes_data from "../../mock_data/routes_data";

describe("Test view select component", () => {
  test("render empty select", () => {
    const onChange = jest.fn();
    render(<Select options={[]} onChange={onChange} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select.hasChildNodes()).toBe(false);
  });

  test("render options that are passing as props", () => {
    const onChange = jest.fn((event) => {
      expect(event.target.value).toBe("901");
    });
    const options = cleanUpRoutes(routes_data);
    render(<Select options={options} onChange={onChange} />);

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select.hasChildNodes()).toBe(true);

    userEvent.selectOptions(screen.getByRole("combobox"), ["901"]);

    expect(
      screen.getByRole("option", { name: "METRO Blue Line" }).selected
    ).toBe(true);

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
