import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { PRIMARY } from "../../constants/colors";

const MyIconButton = ({ children, onPress, icon, style, innerStyle }) => {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, innerStyle, styles.pressed]
            : [styles.buttonInnerContainer, innerStyle]
        }
        onPress={onPress}
        // android_ripple={{ color: Colors.primary600 }}
      >
        <View style={styles.iconView}>{icon}</View>
        {children && <Text style={styles.buttonText}>{children}</Text>}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: PRIMARY.dark,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 1,
  },
  iconView: {
    // marginTop: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    // marginTop: 4,
  },
  // dedicated style for ios
  pressed: {
    opacity: 0.75,
  },
});
export default MyIconButton;
