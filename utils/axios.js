import axios from "axios";
import { getTokenFromLocalStorage } from "./localStorage";

const BASE_URL = "http://192.168.1.35:8000/";

export const customFetch = axios.create({
  baseURL: BASE_URL,
});

customFetch.interceptors.request.use((config) => {
  async function resolvePromise() {
    try {
      const token = await getTokenFromLocalStorage();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {}
  }
  resolvePromise();
  return config;
});
