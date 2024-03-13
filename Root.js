import React from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const Root = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);

  let returnNavigation;

  if (!isAuthenticated) {
    returnNavigation = (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#000814",
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "Sign up here" }}
        />
      </Stack.Navigator>
    );
  } else {
    returnNavigation = (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#000814",
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    );
  }

  return returnNavigation;
};

export default Root;
