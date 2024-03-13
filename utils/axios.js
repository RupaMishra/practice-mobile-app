import axios from "axios";
import { getTokenFromLocalStorage } from "./localStorage";
import { BASE_URL } from "../network/ApiEndpoints";

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
