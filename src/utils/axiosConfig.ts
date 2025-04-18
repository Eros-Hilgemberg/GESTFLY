import axios from "axios";
const url = import.meta.env.VITE_URL_API;
console.log(url);
export const API = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {},
});
