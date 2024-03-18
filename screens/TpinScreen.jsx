import React, { useState } from "react";
import Screen from "../components/screen/Screen";
import MyText from "../components/texts/MyText";
import { Dimensions, StyleSheet, View } from "react-native";
import MyButton from "../components/buttons/MyButton";
import { PRIMARY } from "../constants/colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import PinInput from "../components/pinInput/PinInput";
import { useDispatch } from "react-redux";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { verifyTpin } from "../features/auth/authNonPersistSlice";
import { authenticate } from "../features/auth/authSlice";

const TpinScreen = ({ route: { params }, navigation }) => {
  const [tpin, setTpin] = useState("");
  const apiEnd = params?.apiEnd;
  const onSuccessScreen = params?.onSuccessScreen;
  const onFailedScreen = params?.onFailedScreen;
  const data = params?.data;
  const dispatch = useDispatch();

  const verify = async () => {
    data.tpin = tpin;

    try {
      const resp = await dispatch(
        verifyTpin({ payload: data, apiEnd })
      ).unwrap();

      dispatch(authenticate(resp.data));

      if (onSuccessScreen) {
        navigation.navigate(onSuccessScreen);
      }
    } catch (error) {
      if (onFailedScreen) {
        navigation.navigate(onFailedScreen);
      }
    }
  };
  return (
    <Screen>
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
      <View style={styles.formContainer}>
        <MyText fontType={"bold"} style={styles.msgTxt}>
          Enter the 6 digit TPIN to login
        </MyText>
        <View style={{ marginTop: 24 }}>
          <PinInput
            onChange={(value) => {
              setTpin(value);
            }}
            isOtp={false}
          />
        </View>

        <View style={{ marginTop: 42 }}>
          <MyText fontType={"bold"} style={{ fontSize: 16 }}>
            Forgot TPIN?
          </MyText>
          <View style={styles.otherView}>
            <MaterialCommunityIcons
              name="reload"
              color={PRIMARY.light}
              size={18}
            />
            <MyText fontType={"bold"} style={styles.optionTxt}>
              Reset TPIN
            </MyText>
          </View>
          <View style={styles.otherView}>
            <FontAwesome name="edit" color={PRIMARY.light} size={18} />
            <MyText fontType={"bold"} style={styles.optionTxt}>
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
            disabled: !tpin,
            onPress: verify,
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
  headerSize: {
    // height: 100,
    paddingTop: (Dimensions.get("screen").height / 100) * 5,
    // paddingTop: 35,
  },
  headerStyle: {
    backgroundColor: "white",
    // height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 22,
  },
  msgTxt: { fontSize: 28 },
  otherView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 12,
  },
  optionTxt: { fontSize: 12, paddingLeft: 12, color: PRIMARY.light },
});
