import React from "react";
import { View } from "react-native";
import MyText from "../components/texts/MyText";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Transactions = () => {
  const navigator = useNavigation();
  return (
    <View>
      <MyText>Transactions</MyText>
    </View>
  );
};

export default Transactions;
