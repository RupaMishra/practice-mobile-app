// textInputConfig={{
// mode: Type: 'flat' | 'outlined'
// left Type: React.ReactNode
// right Type: React.ReactNode
// disabled Type: Boolean
// label
// placeholder
// error
// onChangeText
// selectionColor Selection color of the input. On iOS, it sets both the selection color and cursor color. On Android, it sets only the selection color.
// underlineColor  Inactive underline color of the input.
// activeUnderlineColor:  Active underline color of the input.
// outlineColor:  Inactive outline color of the input.
//  textColor:  Active outline color of the input.
// dense  Type: boolean   Sets min height with densed layout. For TextInput in flat mode height is 64dp or in dense layout - 52dp with label or 40dp without label.
// onFocus  Type: (args: any) => void
// onBlur Type: (args: any) => void
//  render : <TextInput
//   label="Phone number"
//   render={props =>
//     <TextInputMask
//       {...props}
//       mask="+[00] [000] [000] [000]"
//     />
//   }
// />

// value
//  Type: StyleProp<TextStyle>
//
// contentStyle: contentStyle: { fontSize: 24, color: "white" }, Pass custom style directly to the input itself. Overrides input style Example: paddingLeft, backgroundColor
// outlineStyle  Pass style to override the default style of outlined wrapper. Overrides style when mode is set to outlined Example: borderRadius, borderColor
// underlineStyle Pass style to override the default style of underlined wrapper. Overrides style when mode is set to flat Example: borderRadius, borderColor
//  editable: Default value: true
// multiline: true,
//   }}

import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { PRIMARY } from "../../constants/colors";

const InputRhf = ({ textInputConfig, control, errors, name, style }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      {/* <Text style={[styles.label]}>{label}</Text> */}
      <Controller
        control={control}
        // ham schema ese bhi define kar sakte hai
        // rules={{
        //   required: `${label} is required`,
        //   pattern: {
        //     value: /^([a-z]|[A-Z]|\s){2,}$/,
        //     message: `Enter a valid ${label}`,
        //   },
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            dense={true}
            contentStyle={styles.innerContent}
            outlineStyle={styles.outlineStyles}
            {...textInputConfig}
          />
        )}
        name={name}
      />
      {errors[name] && (
        <Text style={styles.errorText}>{errors[name]?.message}</Text>
      )}
    </View>
  );
};

export default InputRhf;

const styles = StyleSheet.create({
  inputContainer: { marginHorizontal: 4, marginVertical: 16 },
  innerContent: {
    paddingVertical: 0,
    paddingHorizontal: 8,
    backgroundColor: "white",
    borderColor: PRIMARY.dark,
    borderRadius: 6,
    borderWidth: 2,
  },
  outlineStyles: {},
  errorText: {
    color: "red",
  },
  //   invalidLabel: {
  //     color: GlobalStyles.colors.error500,
  //   },
  //   invalidInput: {
  //     backgroundColor: GlobalStyles.colors.error50,
  //   },
});
