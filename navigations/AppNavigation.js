import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import TpinScreen from "../screens/TpinScreen";
import SuccessTxn from "../screens/SuccessTxn";
import FailedTxnScreen from "../screens/FailedTxnScreen";
import { DrawerNavigation } from "./DrawerNavigation";
import MyProfile from "../screens/MyProfile";
import NotificationScreen from "../screens/NotificationScreen";
import QrScannerScreen from "../screens/QrScannerScreen";
import QrCodeScreen from "../screens/QrCodeScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = (isAuthenticated) => {
  let navigation;
  navigation = (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "#000814",
        contentStyle: { backgroundColor: "white" },
        headerShadowVisible: false,
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
        </>
      ) : (
        <>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MyProfile"
            component={MyProfile}
            options={{ title: "Profile" }}
          />
          <Stack.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
              headerStyle: { backgroundColor: "#EFF0F2" },
              presentation: "modal",
              animationTypeForReplace: "push",
              animation: "slide_from_right",
            }}
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
          <Stack.Screen
            name="Camera"
            component={QrScannerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QrCode"
            component={QrCodeScreen}
            options={{
              headerStyle: { backgroundColor: "#EFF0F2" },
              presentation: "modal",
              animationTypeForReplace: "push",
              animation: "slide_from_left",
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );

  return navigation;
};
