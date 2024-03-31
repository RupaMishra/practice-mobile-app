import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeBottomSheet from "../components/bottomsheet/WelcomeBottomSheet";
import { PRIMARY } from "../constants/colors";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const WelcomeScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={[styles.rootContainer, { marginBottom: tabBarHeight + 30 }]}>
      <WelcomeBottomSheet />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: PRIMARY.main,
  },
});
