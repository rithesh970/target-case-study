import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { BASE_URL, fetchInitialRoutes } from "./dataFetcher";

describe("Test Fetch Axios API Calls:", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("Routes API Call is successful", () => {
    it("should return valid routes object", async () => {
      const routes = [
        { route_id: "901", agency_id: 0, route_label: "METRO Blue Line" },
        { route_id: "902", agency_id: 0, route_label: "METRO Green Line" },
        { route_id: "906", agency_id: 10, route_label: "Airport Shuttle" },
        { route_id: "903", agency_id: 0, route_label: "METRO Red Line" },
        { route_id: "904", agency_id: 0, route_label: "METRO Orange Line" },
        { route_id: "921", agency_id: 0, route_label: "METRO A Line" },
        { route_id: "923", agency_id: 0, route_label: "METRO C Line" },
      ];
      mock.onGet(`${BASE_URL}/Routes`).reply(200, routes);

      const result = await fetchInitialRoutes();

      expect(mock.history.get[0].url).toEqual(`${BASE_URL}/Routes`);
      expect(result.data).toEqual(routes);
    });
  });

  describe("when API call fails", () => {
    it("should return an empty routes arrau", async () => {
      mock.onGet(`${BASE_URL}/Routes`).networkErrorOnce();

      const result = await fetchInitialRoutes();

      expect(mock.history.get[0].url).toEqual(`${BASE_URL}/Routes`);
      expect(result).toEqual([]);
    });
  });
});
