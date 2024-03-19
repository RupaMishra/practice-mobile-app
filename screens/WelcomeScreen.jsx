import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeBottomSheet from "../components/bottomsheet/WelcomeBottomSheet";

const WelcomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <WelcomeBottomSheet />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
