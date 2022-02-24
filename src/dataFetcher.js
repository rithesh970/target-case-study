import axios from "axios";

export const BASE_URL = "https://svc.metrotransit.org/nextripv2";

const fetchInitialRoutes = async () => {
  try {
    return await axios.get(`${BASE_URL}/Routes`, {
      validateStatus: (status) => {
        return status >= 200 && status < 400; // Resolve only if the status code is equal to 200
      },
    });
  } catch (error) {
    return [];
  }
};

const fetchDirection = async (route) => {
  try {
    return await axios.get(`${BASE_URL}/directions/${route}`, {
      validateStatus: (status) => {
        return status >= 200 && status < 400; // Resolve only if the status code is equal to 200
      },
    });
  } catch (error) {
    return [];
  }
};

const fetchStops = async (route, direction) => {
  try {
    return await axios.get(`${BASE_URL}/stops/${route}/${direction}`, {
      validateStatus: (status) => {
        return status >= 200 && status < 400; // Resolve only if the status code is equal to 200
      },
    });
  } catch (error) {
    return [];
  }
};

const fetchDepartureList = async (route, direction, stop) => {
  try {
    return await axios.get(`${BASE_URL}/${route}/${direction}/${stop}`, {
      validateStatus: (status) => {
        return status >= 200 && status < 400; // Resolve only if the status code is equal to 200
      },
    });
  } catch (error) {
    return [];
  }
};

export { fetchInitialRoutes, fetchDirection, fetchStops, fetchDepartureList };
