import React, { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { PRIMARY } from "../../constants/colors";

const RHFCodes = ({ keyName = "", inputs = [], error, errorMessage }) => {
  const { control } = useFormContext();

  // Array to store refs for each TextInput
  const inputRefs = useRef(inputs.map(() => React.createRef()));

  const handleChangeWithNextField = (text, maxLength, index) => {
    if (text.length > maxLength) {
      text = text[0];
    }

    // If text reaches maxLength and there's a next TextInput, focus on it
    if (text.length >= maxLength && index < inputs.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      inputRefs.current[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.boxContainer}>
        {inputs.map((name, index) => (
          <View key={name} style={styles.borderStyle}>
            <Controller
              key={name}
              name={`${keyName}${index + 1}`}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  autoFocus={index === 0}
                  value={value}
                  onChangeText={(text) => {
                    handleChangeWithNextField(text, 1, index);
                    onChange(text);
                  }}
                  onKeyPress={({ nativeEvent: { key: keyValue } }) => {
                    if (
                      keyValue.toLowerCase() === "backspace" ||
                      keyValue.toLowerCase() === "delete"
                    )
                      !value && handleBackspace(index);
                  }}
                  onBlur={onBlur}
                  ref={inputRefs.current[index]} // Assign ref to corresponding input
                  style={styles.txtStyle}
                  maxLength={1}
                  keyboardType="number-pad"
                  secureTextEntry
                  selectionColor={"#a9a9a9"}
                />
              )}
            />
          </View>
        ))}
      </View>
      <View>
        {error && (
          <Text style={styles.errorText}>
            {errorMessage || "OTP is required"}
          </Text>
        )}
      </View>
    </View>
  );
};

export default RHFCodes;

const styles = StyleSheet.create({
  borderStyle: {
    backgroundColor: "white",
    borderColor: PRIMARY.dark,
    borderRadius: 6,
    borderWidth: 2,
    width: 42,
    height: 42,
  },
  txtStyle: { flex: 1, textAlign: "center", fontWeight: "900" },
  errorText: {
    color: "red",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rootContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
