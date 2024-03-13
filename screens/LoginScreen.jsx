import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import MyButton from "../components/buttons/MyButton";
import InputRhf from "../components/inputfields/InputRhf";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyText from "../components/texts/MyText";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

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
    <ImageBackground
      source={require("../assets/images/loginBg.png")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.rootContainer}>
        <View style={[styles.signUpContainer]}>
          <MyText style={styles.hiStyles} fontType="bold">
            Hi,
          </MyText>
        </View>
        <View style={styles.signUpContainer}>
          <MyText style={styles.textStyles}>Login</MyText>
          <InputRhf
            name="username"
            control={control}
            errors={errors}
            textInputConfig={{
              placeholder: "Username",
              mode: "outlined",
              outlineStyle: { borderColor: "white", borderRadius: 12 },
              contentStyle: { paddingLeft: 24 },
              style: { borderRadius: 8 },
            }}
          />
          <InputRhf
            name="password"
            control={control}
            errors={errors}
            textInputConfig={{
              placeholder: "Password",
              mode: "outlined",
              outlineStyle: { borderColor: "white", borderRadius: 12 },
              contentStyle: { paddingLeft: 24 },
              style: { borderRadius: 8 },
            }}
          />
          <MyButton
            title="Login"
            allButtonProps={{
              rippleColor: "#ccc",
              buttonColor: "#000814",
              mode: "elevated",
              dark: true,

              onPress: handleSubmit(login),
              labelStyle: { fontSize: 16 },
              contentStyle: {
                paddingVertical: 8,
                paddingHorizontal: 16,
              },
            }}
            passedstyle={styles.buttonMargin}
          />
          <MyButton
            title="Sign up"
            allButtonProps={{
              rippleColor: "#ccc",
              // buttonColor: "#000814",
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
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  textStyles: {
    fontSize: 24,
    // fontWeight: "bold",
  },
  hiStyles: {
    fontSize: 100,
    color: "#4C2AC6",
  },
  signUpContainer: {
    padding: 16,
    marginHorizontal: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "stretch",
  },
  buttonMargin: {
    marginTop: 15,
  },
  signUpButtonMargin: {
    marginVertical: 5,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});
