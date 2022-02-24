import { useEffect, useReducer } from "react";
import AppContext, { initialState } from "./index";
import { cleanUpRoutes, cleanUpDirection, cleanUpStops } from "../utils";
import {
  fetchDirection,
  fetchInitialRoutes,
  fetchStops,
  fetchDepartureList,
} from "../dataFetcher";
import { cleanUpDepartureList } from "../utils";
import AppReducer from "./AppReducer";

const AppContextProvider = (props) => {
  const [appState, dispatchAction] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchRoutes = async () => {
      await fetchInitialRoutes().then((response) => {
        dispatchAction({ type: "TOGGLE_LOADER" });
        if (response.length === 0) {
          displayErrorMessage();
        } else {
          dispatchAction({
            type: "UPDATE_DATA",
            dropdown: {
              options: cleanUpRoutes(response.data),
              id: "route-select",
            },
          });
        }
      });
    };
    fetchRoutes();
  }, []);

  const displayErrorMessage = (message) => {
    dispatchAction({
      type: "CUSTOM_ERROR_MESSAGE",
      message: "Server error occured. Please try again later.",
    });
  };

  const routeChangeHandler = (event) => {
    const selectedRoute = event.target.value;
    if (selectedRoute !== "") {
      dispatchAction({
        type: "RESET_ERROR",
      });
      dispatchAction({
        type: "RESET_DEPARTURE_LIST",
      });
      dispatchAction({
        type: "RESET_DIRECTION_DROPDOWN",
      });
      dispatchAction({
        type: "RESET_STOPS_DROPDOWN",
      });
      dispatchAction({
        type: "UPDATE_SELECTED_ROUTE",
        route: selectedRoute,
      });
      fetchDirection(selectedRoute).then((response) => {
        if (response.length === 0) {
          displayErrorMessage();
        } else {
          dispatchAction({
            type: "UPDATE_DATA",
            dropdown: {
              options: cleanUpDirection(response.data),
              id: "direction-select",
            },
          });
        }
      });
    } else {
      dispatchAction({
        type: "SHOW_INCORRECT_INPUT",
      });
      dispatchAction({
        type: "RESET_DEPARTURE_LIST",
      });
      dispatchAction({
        type: "RESET_DIRECTION_DROPDOWN",
      });
      dispatchAction({
        type: "RESET_STOPS_DROPDOWN",
      });
    }
  };

  const directionChangeHandler = (event) => {
    const selectedDirection = event.target.value;
    if (selectedDirection !== "") {
      dispatchAction({
        type: "RESET_ERROR",
      });
      dispatchAction({
        type: "RESET_DEPARTURE_LIST",
      });
      dispatchAction({
        type: "RESET_STOPS_DROPDOWN",
      });
      dispatchAction({
        type: "UPDATE_SELECTED_DIRECTION",
        direction: selectedDirection,
      });
      fetchStops(appState.selectedRoute, selectedDirection).then((response) => {
        if (response.length === 0) {
          displayErrorMessage();
        } else {
          dispatchAction({
            type: "UPDATE_DATA",
            dropdown: {
              options: cleanUpStops(response.data),
              id: "stop-select",
            },
          });
        }
      });
    } else {
      dispatchAction({
        type: "SHOW_INCORRECT_INPUT",
      });
      dispatchAction({
        type: "RESET_DEPARTURE_LIST",
      });
      dispatchAction({
        type: "RESET_STOPS_DROPDOWN",
      });
    }
  };

  const stopsChangeHandler = (event) => {
    const selectedStop = event.target.value;
    if (selectedStop !== "") {
      dispatchAction({
        type: "RESET_ERROR",
      });
      dispatchAction({
        type: "UPDATE_SELECTED_STOP",
        stop: selectedStop,
      });
      fetchDepartureList(
        appState.selectedRoute,
        appState.selectedDirection,
        selectedStop
      ).then((response) => {
        if (Object.entries(response).length === 0) {
          displayErrorMessage();
        } else {
          dispatchAction({
            type: "UPDATE_DEPARTURE_LIST",
            departureList: cleanUpDepartureList(response.data),
          });
        }
      });
    } else {
      dispatchAction({
        type: "SHOW_INCORRECT_INPUT",
      });
      dispatchAction({
        type: "RESET_DEPARTURE_LIST",
      });
    }
  };

  const appContext = {
    showLoader: appState.showLoader,
    dropdowns: [
      { ...appState.dropdowns[0], onChangeHandler: routeChangeHandler },
      { ...appState.dropdowns[1], onChangeHandler: directionChangeHandler },
      { ...appState.dropdowns[2], onChangeHandler: stopsChangeHandler },
    ],
    departureList: appState.departureList,
    showError: appState.showError,
    errorMessage: appState.errorMessage,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
