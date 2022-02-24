import axios from "axios";

const instance = axios.create({
  baseURL: "https://svc.metrotransit.org/nextripv2/",
});

export default instance;
