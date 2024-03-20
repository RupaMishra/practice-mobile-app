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
import LoadingOverlay from "../components/loaders/LoadingOverlay";
import HeaderWalletBalance from "../components/walletbalances/HeaderWalletBalance";
import { AntDesign } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  const { isLoading } = useSelector((store) => store.authNonPersist);

  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <LoadingOverlay isLoading={isLoading} />
      <View style={styles.avatar}>
        <Avatar.Image
          size={54}
          source={require("../assets/images/userPic.jpg")}
        />
        <View style={styles.nameText}>
          <MyText>{user?.name}</MyText>
          <MyText fontType={"regular"} style={{ flexWrap: "wrap" }}>
            {"ABC Private limited"}
          </MyText>
        </View>
        <AntDesign name="right" size={16} color="black" />
      </View>
      <Divider style={styles.divider} />
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
      <Divider style={styles.divider} />
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => dispatch(logoutApi())}
        >
          <MyText style={styles.drawerFooter}>LOGOUT</MyText>
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
        headerTitle: () => <HeaderWalletBalance />,
        headerStyle: { backgroundColor: PRIMARY.main },
        headerTintColor: COMMON.common.white,
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
  avatar: {
    margin: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PRIMARY.main + "20",
    borderRadius: 12,
  },
  nameText: {
    marginHorizontal: 12,
    flex: 1,
  },
  divider: { marginBottom: 12 },
  footerContainer: { padding: 24 },
  drawerFooter: { textAlign: "center" },
});
