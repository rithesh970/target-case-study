import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import DepartureList from "./DepartureList";
import { cleanUpDepartureList } from "../../utils";
import departure_data from "../../mock_data/departure_data";
import { customRender } from "../../setupTests";

describe("Test Departure List Component -- Empty Input", () => {
  let departureData = {
    stop: {},
    stopList: [],
  };

  beforeEach(() => {
    departureData = {
      stop: {},
      stopList: [],
    };
  });

  test("table should render", () => {
    const providerProps = {
      value: {
        departureList: departureData,
      },
    };
    customRender(<DepartureList />, { providerProps });
    const table = screen.getAllByRole("table").length;
    expect(table).toBe(1);
  });

  test("table should render header row", () => {
    const providerProps = {
      value: {
        departureList: departureData,
      },
    };
    customRender(<DepartureList />, { providerProps });

    //Header Row Tests
    const headerRow = screen.getAllByRole("row")[0];
    expect(headerRow.hasChildNodes).toBeTruthy();
    expect(headerRow.childElementCount).toBe(3);
    expect(headerRow.textContent).toContain("RouteDestinationDeparts");
  });

  test("table should render No Departures Message", () => {
    const providerProps = {
      value: {
        departureList: departureData,
      },
    };
    customRender(<DepartureList />, { providerProps });

    //Table Body Tests
    const tableBody = screen.getAllByRole("row")[1];
    expect(tableBody.hasChildNodes).toBeTruthy();
    expect(tableBody.childElementCount).toBe(1);
    expect(tableBody.textContent).toContain("No departures at this time");
  });
});

describe("Test Departure List Component -- Valid Input", () => {
  let departureData = {
    stop: {},
    stopList: [],
  };

  beforeEach(() => {
    departureData = {
      stop: {},
      stopList: [],
    };
  });

  test("table should render valid data", () => {
    departureData = cleanUpDepartureList(departure_data);
    const providerProps = {
      value: {
        departureList: departureData,
      },
    };
    customRender(<DepartureList />, { providerProps });

    let tableRows = screen.getAllByRole("row");

    //Only show 3 items in the first load
    expect(tableRows.length - 1).toBe(3);

    //Expect button to be loaded

    let button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("Show more departures");

    fireEvent.click(button);

    tableRows = screen.getAllByRole("row");

    expect(tableRows.length - 1).toBe(departureData.stopList.length);

    button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("Show less departures");
  });
});
