import React from "react";
import { StyleSheet, View } from "react-native";
import MyText from "../texts/MyText";
import { COMMON } from "../../constants/colors";
import MyButton from "../buttons/MyButton";

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
        <MyButton
          title="Qr Code"
          allButtonProps={{
            rippleColor: "#ccc",
            mode: "contained",
            dark: true,
            // onPress: login,
            labelStyle: { fontSize: 20 },
            contentStyle: {
              paddingVertical: 8,
            },
          }}
          passedstyle={styles.myButtons}
        />
        <MyButton
          title="Bank Transfer"
          allButtonProps={{
            rippleColor: "#ccc",
            mode: "contained",
            dark: true,
            //   disabled: isLoading,
            //   onPress: handleSubmit(login),
            // onPress: login,
            labelStyle: { fontSize: 20 },
            contentStyle: {
              paddingVertical: 8,
            },
          }}
          passedstyle={styles.myButtons}
        />
        <MyButton
          title="Waller Transfer"
          allButtonProps={{
            rippleColor: "#ccc",
            mode: "contained",
            dark: true,
            //   disabled: isLoading,
            //   onPress: handleSubmit(login),
            // onPress: login,
            labelStyle: { fontSize: 20 },
            contentStyle: {
              paddingVertical: 8,
            },
          }}
          passedstyle={styles.myButtons}
        />
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
  myButtons: {},
});
