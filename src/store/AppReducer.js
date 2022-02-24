import { initialState } from "./index";

const AppReducer = (state, action) => {
  if (action.type === "TOGGLE_LOADER") {
    return {
      ...state,
      showLoader: !state.showLoader,
    };
  }
  if (action.type === "UPDATE_DATA") {
    const relevantDropdownDataIndex = state.dropdowns.findIndex((dropdown) => {
      return dropdown.id === action.dropdown.id;
    });
    let updatedDropdowns = [...state.dropdowns];
    updatedDropdowns[relevantDropdownDataIndex].options = [
      ...action.dropdown.options,
    ];
    return {
      ...state,
      dropdowns: updatedDropdowns,
    };
  }
  if (action.type === "UPDATE_SELECTED_ROUTE") {
    return {
      ...state,
      selectedRoute: action.route,
    };
  }
  if (action.type === "UPDATE_SELECTED_DIRECTION") {
    return {
      ...state,
      selectedDirection: action.direction,
    };
  }
  if (action.type === "UPDATE_SELECTED_STOP") {
    return {
      ...state,
      selectedStop: action.stop,
    };
  }
  if (action.type === "UPDATE_DEPARTURE_LIST") {
    return {
      ...state,
      departureList: action.departureList,
    };
  }
  if (action.type === "RESET_DEPARTURE_LIST") {
    return {
      ...state,
      departureList: {},
    };
  }
  if (action.type === "RESET_STOPS_DROPDOWN") {
    const relevantDropdownDataIndex = state.dropdowns.findIndex((dropdown) => {
      return dropdown.id === "stop-select";
    });
    let updatedDropdowns = [...state.dropdowns];
    updatedDropdowns[relevantDropdownDataIndex].options = [];
    return {
      ...state,
      dropdowns: updatedDropdowns,
    };
  }
  if (action.type === "RESET_DIRECTION_DROPDOWN") {
    const relevantDropdownDataIndex = state.dropdowns.findIndex((dropdown) => {
      return dropdown.id === "direction-select";
    });
    let updatedDropdowns = [...state.dropdowns];
    updatedDropdowns[relevantDropdownDataIndex].options = [];
    return {
      ...state,
      dropdowns: updatedDropdowns,
    };
  }
  if (action.type === "SHOW_INCORRECT_INPUT") {
    return {
      ...state,
      showError: true,
      errorMessage:
        "Please enter valid Route, Direction and Stop to get the departures inforamtion",
    };
  }
  if (action.type === "CUSTOM_ERROR_MESSAGE") {
    return {
      ...state,
      showError: true,
      errorMessage: action.message,
    };
  }
  if (action.type === "RESET_ERROR") {
    return {
      ...state,
      showError: false,
      errorMessage: "",
    };
  }
  return initialState;
};

export default AppReducer;
