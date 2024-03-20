import axios from "axios";
import { BASE_URL } from "../network/ApiEndpoints";

export const customFetch = axios.create({
  baseURL: BASE_URL,
});

// OLD INTERCEPTORS CODE DONT DELETE
// customFetch.interceptors.request.use(async (config) => {
//   config.headers["Companyid"] = `9`;
//   const token = await getTokenFromLocalStorage();
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });
