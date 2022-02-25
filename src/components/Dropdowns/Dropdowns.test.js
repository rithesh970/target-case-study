import React from "react";
import Dropdowns from "./Dropdowns";
import { screen } from "@testing-library/react";
import { customRender } from "../../setupTests";
import dropdowns_data from "../../mock_data/dropdown_data";

describe("Error Component Testing", () => {
  test("Error message should render", () => {
    const providerProps = {
      value: {
        dropdowns: dropdowns_data,
      },
    };
    customRender(<Dropdowns />, { providerProps });

    const dropdowns = screen.getAllByRole("combobox");
    expect(dropdowns.length).toBe(3);
  });
});
