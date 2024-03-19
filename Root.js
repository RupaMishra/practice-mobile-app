import { useSelector } from "react-redux";
import { AppNavigation } from "./navigations/AppNavigation";

const Root = () => {
  const { isAuthenticated, user } = useSelector((store) => store.auth);

  console.log("====================================");
  console.log(user);
  console.log("====================================");

  const returnNavigation = AppNavigation(isAuthenticated);

  return returnNavigation;
};

export default Root;
