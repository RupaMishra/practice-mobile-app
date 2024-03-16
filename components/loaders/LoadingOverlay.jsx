import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MyText from "../texts/MyText";
import { COMMON, GREY, PRIMARY } from "../../constants/colors";

const LoadingOverlay = ({ message = "Loading...", isLoading }) => {
  return (
    <>
      {isLoading && (
        <View style={styles.rootContainer}>
          <View style={styles.process_box}>
            <ActivityIndicator size="large" color={PRIMARY.main} />
            <MyText style={styles.loading_msg} fontType="semiBold">
              {message}
            </MyText>
          </View>
        </View>
      )}
      <View style={styles.root}></View>
    </>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  root: {
    position: "absolute",
  },
  rootContainer: {
    position: "absolute",
    backgroundColor: "#00000080",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "green",
    zIndex: 1,
  },
  process_box: {
    width: "70%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 8,
    shadowColor: COMMON.common.black,
    shadowOffset: {
      width: 11,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 6,
  },
  loading_msg: {
    paddingHorizontal: 12,
    fontSize: 16,
  },
});
