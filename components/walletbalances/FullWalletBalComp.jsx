import React from "react";
import { StyleSheet, View } from "react-native";
import MyText from "../texts/MyText";

const FullWalletBalComp = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.walletContainer}>
        <View style={styles.walletBalance}>
          <MyText>Main Wallet</MyText>
        </View>
        <View style={styles.walletBalance}>
          <MyText>Secondary Wallet</MyText>
        </View>
      </View>
    </View>
  );
};

export default FullWalletBalComp;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  walletContainer: { flexDirection: "row", padding: 8 },
  walletBalance: {
    flex: 1,
    alignItems: "center",
  },
});
