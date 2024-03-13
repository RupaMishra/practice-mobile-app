import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SignupScreen = ({ navigation }) => {
  const switchToLogin = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.signUpContainer}>
        <Text>Sign Up</Text>
        <Button onPress={switchToLogin} title="Login" />
      </View>
    </View>
  );
};

export default SignupScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  signUpContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
