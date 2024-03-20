// rippleColor="#ccc"
// mode={}  'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'
// onPress={onPressHandler}
// buttonColor="#000814"
// textColor="white"
// dark={}  true / false Whether the color is a dark color. A dark button will render light text and vice-versa.
// loading boolean
// icon
// disabled
// uppercase
// background={styles.ripple} (FOR RIPPLE STYLE)
// contentStyle  Style of button's inner content. Use this prop to apply custom height and width and to set the icon on the right with flexDirection: 'row-reverse'.
// labelStyle style object for text of the button
// theme : ThemeProp

import React, { forwardRef } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { PRIMARY } from "../../constants/colors";

const MyButton = forwardRef(function MyButton(
  { title, passedstyle, allButtonProps },
  ref = ""
) {
  return (
    <Button
      ref={ref}
      focusable
      style={[styles.button, passedstyle]}
      buttonColor={allButtonProps.mode !== "text" && PRIMARY.dark}
      {...allButtonProps}
      labelStyle={{
        ...allButtonProps.labelStyle,
        ...styles.buttonFont,
      }}
    >
      {title}
    </Button>
  );
});
MyButton.displayName = "MyButton";
export default MyButton;

const styles = StyleSheet.create({
  button: { borderRadius: 6 },
  buttonFont: { fontFamily: "medium" },
});

// regular: Dosis_400Regular,
// medium: Dosis_500Medium,
// semiBold: Dosis_600SemiBold,
// bold: Dosis_700Bold,
// extraBold: Dosis_800ExtraBold,
