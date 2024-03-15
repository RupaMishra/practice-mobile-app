import React from "react";
import MyText from "../components/texts/MyText";
import { ImageBackground, StyleSheet, View } from "react-native";
import Screen from "../components/screen/Screen";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import MyButton from "../components/buttons/MyButton";
import LottieView from "lottie-react-native";
import { COMMON, GREY, PRIMARY } from "../constants/colors";
// import { ScaledSheet } from "react-native-size-matters";

const SuccessTxn = ({ navigation }) => {
  return (
    <Screen style={styles.rootContainer}>
      <View style={styles.headerSize}>
        <View style={styles.headerStyle}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <AntDesign name="questioncircleo" size={20} color="black" />
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.lottieContainer}>
          <LottieView
            source={require("../assets/animation/success.json")}
            autoPlay={true}
            loop
            style={styles.lottieView}
          />

          {/* <AntDesign name="checkcircle" size={84} color="black" /> */}
        </View>
        <View style={styles.dataContainer}>
          {/* <ImageBackground
            source={require("../assets/images/reciept_bg.png")}
            imageStyle={styles.imageStyles}
            style={styles.imageStyleTag}
          > */}

          <View style={[styles.whiteStripContainer]}>
            <MyText
              style={[styles.textStyle, styles.upperText]}
              fontType="bold"
            >
              Great!
            </MyText>
            <MyText
              style={[styles.textStyle, styles.centerText]}
              fontType="bold"
            >
              Mobile Recharge Success
            </MyText>
            <MyText style={[styles.textStyle, styles.lowerText]}>
              Below is your recharge summary
            </MyText>
            <View style={styles.dashedBorder}></View>
          </View>
          {/* </ImageBackground> */}
        </View>
        <View>
          <MyButton
            title="LOGIN"
            allButtonProps={{
              rippleColor: "#ccc",
              mode: "contained",
              dark: true,
              // disabled: true,

              // onPress: login,
              labelStyle: { fontSize: 20 },
              contentStyle: {
                paddingVertical: 8,
              },
            }}
            passedstyle={styles.btnStyle}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SuccessTxn;

const styles = StyleSheet.create({
  rootContainer: { backgroundColor: "#EBF1FD" },
  headerSize: { height: 100, paddingTop: 35 },
  headerStyle: {
    backgroundColor: "#ffffff00",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  bodyContainer: {
    flex: 1,
    position: "relative",
  },
  dataContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  imageStyles: {
    borderRadius: 12,
    resizeMode: "contain",
  },
  imageStyleTag: {
    width: "100%",
    height: "100%",
  },
  lottieContainer: {
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
    top: -60,
  },
  lottieView: {
    height: 200,
    width: 200,
  },
  whiteStripContainer: {
    alignSelf: "center",
    position: "absolute",
    paddingTop: 110,
    paddingHorizontal: 24,
    backgroundColor: COMMON.common.white,
    minHeight: 500,
    borderRadius: 16,
  },
  textStyle: {
    textAlign: "center",
    marginVertical: 4,
  },
  upperText: { color: PRIMARY.light },
  centerText: {
    fontSize: 21.5,
  },
  lowerText: {
    color: GREY[500],
  },
  dashedBorder: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: GREY[600],
    marginVertical: 28,
  },
});
