import React from "react";
import { StyleSheet, View } from "react-native";
import MyText from "../texts/MyText";
import { COMMON } from "../../constants/colors";

const HeaderWalletBalance = () => {
  return (
    <View>
      <MyText style={styles.walletBalance}> ₹ 44,365 </MyText>
    </View>
  );
};

export default HeaderWalletBalance;
const styles = StyleSheet.create({
  walletBalance: {
    color: COMMON.common.white,
    fontSize: 20,
  },
});
