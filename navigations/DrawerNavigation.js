import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";
import MyText from "../components/texts/MyText";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { GREY, PRIMARY } from "../constants/colors";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <MyText>our content</MyText>
      <DrawerItemList {...props} />
      {/* to add additional items in drawer */}
      {/* <DrawerItem
        {...props}
        label={({ focused, color }) => (
          <MyText style={{ color }}>
            {focused ? "Focused text" : "Unfocused text"}
          </MyText>
        )}
        icon={({ focused, color, size }) => (
          <Ionicons color={color} size={size} name="home" />
        )}
        activeTintColor={PRIMARY.main}
        inactiveTintColor={GREY[500]}
        activeBackgroundColor={PRIMARY.lighter}
        // inactiveBackgroundColor
        // labelStyle
        // style
      /> */}
      <MyText>our footer</MyText>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          drawerLabel: ({ focused, color }) => (
            <MyText style={{ color }}>Home</MyText>
          ),
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons color={color} size={size} name="home" />
          ),
          drawerActiveBackgroundColor: PRIMARY.lighter,
          drawerActiveTintColor: PRIMARY.main,
          drawerInactiveTintColor: GREY[500],
          // drawerItemStyle:Style object for the single item, which can contain an icon and/or a label.
          // drawerLabelStyle: Style object to apply to the Text style inside content section which renders a label.
          // drawerStyle: {
          //   backgroundColor: "#c6cbef",
          //   width: 240,
          // },
          // drawerContentStyle:Style object for the wrapper view.
        }}
      />
    </Drawer.Navigator>
  );
};
