import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";
import MyText from "../components/texts/MyText";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { COMMON, GREY, PRIMARY } from "../constants/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { logoutApi } from "../features/auth/authNonPersistSlice";

const CustomDrawer = (props) => {
  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 24 }}>
        <Avatar.Icon size={54} icon="folder" />
        <MyText style={{ marginTop: 12 }}>{user?.name}</MyText>
        <MyText fontType={"regular"}>{"ABC Private limited"}</MyText>
      </View>
      <Divider style={{ marginBottom: 12 }} />
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
      <Divider style={{ marginTop: 12 }} />
      <View style={{ padding: 24 }}>
        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => dispatch(logoutApi())}
        >
          <MyText style={{ textAlign: "center" }}>LOGOUT</MyText>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: PRIMARY.main },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: PRIMARY.main },
        drawerContentStyle: { backgroundColor: PRIMARY.main },
      }}
    >
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
      <Drawer.Screen
        name="Settings"
        component={WelcomeScreen}
        options={{
          drawerLabel: ({ color }) => (
            <MyText style={{ color }}>Settings</MyText>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="settings" />
          ),
          drawerActiveBackgroundColor: PRIMARY.lighter,
          drawerActiveTintColor: PRIMARY.main,
          drawerInactiveTintColor: GREY[500],
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  logoutbtn: {
    backgroundColor: "white",
    shadowColor: COMMON.common.black,
    shadowOffset: {
      width: 11,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 6,
    padding: 12,
    borderRadius: 8,
  },
});
