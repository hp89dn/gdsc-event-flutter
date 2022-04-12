import axios from "axios";

const fetch = axios.create({
  baseURL: process.env.AXIOS_BASE_URL || "http://localhost:8080",
  withCredentials: true,
});

export default fetch;
