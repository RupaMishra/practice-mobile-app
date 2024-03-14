import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
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
import LoadingOverlay from "../components/loaders/LoadingOverlay";
import { GREY } from "../constants/colors";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("password is required"),
});

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const switchToSignup = () => {
    navigation.replace("Signup");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const login = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <View style={styles.rootContainer}>
      <LoadingOverlay isLoading={false} message="Proceed to login" />
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
                placeholder: "Username",
                mode: "outlined",
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
              }}
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
      <View style={styles.buttonContainer} behavior="position">
        <MyButton
          title="LOGIN"
          allButtonProps={{
            rippleColor: "#ccc",
            mode: "contained",
            dark: true,

            onPress: handleSubmit(login),
            labelStyle: { fontSize: 20 },
            contentStyle: {
              paddingVertical: 8,
            },
          }}
          passedstyle={styles.buttonMargin}
        />
      </View>
    </View>
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
  buttonMargin: {
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
