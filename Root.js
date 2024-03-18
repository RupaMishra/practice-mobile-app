import { useSelector } from "react-redux";
import { AppNavigation } from "./navigations/AppNavigation";

const Root = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);

  const returnNavigation = AppNavigation(isAuthenticated);

  return returnNavigation;
};

export default Root;
