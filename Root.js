import { useSelector } from "react-redux";
import { AppNavigation } from "./navigations/AppNavigation";
import { useEffect } from "react";
import { customFetch } from "./utils/axios";

const Root = () => {
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    customFetch.defaults.headers.common["Companyid"] = `9`;
    if (token) {
      console.log("in here in with token");
      customFetch.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.log("in here in without token");
    }
  }, [token]);

  const { isAuthenticated, user } = useSelector((store) => store.auth);

  const returnNavigation = AppNavigation(isAuthenticated);

  return returnNavigation;
};

export default Root;
