import React from "react";
import Error from "./Error";
import { screen } from "@testing-library/react";
import { customRender } from "../../setupTests";

describe("Error Component Testing", () => {
  test("Error message should render", () => {
    const providerProps = {
      value: {
        errorMessage: "Bad Request",
      },
    };
    customRender(<Error />, { providerProps });
    const errorMessage = screen.getByText("Bad Request");
    expect(errorMessage).toBeInTheDocument();
  });
});
