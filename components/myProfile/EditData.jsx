import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const EditData = ({ setIsShow }) => {
  const bottomSheetRef = useRef(null);
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={["90%"]}
      onChange={handleSheetChanges}
    >
      <BottomSheetScrollView style={styles.contentContainer}>
        <Pressable
          onPress={() => {
            if (setIsShow) {
              setIsShow(false);
            }
          }}
        >
          <Text>Awesome 🎉</Text>
        </Pressable>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default EditData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "white",
  },
});
