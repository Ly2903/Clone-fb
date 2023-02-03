import axios from "axios";
const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://api-clone-fb-zmmc.vercel.app",
});

export default api;
