import React from "react";
import Screen from "../components/screen/Screen";
import MyText from "../components/texts/MyText";
import { Dimensions, StyleSheet, View } from "react-native";
import MyButton from "../components/buttons/MyButton";
import { PRIMARY } from "../constants/colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { verifyTpin } from "../features/auth/authNonPersistSlice";
import { authenticate } from "../features/auth/authSlice";
import RHFCodes from "../components/hook-forms/RHFCodes";
import FormProvider from "../components/hook-forms/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { theme } from "../utils/theme";

const schema = Yup.object().shape({
  code1: Yup.string().required("TPIN is required"),
  code2: Yup.string().required("TPIN is required"),
  code3: Yup.string().required("TPIN is required"),
  code4: Yup.string().required("TPIN is required"),
  code5: Yup.string().required("TPIN is required"),
  code6: Yup.string().required("TPIN is required"),
});

const defaultValues = {
  code1: "",
  code2: "",
  code3: "",
  code4: "",
  code5: "",
  code6: "",
};
const TpinScreen = ({ route: { params }, navigation }) => {
  const { isLoading } = useSelector((store) => store.authNonPersist);
  const apiEnd = params?.apiEnd;
  const onSuccessScreen = params?.onSuccessScreen;
  // const onFailedScreen = params?.onFailedScreen;
  const data = params?.data;
  const dispatch = useDispatch();

  const verify = async (fdata) => {
    const formData = {
      tpin: Object.values(fdata).join(""),
      ...data,
    };
    try {
      const resp = await dispatch(
        verifyTpin({ payload: formData, apiEnd })
      ).unwrap();
      dispatch(authenticate(resp.data));
      if (onSuccessScreen) {
        navigation.navigate(onSuccessScreen);
      }
    } catch (error) {
      reset();
      // if (onFailedScreen) {
      //   navigation.navigate(onFailedScreen);
      // }
    }
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  return (
    <Screen isLoading={isLoading}>
      <View style={styles.headerSize}>
        <View style={styles.headerStyle}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <AntDesign name="questioncircleo" size={20} color="black" />
        </View>
      </View>
      <FormProvider methods={methods}>
        <View style={styles.formContainer}>
          <MyText fontType={"bold"} style={styles.msgTxt}>
            Enter the 6 digit TPIN to login
          </MyText>
          {/* <View style={{ marginTop: 24 }}>
            <PinInput
              onChange={(value) => {
                setTpin(value);
              }}
              isOtp={false}
            />
          </View> */}

          <View style={{ marginTop: theme.margin[24] }}>
            <RHFCodes
              keyName="code"
              inputs={["code1", "code2", "code3", "code4", "code5", "code6"]}
              textInputConfig={{
                mode: "outlined",
                keyboardType: "number-pad",
              }}
              error={
                !!errors.code1 ||
                !!errors.code2 ||
                !!errors.code3 ||
                !!errors.code4 ||
                !!errors.code5 ||
                !!errors.code6 ||
                errors?.code1
              }
              errorMessage={errors?.code1?.message}
            />
          </View>

          <View style={{ marginTop: theme.margin[42] }}>
            <MyText fontType={"bold"} style={{ fontSize: theme.fontSize[16] }}>
              Forgot TPIN?
            </MyText>
            <View style={styles.otherView}>
              <MaterialCommunityIcons
                name="reload"
                color={PRIMARY.light}
                size={18}
              />
              <MyText fontType={"bold"} style={styles.optionTxt}>
                Reset TPIN
              </MyText>
            </View>
            <View style={styles.otherView}>
              <FontAwesome name="edit" color={PRIMARY.light} size={18} />
              <MyText fontType={"bold"} style={styles.optionTxt}>
                Change Mobile Number
              </MyText>
            </View>
          </View>
        </View>
      </FormProvider>
      <View style={styles.buttonContainer}>
        <MyButton
          title="VERIFY"
          allButtonProps={{
            rippleColor: "#ccc",
            mode: "contained",
            dark: true,
            onPress: handleSubmit(verify),
            labelStyle: { fontSize: 20 },
            contentStyle: {
              paddingVertical: 8,
            },
          }}
          passedstyle={styles.btnStyle}
        />
      </View>
    </Screen>
  );
};

export default TpinScreen;
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
  btnStyle: {
    marginTop: 2,
    borderRadius: 0,
  },
  headerSize: {
    // height: 100,
    paddingTop: (Dimensions.get("screen").height / 100) * 5,
    // paddingTop: 35,
  },
  headerStyle: {
    backgroundColor: "white",
    // height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 22,
  },
  msgTxt: { fontSize: 28 },
  otherView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 12,
  },
  optionTxt: { fontSize: 12, paddingLeft: 12, color: PRIMARY.light },
});
