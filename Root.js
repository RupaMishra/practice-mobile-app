import React from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import TpinScreen from "./screens/TpinScreen";
import SuccessTxn from "./screens/SuccessTxn";
import FailedTxnScreen from "./screens/FailedTxnScreen";

const Stack = createNativeStackNavigator();

const Root = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "#000814",
        contentStyle: { backgroundColor: "white" },
      }}
    >
      {!isAuthenticated ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ title: "Sign up here", headerShown: false }}
          />
          <Stack.Screen
            name="Tpin"
            component={TpinScreen}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="SuccessTxn"
            component={SuccessTxn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FailedTxn"
            component={FailedTxnScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Root;
