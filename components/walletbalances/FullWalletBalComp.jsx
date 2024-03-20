import React from "react";
import { StyleSheet, View } from "react-native";
import MyText from "../texts/MyText";
import { COMMON, GREY } from "../../constants/colors";
import MyIconButton from "./MyIconButton";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FullWalletBalComp = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.walletContainer}>
        <View style={styles.walletBalance}>
          <MyText style={styles.walletHeading}>Main Wallet</MyText>
          <MyText style={styles.walletText}>₹ 44,3654</MyText>
        </View>
        <View style={styles.walletBalance}>
          <MyText style={styles.walletHeading}>Secondary Wallet</MyText>
          <MyText style={styles.walletText}>₹ 30,000</MyText>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <MyIconButton
          style={styles.firstMyButton}
          innerStyle={styles.innerButtonStyle}
          icon={<Ionicons name="qr-code-outline" size={21} color={GREY[500]} />}
        >
          Qr code
        </MyIconButton>
        <MyIconButton
          style={styles.secMyButton}
          innerStyle={styles.innerButtonStyle}
          icon={
            <MaterialCommunityIcons
              name="bank-outline"
              size={21}
              color={GREY[500]}
            />
          }
        >
          Settlement
        </MyIconButton>
        <MyIconButton
          style={styles.thirdMyButton}
          innerStyle={styles.innerButtonStyle}
          icon={
            <MaterialCommunityIcons
              name="wallet-outline"
              size={21}
              color={GREY[500]}
            />
          }
        >
          Transfer
        </MyIconButton>
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
  walletHeading: {
    color: COMMON.common.white,
  },
  walletText: {
    color: COMMON.common.white,
    fontSize: 24,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },

  firstMyButton: { flex: 1, borderBottomLeftRadius: 28 },
  secMyButton: { flex: 1 },
  thirdMyButton: { flex: 1, borderBottomRightRadius: 28 },
  innerButtonStyle: {
    // paddingtop: 20,
    height: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
