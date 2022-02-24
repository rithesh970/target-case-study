import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {
  BASE_URL,
  fetchInitialRoutes,
  fetchDirection,
  fetchStops,
  fetchDepartureList,
} from "./dataFetcher";

import departure_data from "./mock_data/departure_data";
import directions_data from "./mock_data/directions_data";
import routes_data from "./mock_data/routes_data";
import stops_data from "./mock_data/stops_data";

describe("Test Fetch Routes Axios API Calls:", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("should return valid routes object", async () => {
    const routes = routes_data;
    mock.onGet(`${BASE_URL}/Routes`).reply(200, routes);

    const result = await fetchInitialRoutes();

    expect(mock.history.get[0].url).toEqual(`${BASE_URL}/Routes`);
    expect(result.data).toEqual(routes);
  });

  it("should return an empty routes array", async () => {
    mock.onGet(`${BASE_URL}/Routes`).networkErrorOnce();

    const result = await fetchInitialRoutes();

    expect(mock.history.get[0].url).toEqual(`${BASE_URL}/Routes`);
    expect(result).toEqual([]);
  });
});

describe("Test Fetch Direction Axios API Calls:", () => {
  let mock;

  let route = 17;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("should return valid routes object", async () => {
    const directions = directions_data;
    mock.onGet(`${BASE_URL}/directions/${route}`).reply(200, directions);

    const result = await fetchDirection(route);

    expect(mock.history.get[0].url).toEqual(`${BASE_URL}/directions/${route}`);
    expect(result.data).toEqual(directions);
  });

  it("should return an empty routes array", async () => {
    mock.onGet(`${BASE_URL}/directions/${route}`).networkErrorOnce();

    const result = await fetchDirection(route);

    expect(mock.history.get[0].url).toEqual(`${BASE_URL}/directions/${route}`);
    expect(result).toEqual([]);
  });

  it("should return an empty routes for route passed in as  undefined", async () => {
    route = undefined;
    mock.onGet(`${BASE_URL}/directions/${route}`).networkErrorOnce();

    const result = await fetchDirection(route);

    expect(mock.history.get[0].url).toEqual(`${BASE_URL}/directions/${route}`);
    expect(result).toEqual([]);
  });
});

describe("Test Fetch Stops Axios API Calls:", () => {
  let mock;
  let route = 17;
  let direction = 1;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("should return valid stops object", async () => {
    const stops = stops_data;
    mock.onGet(`${BASE_URL}/stops/${route}/${direction}`).reply(200, stops);

    const result = await fetchStops(route, direction);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/stops/${route}/${direction}`
    );
    expect(result.data).toEqual(stops);
  });

  it("should return an empty array", async () => {
    mock.onGet(`${BASE_URL}/stops/${route}/${direction}`).networkErrorOnce();

    const result = await fetchStops(route, direction);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/stops/${route}/${direction}`
    );
    expect(result).toEqual([]);
  });

  it("should return an empty array if route is undefined", async () => {
    route = undefined;
    mock.onGet(`${BASE_URL}/stops/${route}/${direction}`).networkErrorOnce();

    const result = await fetchStops(route, direction);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/stops/${route}/${direction}`
    );
    expect(result).toEqual([]);
  });
  it("should return an empty array if direction is undefined", async () => {
    direction = undefined;
    mock.onGet(`${BASE_URL}/stops/${route}/${direction}`).networkErrorOnce();

    const result = await fetchStops(route, direction);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/stops/${route}/${direction}`
    );
    expect(result).toEqual([]);
  });
  it("should return an empty array if both route & direction are undefined", async () => {
    direction = undefined;
    route = undefined;
    mock.onGet(`${BASE_URL}/stops/${route}/${direction}`).networkErrorOnce();

    const result = await fetchStops(route, direction);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/stops/${route}/${direction}`
    );
    expect(result).toEqual([]);
  });
});

describe("Test Fetch Departure List Axios API Calls:", () => {
  let mock;
  let route = 17;
  let direction = 1;
  let stop = "LAFR";

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("should return valid directions object", async () => {
    const departures = departure_data;
    mock
      .onGet(`${BASE_URL}/${route}/${direction}/${stop}`)
      .reply(200, departures);

    const result = await fetchDepartureList(route, direction, stop);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/${route}/${direction}/${stop}`
    );
    expect(result.data).toEqual(departures);
  });

  it("should return an empty object if there is a network error", async () => {
    mock.onGet(`${BASE_URL}/${route}/${direction}/${stop}`).networkErrorOnce();

    const result = await fetchDepartureList(route, direction, stop);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/${route}/${direction}/${stop}`
    );
    expect(result).toEqual({});
  });

  it("should return an empty object if route is undefined", async () => {
    route = undefined;
    mock.onGet(`${BASE_URL}/${route}/${direction}/${stop}`).networkErrorOnce();

    const result = await fetchDepartureList(route, direction, stop);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/${route}/${direction}/${stop}`
    );
    expect(result).toEqual({});
  });

  it("should return an empty object if direction is undefined", async () => {
    direction = undefined;
    mock.onGet(`${BASE_URL}/${route}/${direction}/${stop}`).networkErrorOnce();

    const result = await fetchDepartureList(route, direction, stop);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/${route}/${direction}/${stop}`
    );
    expect(result).toEqual({});
  });

  it("should return an empty object if stop is undefined", async () => {
    stop = undefined;
    mock.onGet(`${BASE_URL}/${route}/${direction}/${stop}`).networkErrorOnce();

    const result = await fetchDepartureList(route, direction, stop);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/${route}/${direction}/${stop}`
    );
    expect(result).toEqual({});
  });

  it("should return an empty object if all the inputs are undefined", async () => {
    stop = undefined;
    direction = undefined;
    route = undefined;
    mock.onGet(`${BASE_URL}/${route}/${direction}/${stop}`).networkErrorOnce();

    const result = await fetchDepartureList(route, direction, stop);

    expect(mock.history.get[0].url).toEqual(
      `${BASE_URL}/${route}/${direction}/${stop}`
    );
    expect(result).toEqual({});
  });
});
