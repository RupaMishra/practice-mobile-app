import { CameraView, useCameraPermissions } from "expo-camera/next";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";
import MyText from "../components/texts/MyText";

const QrScannerScreen = () => {
  const navigator = useNavigation();
  const [facing, setFacing] = useState("back");
  const [qrData, setQrData] = useState({
    isQrScanned: false,
    qrScannedData: "",
  });
  const [permission, requestPermission] = useCameraPermissions();

  const qrResponse = (data) => {
    console.log("barcoderes", data);
    // Haptics.selectionAsync();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setQrData({ isQrScanned: true, qrScannedData: data.data });
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }
  // camera permission is not granted
  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  // after qr code is scannned
  if (qrData.isQrScanned) {
    return (
      <View style={styles.container}>
        <MyText>one</MyText>
      </View>
    );
  }
  // qr code is not scanned yet
  if (!qrData.isQrScanned) {
    return (
      <View style={styles.container}>
        <CameraView
          style={styles.camera}
          facing={facing}
          barcodeScannerSettings={{
            barCodeTypes: [
              "qr",
              "pdf417",
              "ean13",
              "code128",
              "code39",
              "upc_a",
              "upc_e",
              "ean8",
              "itf14",
              "interleaved2of5",
              "codabar",
              "aztec",
              "datamatrix",
              "code93",
              "itf14",
            ],
          }}
          onBarcodeScanned={qrResponse}
          onMountError={(event) => console.log("mount error", event)}
        >
          <View style={{ backgroundColor: "#ffffff00", flex: 1 }}>
            <LottieView
              style={styles.scanner}
              source={require("../assets/animation/scanner.json")}
              autoPlay={true}
              loop
            />
          </View>
          <View style={{ backgroundColor: "#00000095", flex: 1 }}></View>
        </CameraView>
      </View>
    );
  }
};

export default QrScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
  },

  scanner: {
    height: 450,
    width: 450,
  },
});
