import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.api-ninjas.com/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": import.meta.env.VITE_API_KEY,
  },
});

api.interceptors.response.use(
    (respons) => respons,
    (error) => {
        return Promise.reject(error)
    }
)
