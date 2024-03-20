import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const EditData = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["70%", "100%"], []);
  const handleSheetChange = useCallback((index) => {
    // console.log("handleSheetChange", index);
  }, []);

  return (
    <BottomSheet
      ref={sheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
    >
      <BottomSheetScrollView
        contentContainerStyle={styles.contentContainer}
      ></BottomSheetScrollView>
    </BottomSheet>
  );
};

export default EditData;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
  },
});
