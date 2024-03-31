import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import MyText from "../components/texts/MyText";
import useTheme from "../theme/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { QRCode } from "react-qr-code";

const QrCodeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{ position: "relative" }}>
      <Image
        style={styles.crousel_img}
        source={require("../assets/images/bg_qr.png")}
      />
      <View style={styles.container}>
        <View style={[styles.headerStyle]}>
          <Ionicons
            name="arrow-back"
            size={18}
            color={"white"}
            style={{
              backgroundColor: "#000000",
              padding: 8,
              borderRadius: 50,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <MyText fontType={"semiBold"} style={styles.title}>
            My QR
          </MyText>
        </View>
        <View style={styles.qrCode}>
          <MyText
            fontType={"semiBold"}
            style={{ fontSize: 16, marginTop: 8, marginBottom: 16 }}
          >
            Get Money in your wallet
          </MyText>
          <QRCode
            value={
              "upi://pay?pa=ipay.133876.53494@icici&pn=${GYANENDER LAMBA}&cu=INR"
            }
            size={158}
          />
          <MyText style={{ fontSize: 12, marginTop: 8, marginBottom: 16 }}>
            ipay.133876.53494@icici
          </MyText>

          <Pressable
            style={{
              backgroundColor: theme.success.main,
              paddingHorizontal: 24,
              borderRadius: 12,
              marginTop: 18,
            }}
          >
            <MyText
              style={{
                color: "#fff",
                fontSize: 14,
                paddingVertical: 8,
                paddingHorizontal: 12,
              }}
              fontType={"bold"}
            >
              Scan To Pay
            </MyText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default QrCodeScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  crousel_img: {
    height: 450,
    width: Dimensions.get("window").width,
    resizeMode: "cover",
    borderBottomRightRadius: 235,
  },
  headerStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
    padding: 16,
    backgroundColor: "#ffffff00",
  },
  title: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 16,
  },
  qrCode: {
    paddingHorizontal: 18,
    paddingVertical: 36,
    borderRadius: 8,
    borderWidth: 0.2,
    marginBottom: 12,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 150,
  },
});
