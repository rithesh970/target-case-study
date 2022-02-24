import instance from "./axios";

const fetchInitialRoutes = async () => {
  const data = await instance
    .get("/Routes", {
      validateStatus: (status) => {
        return status >= 200 && status < 400; // Resolve only if the status code is equal to 200
      },
    })
    .then((data) => data)
    .catch((error) => {
      return {
        error: {
          status: error.response.status,
          message: error.response.statusText,
        },
      };
    });
  return data;
};

const fetchDirection = async (route) => {
  const data = await instance
    .get(`/directions/${route}`, {
      validateStatus: (status) => {
        return status >= 200 && status < 400; // Resolve only if the status code is equal to 200
      },
    })
    .then((data) => data)
    .catch((error) => {
      return {
        error: {
          status: error.response.status,
          message: error.response.statusText,
        },
      };
    });
  return data;
};

const fetchStops = async (route, direction) => {
  const data = await instance
    .get(`/stops/${route}/${direction}`, {
      validateStatus: (status) => {
        return status >= 200 && status < 400; // Resolve only if the status code is equal to 200
      },
    })
    .then((data) => data)
    .catch((error) => {
      return {
        error: {
          status: error.response.status,
          message: error.response.statusText,
        },
      };
    });
  return data;
};

const fetchDepartureList = async (route, direction, stop) => {
  const data = await instance
    .get(`/${route}/${direction}/${stop}`, {
      validateStatus: (status) => {
        return status >= 200 && status < 400; // Resolve only if the status code is equal to 200
      },
    })
    .then((data) => data)
    .catch((error) => {
      return {
        error: {
          status: error.response.status,
          message: error.response.statusText,
        },
      };
    });
  return data;
};

export { fetchInitialRoutes, fetchDirection, fetchStops, fetchDepartureList };
