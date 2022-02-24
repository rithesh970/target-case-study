import departure_data from "./mock_data/departure_data";
import directions_data from "./mock_data/directions_data";
import routes_data from "./mock_data/routes_data";
import stops_data from "./mock_data/stops_data";
import {
  cleanUpDepartureList,
  cleanUpDirection,
  cleanUpRoutes,
  cleanUpStops,
} from "./utils";

describe("Test Clean up utils for Routes", () => {
  let result = [];
  beforeAll(() => {
    result = cleanUpRoutes(routes_data);
  });

  test("should return valid routes array wtesth default option", () => {
    expect(result.length).toEqual(routes_data.length + 1);
  });

  test("should have first option to match object", () => {
    const firstElement = result[0];
    expect(firstElement).toEqual(
      expect.objectContaining({
        description: expect.any(String),
        value: expect.any(String),
      })
    );
    expect(firstElement.description).toStrictEqual("Select a Route");
    expect(firstElement.value).toStrictEqual("");
  });

  test("should have last option to match object last element", () => {
    const lastElement = result[result.length - 1];
    const lastData = routes_data[routes_data.length - 1];
    const dataLastElement = {
      description: lastData.route_label,
      value: lastData.route_id,
    };
    expect(lastElement).toEqual(dataLastElement);
  });
});

describe("Test Clean up utils for Directions", () => {
  let result = [];
  beforeAll(() => {
    result = cleanUpDirection(directions_data);
  });

  test("should return valid direction array wtesth default option", () => {
    expect(result.length).toEqual(directions_data.length + 1);
  });

  test("should have first option to match object", () => {
    const firstElement = result[0];
    expect(firstElement).toEqual(
      expect.objectContaining({
        description: expect.any(String),
        value: expect.any(String),
      })
    );
    expect(firstElement.description).toStrictEqual("Select a Direction");
    expect(firstElement.value).toStrictEqual("");
  });

  test("should have last option to match object last element", () => {
    const lastElement = result[result.length - 1];
    const lastData = directions_data[directions_data.length - 1];
    const dataLastElement = {
      description: lastData.direction_name,
      value: lastData.direction_id,
    };
    expect(lastElement).toEqual(dataLastElement);
  });
});

describe("Test Clean up utils for Stops", () => {
  let result = [];
  beforeAll(() => {
    result = cleanUpStops(stops_data);
  });

  test("should return valid direction array wtesth default option", () => {
    expect(result.length).toEqual(stops_data.length + 1);
  });

  test("should have first option to match object", () => {
    const firstElement = result[0];
    expect(firstElement).toEqual(
      expect.objectContaining({
        description: expect.any(String),
        value: expect.any(String),
      })
    );
    expect(firstElement.description).toStrictEqual("Select a Stop");
    expect(firstElement.value).toStrictEqual("");
  });

  test("should have last option to match object last element", () => {
    const lastElement = result[result.length - 1];
    const lastData = stops_data[stops_data.length - 1];
    const dataLastElement = {
      description: lastData.description,
      value: lastData.place_code,
    };
    expect(lastElement).toEqual(dataLastElement);
  });
});

describe("Test Clean up utils for Departure List Data", () => {
  let result = [];
  beforeAll(() => {
    result = cleanUpDepartureList(departure_data);
    console.log(result);
  });

  test("should return an array with stop and stopList options", () => {});
});
