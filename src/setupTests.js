// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import AppContext from "./store";
import { render } from "@testing-library/react";

export const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>,
    renderOptions
  );
};
