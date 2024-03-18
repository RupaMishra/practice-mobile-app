import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppNavigation } from "./navigations/AppNavigation";
import { useDispatch } from "react-redux";
import { authenticate } from "./features/auth/authSlice";

const Root = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate());
  }, []);

  const returnNavigation = AppNavigation(isAuthenticated);

  return returnNavigation;
};

export default Root;
