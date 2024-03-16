import React from "react";
import { Text, View } from "react-native";

const WelcomeScreen = ({ route: { params } }) => {
  const data = params?.userData;
  console.log("user data ", data);
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

export default WelcomeScreen;
