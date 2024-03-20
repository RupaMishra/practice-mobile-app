import React, { useContext, useRef, useState } from "react";
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
import InputRHF from "../components/hook-forms/InputRHF";
import ThemeContext from "../contexts/ThemeContext";
import { Text } from "react-native-paper";
import useTheme from "../theme/useTheme";

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
  const { theme, toggleTheme } = useContext(ThemeContext);
  const color = useTheme();
  const [showPass, setShowPass] = useState(false);
  const t1 = useRef();
  const t2 = useRef();
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

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
  };

  return (
    <Screen isLoading={isLoading} loadingMsg={"Proceed to login"}>
      <View style={[styles.rootContainer]}>
        <FormProvider methods={methods}>
          <View style={styles.formContainer}>
            <ScrollView>
              <KeyboardAvoidingView behavior="position">
                <ImageBackground
                  source={require("../assets/images/small-logo.png")}
                  style={styles.logoImage}
                />
                <MyText
                  style={[styles.textStyles, { color: color.text.primary }]}
                  fontType="semiBold"
                >
                  Enter your mobile number
                </MyText>
                <InputRHF
                  ref={t1}
                  returnKeyType="next"
                  onSubmitEditing={() => t2.current && t2.current.focus()}
                  name="username"
                  leftImg={
                    <View style={styles.txtAsset}>
                      <ImageBackground
                        source={require("../assets/images/input-flag.png")}
                        style={styles.textImg}
                      />
                      <MyText style={styles.imgText}>+91</MyText>
                    </View>
                  }
                  textInputConfig={{
                    placeholder: "Mobile",
                    mode: "outlined",
                    keyboardType: "number-pad",
                  }}
                />
                <InputRHF
                  ref={t2}
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
                    mode: "text",
                    rippleColor: "#ccc",
                    onPress: switchToSignup,
                    labelStyle: { fontSize: 16, color: color.primary.darker },
                    contentStyle: {
                      paddingVertical: 0,
                      paddingHorizontal: 16,
                    },
                  }}
                  passedstyle={styles.signUpButtonMargin}
                />
                <TouchableOpacity
                  onPress={handleToggleTheme}
                  style={{
                    marginTop: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    backgroundColor: color.background.default,
                  }}
                >
                  <Text style={styles.button}>
                    Switch to {theme === "light" ? "Dark" : "Light"} Theme
                  </Text>
                </TouchableOpacity>
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
