/* eslint-disable no-unused-vars */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Transactions from "../screens/Transactions";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import WelcomeScreen from "../screens/WelcomeScreen";
import { COMMON, GREY, PRIMARY } from "../constants/colors";
import { Pressable, StyleSheet, View } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import MyText from "../components/texts/MyText";
import fonts from "../theme/fonts";
import QrScannerScreen from "../screens/QrScannerScreen";
import { useNavigation } from "@react-navigation/native";
const BottomTabs = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.customTouchable, styles.pressedOpacity]
          : [styles.customTouchable]
      }
      onPress={onPress}
    >
      <View style={[styles.customButtonView]}>{children}</View>
    </Pressable>
  );
};

const BottomTabsNavigation = () => {
  const navigator = useNavigation();
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          padding: 0,
          bottom: 15,
          left: 10,
          right: 10,
          elevation: 0,
          borderRadius: 15,
          height: 55,
          ...styles.shadow,
        },
      }}
      initialRouteName="Root"
    >
      <BottomTabs.Screen
        name="Root"
        component={WelcomeScreen}
        options={{
          tabBarActiveTintColor: PRIMARY.main,
          tabBarIcon: ({ color, size, focused }) => (
            <>
              <Ionicons name="home" size={20} color={color} />
              <MyText style={{ color, ...styles.label }}>Home</MyText>
            </>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Beneficiary"
        component={Transactions}
        options={{
          tabBarActiveTintColor: PRIMARY.main,
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="receipt-outline" size={20} color={color} />
              <MyText style={{ color, ...styles.label }} fontType={"regular"}>
                label
              </MyText>
            </>
          ),
        }}
      />
      <BottomTabs.Screen
        name="QrScanner"
        component={QrScannerScreen}
        options={{
          tabBarStyle: {display:'none'},
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              size={35}
              name="qr-code-scanner"
              color={COMMON.common.white}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              
            />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Creditreq"
        component={Transactions}
        options={{
          tabBarActiveTintColor: PRIMARY.main,
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="receipt-outline" size={20} color={color} />
              <MyText style={{ color, ...styles.label }} fontType={"regular"}>
                label
              </MyText>
            </>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarActiveTintColor: PRIMARY.main,
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="receipt-outline" size={20} color={color} />
              <MyText style={{ color, ...styles.label }} fontType={"regular"}>
                label
              </MyText>
            </>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigation;

const styles = StyleSheet.create({
  shadow: {
    // shadowColor: "#7F5DF0",
    shadowColor: COMMON.common.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  pressedOpacity: { opacity: 0.9 },
  customTouchable: {
    top: -8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#ffffff00",
    flex: 1.5,
    // this is the main with and height of custom button
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  customButtonView: {
    // flex: 1.5, for a unique design add this
    // this is the with and height for providing shadow to custom button
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PRIMARY.main,
  },
  label: { fontSize: 12 },
});
