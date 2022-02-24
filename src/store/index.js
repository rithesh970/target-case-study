import { createContext } from "react";

const initialState = {
  showLoader: true,
  selectedRoute: "",
  selectedDirection: "",
  selectedStops: "",
  departureList: {},
  showError: false,
  errorMessage: "",
  dropdowns: [
    {
      id: "route-select",
      label: "Select a Route:",
      options: [],
      onChangeHandler: () => {},
    },
    {
      id: "direction-select",
      label: "Select a Direction:",
      options: [],
      onChangeHandler: () => {},
    },
    {
      id: "stop-select",
      label: "Select a Stop:",
      options: [],
      onChangeHandler: () => {},
    },
  ],
};

const AppContext = createContext(initialState);

export default AppContext;

export { initialState };
