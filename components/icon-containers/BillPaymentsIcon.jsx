import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-ui-lib";
import MyText from "../texts/MyText";
import useTheme from "../../theme/useTheme";

const BillPaymentsIcon = ({ uri = "", title = "" }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    rootcontainer: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 14,
      marginTop: theme.spacing.extraSmall,
      color: theme.primary.main,
    },
  });
  return (
    <View style={styles.rootcontainer}>
      <Icon
        source={{
          uri: uri,
        }}
        size={24}
      />
      <MyText fontType="medium" style={styles.title}>
        {title}
      </MyText>
    </View>
  );
};

export default BillPaymentsIcon;
