import { cleanUpDirection, cleanUpRoutes, cleanUpStops } from "../utils";
import directions_data from "./directions_data";
import routes_data from "./routes_data";
import stops_data from "./stops_data";

const dropdowns_data = [
  {
    id: "route-select",
    label: "Select a Route:",
    options: cleanUpRoutes(routes_data),
    onChangeHandler: jest.fn(),
  },
  {
    id: "direction-select",
    label: "Select a Direction:",
    options: cleanUpDirection(directions_data),
    onChangeHandler: jest.fn(),
  },
  {
    id: "stop-select",
    label: "Select a Stop:",
    options: cleanUpStops(stops_data),
    onChangeHandler: jest.fn(),
  },
];

export default dropdowns_data;
