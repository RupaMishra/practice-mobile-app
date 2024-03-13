// fontType can take these values
// regular: Dosis_400Regular,
// medium: Dosis_500Medium,
// semiBold: Dosis_600SemiBold,
// bold: Dosis_700Bold,
// extraBold: Dosis_800ExtraBold,

import React from "react";
import { StyleSheet, Text } from "react-native";

const MyText = ({ children, style, fontType }) => {
  const setFontType = () => {
    if (fontType === "regular") {
      return styles.regular;
    } else if (fontType === "medium") {
      return styles.medium;
    } else if (fontType === "semiBold") {
      return styles.semiBold;
    } else if (fontType === "bold") {
      return styles.bold;
    } else if (fontType === "extraBold") {
      return styles.extraBold;
    } else {
      return styles.medium;
    }
  };
  return <Text style={[setFontType(), style]}>{children}</Text>;
};

export default MyText;

const styles = StyleSheet.create({
  regular: {
    fontFamily: "regular",
  },
  medium: {
    fontFamily: "medium",
  },
  semiBold: {
    fontFamily: "semiBold",
  },
  bold: {
    fontFamily: "bold",
  },
  extraBold: {
    fontFamily: "extraBold",
  },
});
