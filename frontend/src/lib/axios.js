import axios from "axios";
// we will create an axios instance

// const axiosInstance or const api same thing
const api = axios.create({
  baseURL: "http://localhost:5001/api",
});
export default api;
