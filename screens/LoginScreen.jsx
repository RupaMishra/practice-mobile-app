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
import InputRhf from "../components/inputfields/InputRhf";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyText from "../components/texts/MyText";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { GREY, PRIMARY } from "../constants/colors";
import Screen from "../components/screen/Screen";
import { Ionicons } from "@expo/vector-icons";
import { ApiEndPoints } from "../network/ApiEndpoints";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("password is required"),
});
const defaultValues = { username: "9999442202", password: "Pragya@131023" };

const LoginScreen = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const switchToSignup = () => {
    navigation.replace("Signup");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const login = async (data) => {
    try {
      const resp = await dispatch(loginUser(data)).unwrap();
      if (resp.data === "TPIN") {
        navigation.navigate("Tpin", {
          apiEnd: ApiEndPoints.VERIFY_TPIN,
          onSuccessScreen: "Welcome",
          onFailedScreen: "",
          data: data,
        });
      }
    } catch (error) {}
  };

  return (
    <Screen isLoading={false} loadingMsg={"keep loading"}>
      <View style={styles.rootContainer}>
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

              <InputRhf
                name="username"
                control={control}
                errors={errors}
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
              <InputRhf
                name="password"
                control={control}
                errors={errors}
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
              // disabled: true,
              onPress: handleSubmit(login),
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
    marginTop: 84,
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
