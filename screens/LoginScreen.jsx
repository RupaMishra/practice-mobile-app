import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/buttons/MyButton";
import InputRhf from "../components/inputfields/InputRhf";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyText from "../components/texts/MyText";

const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("password is required"),
});

const LoginScreen = ({ navigation }) => {
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
            name="email"
            control={control}
            errors={errors}
            textInputConfig={{
              placeholder: "Email",
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

              onPress: switchToSignup,
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
