import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Screen from "../components/screen/Screen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import MyText from "../components/texts/MyText";
import MyButton from "../components/buttons/MyButton";

const FailedTxnScreen = ({ navigation }) => {
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
            source={require("../assets/animation/failedTxn.json")}
            autoPlay={true}
            loop
            style={styles.lottieView}
          />
        </View>
        <View style={styles.dataContainer}>
          <ImageBackground
            source={require("../assets/images/reciept_bg.png")}
            imageStyle={styles.imageStyles}
            style={styles.imageStyleTag}
          >
            <MyText></MyText>
          </ImageBackground>
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

export default FailedTxnScreen;

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
    paddingHorizontal: 32,
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
    top: -50,
  },
  lottieView: {
    height: 200,
    width: 200,
  },
});
