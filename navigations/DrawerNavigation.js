import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";
import MyText from "../components/texts/MyText";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { GREY, PRIMARY } from "../constants/colors";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { useSelector } from 'react-redux';

const CustomDrawer = (props) => {
  const { isAuthenticated } = useSelector((store) => store.auth);

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Avatar.Icon size={104} icon="folder" />
        <MyText>{}</MyText>
      </View>
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
          drawerLabel: ({ color }) => <MyText style={{ color }}>Home</MyText>,
          drawerIcon: ({ color, size }) => (
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
