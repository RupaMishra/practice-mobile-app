import React from "react";
import { StyleSheet, Text } from "react-native";
import { Text as RnText } from "react-native-ui-lib";
import fonts from "../../theme/fonts";
import useTheme from "../../theme/useTheme";

const fontStyles = {
  regular: fonts.regular,
  regularItalic: fonts.regularItalic,
  medium: fonts.medium,
  mediumItalic: fonts.mediumItalic,
  semiBold: fonts.semiBold,
  semiBoldItalic: fonts.semiBoldItalic,
  bold: fonts.bold,
  boldItalic: fonts.boldItalic,
  extraBold: fonts.extraBold,
  extraBoldItalic: fonts.extraBoldItalic,
  bold900: fonts.bold900,
  bold900Italic: fonts.bold900Italic,
};

const MyText = ({ children, style, fontType, rnText = false }) => {
  const theme = useTheme();
  const selectedFontStyle = fontStyles[fontType] || fonts?.regular; // Default to regular if fontType is not recognized
  if (rnText) {
    return (
      <RnText
        style={[
          selectedFontStyle,
          style,
          style?.fontSize || myFontSize.fontsize,
          { color: style?.color || theme.text.primary },
        ]}
      >
        {children}
      </RnText>
    );
  } else
    return (
      <Text
        style={[
          selectedFontStyle,
          style,
          style?.fontSize || myFontSize.fontsize,
          { color: style?.color || theme.text.primary },
        ]}
      >
        {children}
      </Text>
    );
};

export default MyText;
const myFontSize = StyleSheet.create({
  fontsize: {
    fontSize: 19,
  },
});
