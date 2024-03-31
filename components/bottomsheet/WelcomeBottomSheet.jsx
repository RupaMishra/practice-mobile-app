import React, { useCallback, useRef, useMemo } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  useColorScheme,
  ScrollView,
} from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FullWalletBalComp from "../walletbalances/FullWalletBalComp";
import Carousel from "react-native-snap-carousel";
import RechargeContainer from "../rech-bill/RechargeContainer";
import FrequentServices from "../frequent-services/FrequentServices";
import useTheme from "../../theme/useTheme";

const WelcomeBottomSheet = () => {
  const theme = useTheme();
  const sheetRef = useRef(null);
  const colorScheme = useColorScheme();
  const snapPoints = useMemo(() => ["70%", "100%"], []);
  const handleSheetChange = useCallback(() => {
    // console.log("handleSheetChange", index);
  }, []);

  const crousel_img = [
    require("../../assets/images/banner1.png"),
    require("../../assets/images/banner2.png"),
    require("../../assets/images/banner3.png"),
  ];
  const _renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <Image style={styles.crousel_img} source={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <FullWalletBalComp />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          backgroundStyle={{
            backgroundColor: theme.background.default,
          }}
          handleIndicatorStyle={{
            backgroundColor:
              colorScheme === "dark" ? theme.common.white : theme.primary.main,
          }}
          style={{}}
        >
          <BottomSheetScrollView scrollEnabled={true}>
            <ScrollView>
              <Carousel
                ref={(c) => {
                  this._carousel = c;
                }}
                data={crousel_img}
                renderItem={_renderItem}
                sliderWidth={Dimensions.get("window").width}
                itemWidth={Dimensions.get("window").width}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
                sliderHeight={100}
                itemHeight={50}
              />
              <FrequentServices />
              <RechargeContainer />
            </ScrollView>
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  crousel_img: {
    height: 150,
    width: Dimensions.get("window").width,
    resizeMode: "cover",
  },
});

export default WelcomeBottomSheet;
