import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";

const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={WelcomeScreen} />
    </Drawer.Navigator>
  );
};
