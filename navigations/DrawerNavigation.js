import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";
import MyText from "../components/texts/MyText";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { COMMON, GREY, PRIMARY, SECONDARY } from "../constants/colors";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { logoutApi } from "../features/auth/authNonPersistSlice";
import LoadingOverlay from "../components/loaders/LoadingOverlay";
// import HeaderWalletBalance from "../components/walletbalances/HeaderWalletBalance";
import Settings from "../screens/Settings";
import MyIconButton from "../components/walletbalances/MyIconButton";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const { isLoading } = useSelector((store) => store.authNonPersist);

  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const navigator = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <LoadingOverlay isLoading={isLoading} />
      <Pressable
        style={styles.avatar}
        onPress={() => {
          navigator.navigate("MyProfile");
        }}
      >
        <Avatar.Image
          size={54}
          source={require("../assets/images/userPic.jpg")}
        />
        <View style={styles.nameText}>
          <MyText style={styles.userName} fontType="bold">
            {user?.name}
          </MyText>
          <MyText fontType={"regular"} style={styles.userName}>
            {"ABC Private limited"}
          </MyText>
        </View>
        <AntDesign name="right" size={16} color="black" />
      </Pressable>
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
          onPress={() => dispatch(logoutApi())}
          style={styles.logoutbtn}
        >
          <AntDesign name="logout" size={18} color={GREY[700]} />
          <MyText style={styles.drawerFooter} fontType={"bold"}>
            LOGOUT
          </MyText>
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
        // headerTitle: () => <HeaderWalletBalance />,
        headerRight: ({ tintColor }) => (
          <MyIconButton
            icon={<Ionicons name="notifications" size={24} color="white" />}
            size={24}
            color={tintColor}
            onPress={() => {
              console.log("notification");
            }}
            innerStyle={styles.headerRightIcon}
          ></MyIconButton>
        ),

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
          drawerActiveBackgroundColor: PRIMARY.main + "20",
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
        component={Settings}
        options={{
          drawerLabel: ({ color }) => (
            <MyText style={{ color }}>Settings</MyText>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="settings" />
          ),
          drawerActiveBackgroundColor: PRIMARY.main + "20",
          drawerActiveTintColor: PRIMARY.main,
          drawerInactiveTintColor: GREY[500],
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  logoutbtn: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    margin: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  nameText: {
    marginHorizontal: 12,
    flex: 1,
  },
  divider: { marginBottom: 12 },
  footerContainer: { padding: 24 },
  headerRightIcon: { backgroundColor: PRIMARY.main },
  drawerFooter: { marginLeft: 16, fontSize: 14, color: GREY[700] },
  userName: {
    fontSize: 12,
    flexWrap: "wrap",
    textTransform: "capitalize",
  },
});
