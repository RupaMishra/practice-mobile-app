import { createDrawerNavigator } from "@react-navigation/drawer";
import MyText from "../components/texts/MyText";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { COMMON, GREY, PRIMARY } from "../constants/colors";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { logoutApi } from "../features/auth/authNonPersistSlice";
import LoadingOverlay from "../components/loaders/LoadingOverlay";
import Settings from "../screens/Settings";
import QRCode from "react-qr-code";
import MyIconButton from "../components/walletbalances/MyIconButton";
import { AntDesign } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import BottomTabsNavigation from "./BottomTabsNavigation";
import useTheme from "../theme/useTheme";

const CustomDrawer = (props) => {
  const { navigator } = props;
  const { isLoading } = useSelector((store) => store.authNonPersist);

  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <LoadingOverlay isLoading={isLoading} />
      <Pressable
        style={styles.avatar}
        onPress={() => {
          navigator.navigate("MyProfile");
          navigator.dispatch(DrawerActions.closeDrawer());
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
      {/* <Divider style={styles.divider} /> */}

      <View style={styles.qrCode}>
        <QRCode
          value={
            "upi://pay?pa=ipay.133876.53494@icici&pn=${GYANENDER LAMBA}&cu=INR"
          }
          size={206}
        />
      </View>

      <Divider style={styles.divider} />

      {/* this list is our side navigation */}
      <DrawerItemList {...props} />

      {/* / */}
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

      {/*  */}
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
  const navigator = useNavigation();
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawer {...props} navigator={navigator} />
      )}
      screenOptions={{
        // drawerContentStyle: { backgroundColor: PRIMARY.main },
        // headerTitle: () => <HeaderWalletBalance />,

        headerShadowVisible: false,
        headerStyle: { backgroundColor: PRIMARY.main },
        headerTintColor: COMMON.common.white,
        sceneContainerStyle: {
          backgroundColor: theme.background.default,
        },
        // drawerContentStyle: { backgroundColor: PRIMARY.main },
        // headerTitle: () => <HeaderWalletBalance />,

        headerRight: ({ tintColor }) => (
          <View style={styles.headerRightContainer}>
            <MyIconButton
              icon={<Ionicons name="qr-code-outline" size={24} color="white" />}
              size={24}
              color={tintColor}
              onPress={() => navigator.navigate("QrCode")}
              innerStyle={styles.headerRightIcon}
            ></MyIconButton>
            <MyIconButton
              icon={<Ionicons name="notifications" size={24} color="white" />}
              size={24}
              color={tintColor}
              onPress={() => navigator.navigate("Notification")}
              innerStyle={styles.headerRightIcon}
            ></MyIconButton>
          </View>
        ),
      }}
    >
      <Drawer.Screen
        name="Welcome"
        // component={WelcomeScreen}
        component={BottomTabsNavigation}
        options={{
          drawerLabel: ({ color }) => <MyText style={{ color }}>Home</MyText>,
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="home" />
            // <svg>
            //   <Avatar.Image
            //     source={require("../assets/svg/dashboard.svg")}
            //     size={size}
            //     style={{ backgroundColor: "#ffffff00" }}
            //   />
            // </svg>
            // <SvgUri
            //   width={50}
            //   height={50}
            //   uri={require("../assets/svg/dashboard.svg")} // Correct the syntax for the 'uri' prop
            //   style={styles.iconStyle}
            // />
            // <Dashboard />
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
        name="Add Balance"
        component={Settings}
        options={{
          drawerLabel: ({ color }) => (
            <MyText style={{ color }}>Add Balance</MyText>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="settings" />
          ),
          drawerActiveBackgroundColor: PRIMARY.main + "20",
          drawerActiveTintColor: PRIMARY.main,
          drawerInactiveTintColor: GREY[500],
        }}
      />
      <Drawer.Screen
        name="My Purchase"
        component={Settings}
        options={{
          drawerLabel: ({ color }) => (
            <MyText style={{ color }}>My Purchase</MyText>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="settings" />
          ),
          drawerActiveBackgroundColor: PRIMARY.main + "20",
          drawerActiveTintColor: PRIMARY.main,
          drawerInactiveTintColor: GREY[500],
        }}
      />
      <Drawer.Screen
        name="Account Ledger"
        component={Settings}
        options={{
          drawerLabel: ({ color }) => (
            <MyText style={{ color }}>Account Ledger</MyText>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="settings" />
          ),
          drawerActiveBackgroundColor: PRIMARY.main + "20",
          drawerActiveTintColor: PRIMARY.main,
          drawerInactiveTintColor: GREY[500],
        }}
      />
      <Drawer.Screen
        name="Production sale"
        component={Settings}
        options={{
          drawerLabel: ({ color }) => (
            <MyText style={{ color }}>Production Sale</MyText>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="settings" />
          ),
          drawerActiveBackgroundColor: PRIMARY.main + "20",
          drawerActiveTintColor: PRIMARY.main,
          drawerInactiveTintColor: GREY[500],
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
  headerRightIcon: { backgroundColor: PRIMARY.main, paddingHorizontal: 4 },
  drawerFooter: { marginLeft: 16, fontSize: 14, color: GREY[700] },
  userName: {
    fontSize: 12,
    flexWrap: "wrap",
    textTransform: "capitalize",
  },
  qrCode: {
    alignSelf: "center",
    padding: 18,
    borderRadius: 8,
    borderWidth: 0.2,
    marginBottom: 12,
  },
  headerRightContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
