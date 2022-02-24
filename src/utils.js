const cleanUpRoutes = (routes) => {
  return [].concat(
    {
      description: "Select a Route",
      value: "",
    },
    routes.map((route) => {
      return {
        description: route.route_label,
        value: route.route_id,
      };
    })
  );
};

const cleanUpDirection = (directions) => {
  return [].concat(
    {
      description: "Select a Direction",
      value: "",
    },
    directions.map((direction) => {
      return {
        description: direction.direction_name,
        value: direction.direction_id,
      };
    })
  );
};

const cleanUpStops = (stops) => {
  return [].concat(
    {
      description: "Select a Stop",
      value: "",
    },
    stops.map((stop) => {
      return {
        description: stop.description,
        value: stop.place_code,
      };
    })
  );
};

const cleanUpDepartureList = (departureList) => {
  return {
    stop: {
      stop_id: departureList.stops.map((stop) => stop.stop_id).join(", "),
      description: departureList.stops[0].description,
    },
    stopList: departureList.departures.map((departure) => {
      return {
        description: departure.description,
        route:
          departure.route_short_name +
          (departure.terminal ? departure.terminal : ""),
        departureTime: departure.departure_text,
      };
    }, []),
  };
};

export { cleanUpRoutes, cleanUpDirection, cleanUpStops, cleanUpDepartureList };
