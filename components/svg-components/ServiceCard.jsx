import React from "react";
import Svg, { Path } from "react-native-svg";
import useTheme from "../../theme/useTheme";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-ui-lib";
import MyText from "../texts/MyText";

const ServiceCard = ({
  icon = "https://img.icons8.com/?size=64&id=ZRM4NH6kHVQa&format=png",
  title = "DMT",
  subtitle = "₹4,500",
  onPress,
}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    viewcontainer: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      padding: 20,
    },
    title: {
      fontSize: 14,
      color: theme.primary.main,
    },
    subtitle: {
      fontSize: 15,
      color: theme.primary.dark,
    },
  });
  return (
    <Svg
      width={153}
      height={146}
      viewBox="0 0 153 146"
      fill="none"
      onPress={() => {
        if (onPress) onPress();
      }}
    >
      {/* <Svg width={51} height={48.67} viewBox="0 0 153 146" fill="none"> */}
      <Path
        d="M0.0900094 128.098L0.0894646 17.4903C0.0894187 8.10065 7.70179 0.489127 17.0914 0.490212L78.7249 0.497338C87.2709 0.498326 94.4231 6.89003 96.8387 15.0875C99.4662 24.0042 103.949 34.1754 111.084 36.7395C116.758 38.7783 130.61 36.7395 139.032 36.7395C148.319 36.7395 153 46.3218 153 55.6088L153 128.098C153 137.487 145.389 145.098 136 145.098L17.09 145.098C7.7012 145.098 0.0900553 137.487 0.0900094 128.098Z"
        fill={`${theme.secondary.light}20`}
        // fill="#E7EEDE80"
      />
      <View style={styles.viewcontainer}>
        <View>
          <Icon
            source={{
              uri: icon,
            }}
            size={32}
          />
        </View>
        <View>
          <MyText fontType="medium" style={styles.title}>
            {title}
          </MyText>
          <MyText fontType="bold" style={styles.subtitle}>
            {subtitle}
          </MyText>
        </View>
      </View>
    </Svg>
  );
};

export default ServiceCard;

// Halved Size:

// Width: 76.5
// Height: 73
// One-Third Size:

// Width: 51
// Height: 48.67
// One-Fourth Size:

// Width: 38.25
// Height: 36.5
// One-Fifth Size:

// Width: 30.6
// Height: 29.2
// One-Sixth Size:

// Width: 25.5
// Height: 24.33
