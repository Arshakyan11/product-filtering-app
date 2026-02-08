import axios from "axios";

export const apiProducts = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  timeoutErrorMessage: "Request TimeOut",
  headers: {
    "Content-Type": "application/json",
  },
});
