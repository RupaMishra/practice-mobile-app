import React, { forwardRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Controller, useFormContext } from "react-hook-form";
import { PRIMARY } from "../../constants/colors";

const InputRHF = forwardRef(function InputRHF(
  {
    textInputConfig,
    name,
    style,
    leftImg,
    rightImg,
    onSubmitEditing,
    returnKeyType = "done",
  },
  ref
) {
  const { control } = useFormContext();

  return (
    <View style={[styles.inputContainer, style]}>
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View style={styles.borderStyle}>
              {leftImg && leftImg}
              <TextInput
                ref={ref}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                dense={true}
                style={styles.txtStyle}
                contentStyle={styles.innerContent}
                outlineStyle={styles.outlineStyles}
                {...textInputConfig}
              />
              {rightImg}
            </View>
            {!!error && <Text style={styles.errorText}>{error?.message}</Text>}
          </>
        )}
        name={name}
      />
    </View>
  );
});

InputRHF.displayName = "InputRHF"; // Assigning the displayName

export default InputRHF;

const styles = StyleSheet.create({
  inputContainer: { marginHorizontal: 4, marginVertical: 16 },
  borderStyle: {
    paddingVertical: 0,
    paddingHorizontal: 8,
    backgroundColor: "white",
    borderColor: PRIMARY.dark,
    borderRadius: 6,
    borderWidth: 2,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  txtStyle: { flex: 1 },
  innerContent: {
    backgroundColor: "white",
    paddingLeft: 2,
  },
  outlineStyles: {},
  errorText: {
    color: "red",
  },
});
