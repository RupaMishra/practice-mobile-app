import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import TpinScreen from "../screens/TpinScreen";
import SuccessTxn from "../screens/SuccessTxn";
import FailedTxnScreen from "../screens/FailedTxnScreen";
import { DrawerNavigation } from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

export const AppNavigation = (isAuthenticated) => {
  let navigation;
  navigation = (
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

          {/* to be created after authentication navigations */}
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

          {/* to be created after authentication navigations */}
        </>
      ) : (
        <>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );

  return navigation;
};
