import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import MyText from "../texts/MyText";
import { COMMON, GREY } from "../../constants/colors";
import MyIconButton from "./MyIconButton";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY } from "../../theme/palette";
import { Fontisto } from "@expo/vector-icons";

const FullWalletBalComp = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/wall.png")}
      resizeMode="cover"
      style={styles.imageBackGrnd}
      imageStyle={styles.imageStyles}
    >
      <View style={styles.rootContainer}>
        <View style={styles.walletContainer}>
          <View style={styles.walletBalance}>
            {/* <MyIconButton
              icon={<AntDesign name="wallet" size={17} color="white" />}
              innerStyle={styles.innerStyle}
            ></MyIconButton> */}
            <MyIconButton
              icon={<Fontisto name="wallet" size={17} color="white" />}
              innerStyle={styles.innerStyle}
            ></MyIconButton>
            <View style={styles.walletHeadingAmtContainer}>
              <MyText style={styles.walletHeading} fontType="regular">
                Main
              </MyText>
              <MyText style={styles.walletText} fontType="regular">
                ₹ 44,3654
              </MyText>
            </View>
          </View>
          <View style={styles.walletBalance}>
            <MyIconButton
              icon={<Fontisto name="wallet" size={17} color="white" />}
              innerStyle={styles.innerStyle}
            ></MyIconButton>
            <View style={styles.walletHeadingAmtContainer}>
              <MyText style={styles.walletHeading} fontType="regular">
                Collection
              </MyText>
              <MyText style={styles.walletText} fontType="regular">
                ₹ 30,000
              </MyText>
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <MyIconButton
            style={styles.firstMyButton}
            innerStyle={styles.innerButtonStyle}
            icon={
              <Ionicons name="qr-code-outline" size={21} color={GREY[500]} />
            }
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
    </ImageBackground>
  );
};

export default FullWalletBalComp;
const styles = StyleSheet.create({
  imageBackGrnd: { flex: 1 },
  rootContainer: {
    justifyContent: "center",
    height: "30%",
  },
  imageStyles: {
    height: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  walletContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8,
  },
  walletBalance: {
    // flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  walletHeading: {
    color: GREY[400],
    fontSize: 13,
    marginVertical: 2,
  },
  walletText: {
    color: COMMON.common.white,
    fontSize: 16,
    marginVertical: 2,
  },
  walletHeadingAmtContainer: {
    marginHorizontal: 8,
  },
  buttonsContainer: {
    // flex: 1,
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
  innerStyle: {
    backgroundColor: PRIMARY.light + "30",
    paddingHorizontal: 9,
    paddingVertical: 10,
  },
});
