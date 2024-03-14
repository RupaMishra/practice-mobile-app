import React from "react";
import {
  Dimensions,
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
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.formContainer}>
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
              // the below configs are set as default by avinash you can change it here as well
              // outlineStyle: { borderRadius: 4 },
              // contentStyle: { paddingVertical: 0 },
            }}
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
        <KeyboardAvoidingView
          style={styles.buttonContainer}
          behavior="position"
        >
          <MyButton
            title="LOGIN"
            allButtonProps={{
              rippleColor: "#ccc",
              // buttonColor: "#000814",
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
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  // },
  rootContainer: {
    height: Dimensions.get("window").height,
    paddingTop: 40,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
    // justifyContent: "center",
    // alignItems: "stretch",
  },
  buttonContainer: {
    flex: 1,
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
  },
  inputImage: {
    width: 5,
    height: 5,
  },
  textStyles: {
    fontSize: 26,
    // fontWeight: "bold",
  },
  // backgroundImage: {
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,
  // },
});
