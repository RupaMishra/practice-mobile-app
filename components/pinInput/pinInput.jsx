import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { GREY, PRIMARY } from "../../constants/colors";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

const PinInput = ({ isOtp, onChange }) => {
  const [password, setPassword] = useState("");

  return (
    <SmoothPinCodeInput
      password={!isOtp}
      mask="﹡"
      cellSize={42}
      codeLength={6}
      cellSpacing={6}
      animated={false}
      cellStyle={styles.borderStyle}
      cellStyleFocused={styles.focusedColor}
      value={password}
      textStyle={styles.txtStyle}
      onTextChange={(val) => {
        setPassword(val);
        if (val.length === 6) {
          if (onChange) onChange(val);
        } else {
          if (onChange) onChange(null);
        }
      }}
    />
  );
};

export default PinInput;

const styles = StyleSheet.create({
  focusedColor: {
    borderColor: PRIMARY.darker,
    borderWidth: 1.2,
  },
  borderStyle: {
    borderWidth: 1.2,
    borderRadius: 6,
    borderColor: GREY[400],
  },
  txtStyle: {
    fontSize: 18,
  },
});
