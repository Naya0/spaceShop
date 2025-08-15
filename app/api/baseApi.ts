import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
    (respons) => respons,
    (error) => {
        return Promise.reject(error)
    }
)
