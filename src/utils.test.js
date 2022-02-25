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
  });

  test("should return an object with stop and stopList options", () => {
    expect(result).toMatchObject({
      stop: expect.any(Object),
      stopList: expect.any(Array),
    });
  });

  test("should have stop information for all the stops", () => {
    const stops = departure_data.stops.length;
    const resultStop = result.stop.stop_id.split(",");

    expect(resultStop.length).toBe(stops);
  });

  test("should have stop list information that is same as departure data", () => {
    const stops = departure_data.departures.length;
    const resultStop = result.stopList.length;

    expect(resultStop).toBe(stops);
  });

  test("String should be same at the same index for departures", () => {
    const index = 3;
    const stops = departure_data.departures[index];
    const resultStop = result.stopList[index];

    expect(stops.description).toBe(resultStop.description);
  });

  test("String should be same at the same index for stops", () => {
    const stops = departure_data.stops[0].description;
    const resultStop = result.stop.description;

    expect(stops).toBe(resultStop);
  });
});
