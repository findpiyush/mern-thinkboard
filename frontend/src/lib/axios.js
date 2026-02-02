import axios from "axios";
// we will create an axios instance

// in production, there's no localhost so we have to make this dynamic
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

// const axiosInstance or const api same thing
const api = axios.create({
  baseURL: BASE_URL,
});
export default api;
