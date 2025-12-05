import axios from "axios";

const api = axios.create({
  baseURL: "https://icfai-grievance-system.onrender.com",
  withCredentials: true, // for cookies
});

export default api;
