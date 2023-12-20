import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use(async (config) => {
  config.headers["id"] = localStorage.getItem("kkang-id");
  config.headers["ngrok-skip-browser-warning"] = "69420";

  return config;
});
