import axios from "axios";
import { getTokenFromLocalStorage } from "./localStorage";
import { BASE_URL } from "../network/ApiEndpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const customFetch = axios.create({
  baseURL: BASE_URL,
});

// customFetch.interceptors.request.use(async (config) => {
//   config.headers["Companyid"] = `9`;
//   const token = await getTokenFromLocalStorage();
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });

customFetch.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
