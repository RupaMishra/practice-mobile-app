import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-ui-lib";
import useTheme from "../../theme/useTheme";

const CircularIcon = ({
  uri = "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    icon: {
      backgroundColor: theme.grey["300"],
      borderRadius: 50,
      padding: 12,
      shadowColor: theme.grey["900"],
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 1,
      elevation: 4,
      shadowRadius: 4,
    },
  });
  return (
    <View style={styles.icon}>
      <Icon
        source={{
          uri: uri,
        }}
        size={40}
      />
    </View>
  );
};

export default CircularIcon;
