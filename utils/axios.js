import axios from "axios";
import { getTokenFromLocalStorage } from "./localStorage";
import { BASE_URL } from "../network/ApiEndpoints";

export const customFetch = axios.create({
  baseURL: BASE_URL,
});

customFetch.interceptors.request.use(async (config) => {
  config.headers["Companyid"] = `9`;
  const token = await getTokenFromLocalStorage();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
