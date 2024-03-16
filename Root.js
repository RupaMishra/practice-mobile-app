import React from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import TpinScreen from "./screens/TpinScreen";
import SuccessTxn from "./screens/SuccessTxn";
import FailedTxnScreen from "./screens/FailedTxnScreen";
import { AppNavigation } from "./navigations/AppNavigation";

const Stack = createNativeStackNavigator();
const Root = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);

  const returnNavigation = AppNavigation(isAuthenticated);

  return returnNavigation;
};

export default Root;
