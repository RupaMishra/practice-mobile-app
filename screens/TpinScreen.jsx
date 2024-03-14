import React from "react";
import Screen from "../components/screen/Screen";
import MyText from "../components/texts/MyText";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MyButton from "../components/buttons/MyButton";
import { PRIMARY } from "../constants/colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import PinInput from "../components/pinInput/PinInput";

const TpinScreen = () => {
  return (
    <Screen>
      <View style={styles.formContainer}>
        <MyText fontType={"bold"} style={{ fontSize: 28 }}>
          Enter the 6 digit TPIN to login
        </MyText>
        <View style={{ marginTop: 24 }}>
          <PinInput
            onChange={(value) => {
              console.log("pin ", value);
            }}
            isOtp={false}
          />
        </View>

        <View style={{ marginTop: 42 }}>
          <MyText fontType={"bold"} style={{ fontSize: 16 }}>
            Forgot TPIN?
          </MyText>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <MaterialCommunityIcons
              name="reload"
              color={PRIMARY.light}
              size={18}
            />
            <MyText
              fontType={"bold"}
              style={{ fontSize: 12, paddingLeft: 12, color: PRIMARY.light }}
            >
              Reset TPIN
            </MyText>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <FontAwesome name="edit" color={PRIMARY.light} size={18} />
            <MyText
              fontType={"bold"}
              style={{ fontSize: 12, paddingLeft: 12, color: PRIMARY.light }}
            >
              Change Mobile Number
            </MyText>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          title="VERIFY"
          allButtonProps={{
            rippleColor: "#ccc",
            mode: "contained",
            dark: true,
            onPress: () => {},
            labelStyle: { fontSize: 20 },
            contentStyle: {
              paddingVertical: 8,
            },
          }}
          passedstyle={styles.btnStyle}
        />
      </View>
    </Screen>
  );
};

export default TpinScreen;
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
  btnStyle: {
    marginTop: 2,
    borderRadius: 0,
  },
});