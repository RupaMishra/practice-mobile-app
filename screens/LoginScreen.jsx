import React, { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import MyButton from "../components/buttons/MyButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import MyText from "../components/texts/MyText";
import { useDispatch, useSelector } from "react-redux";
import { GREY, PRIMARY } from "../constants/colors";
import Screen from "../components/screen/Screen";
import { Ionicons } from "@expo/vector-icons";
import { ApiEndPoints } from "../network/ApiEndpoints";
import { loginUser } from "../features/auth/authNonPersistSlice";
import FormProvider from "../components/hook-forms/FormProvider";
import { PATTERNS } from "../utils/validation";

const schema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("password is required")
    .matches(
      PATTERNS.PASSWORD,
      "Password must be 8-24 characters, include a number, and have at least one special character (!@#$%^&*)."
    ),
});
const defaultValues = { username: "9999999999", password: "Pragya@131023" };

const LoginScreen = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.authNonPersist);

  const switchToSignup = () => {
    navigation.replace("Signup");
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const login = async (data) => {
    // navigation.navigate("SuccessTxn");
    try {
      const resp = await dispatch(loginUser(data)).unwrap();
      if (resp.data === "TPIN" || resp.data === "MPIN") {
        navigation.navigate("Tpin", {
          apiEnd: ApiEndPoints.VERIFY_TPIN,
          onSuccessScreen: "Drawer",
          onFailedScreen: "",
          data: data,
        });
      }
    } catch (error) {}
  };

  return (
    <Screen isLoading={isLoading} loadingMsg={"Proceed to login"}>
      <View style={styles.rootContainer}>
        <FormProvider methods={methods}>
          <View style={styles.formContainer}>
            <ScrollView>
              <KeyboardAvoidingView behavior="position">
                <ImageBackground
                  source={require("../assets/images/small-logo.png")}
                  style={styles.logoImage}
                />
                <MyText style={styles.textStyles} fontType="semiBold">
                  Enter your mobile number
                </MyText>
                <InputRHF
                  name="username"
                  textInputConfig={{
                    placeholder: "Mobile",
                    mode: "outlined",
                    keyboardType: "number-pad",
                  }}
                  leftImg={
                    <View style={styles.txtAsset}>
                      <ImageBackground
                        source={require("../assets/images/input-flag.png")}
                        style={styles.textImg}
                      />
                      <MyText style={styles.imgText}>+91</MyText>
                    </View>
                  }
                />
                <InputRHF
                  name="password"
                  textInputConfig={{
                    placeholder: "Password",
                    mode: "outlined",
                    secureTextEntry: showPass && showPass,
                  }}
                  rightImg={
                    <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                      <Ionicons
                        name={showPass ? "eye-off" : "eye"}
                        size={24}
                        color={PRIMARY.main}
                      />
                    </TouchableOpacity>
                  }
                />
                <MyButton
                  title="Sign up"
                  allButtonProps={{
                    rippleColor: "#ccc",
                    mode: "text",
                    onPress: switchToSignup,
                    labelStyle: { fontSize: 16, color: "#000814" },
                    contentStyle: {
                      paddingVertical: 0,
                      paddingHorizontal: 16,
                    },
                  }}
                  passedstyle={styles.signUpButtonMargin}
                />
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
          <View style={styles.buttonContainer}>
            <MyButton
              title="LOGIN"
              allButtonProps={{
                rippleColor: "#ccc",
                mode: "contained",
                dark: true,
                disabled: isLoading,
                onPress: handleSubmit(login),
                labelStyle: { fontSize: 20 },
                contentStyle: {
                  paddingVertical: 8,
                },
              }}
              passedstyle={styles.btnStyle}
            />
          </View>
        </FormProvider>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
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
  signUpButtonMargin: {
    marginVertical: 0,
  },
  logoImage: {
    width: 50,
    height: 50,
    marginTop: 64,
    marginBottom: 12,
  },
  textStyles: {
    fontSize: 26,
  },
  textImg: {
    width: 28,
    height: 28,
  },
  imgText: {
    fontSize: 18,
    paddingHorizontal: 8,
    color: GREY[700],
  },
  txtAsset: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
