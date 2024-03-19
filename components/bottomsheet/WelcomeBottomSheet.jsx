import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FullWalletBalComp from "../walletbalances/FullWalletBalComp";

const WelcomeBottomSheet = () => {
  // hooks
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["70%", "100%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    // console.log("handleSheetChange", index);
  }, []);

  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <FullWalletBalComp />
        <BottomSheet
          ref={sheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
        >
          <BottomSheetScrollView
            contentContainerStyle={styles.contentContainer}
          >
            {data.map(renderItem)}
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  walletContainer: {
    flex: 1,
    background:
      "linear-gradient(180deg, rgba(1,58,99,1) 0%, rgba(102,172,186,1) 100%)",
  },
});

export default WelcomeBottomSheet;
