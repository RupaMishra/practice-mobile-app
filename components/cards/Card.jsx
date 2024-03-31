import React from "react";
import { StyleSheet, View } from "react-native";
import useTheme from "../../theme/useTheme";
import MyText from "../texts/MyText";

const Card = ({ children, title = "", bgColor = "default", style }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    card: {
      backgroundColor:
        bgColor === "default" ? theme.background.default : bgColor,
      marginTop: theme.spacing.small,
      marginBottom: theme.spacing.oneSpace,
      paddingBottom: 8,
    },
    textcontainer: {
      padding: 6,
    },
    contentContainer: {
      marginTop: theme.spacing.small,
      flexWrap: "wrap",
    },
  });

  return (
    <View style={[styles.card, style]}>
      <View style={styles.textcontainer}>
        <MyText fontType="semiBold">{title}</MyText>
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

export default Card;
