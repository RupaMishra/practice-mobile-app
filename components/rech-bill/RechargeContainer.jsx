import React, { useMemo } from "react";
import Card from "../cards/Card";
import { Colors, GridView, Icon, View } from "react-native-ui-lib";
import { Alert, Dimensions, View as Rview, StyleSheet } from "react-native";
import useTheme from "../../theme/useTheme";
import MyText from "../texts/MyText";
const list = [
  {
    title: "Recharges",
    icon: "recharge",
    onPress: () => console.log("service 1"),
  },
  {
    title: "DTH",
    icon: "dth",
    onPress: () => console.log("service 2"),
  },
  {
    title: "Electricity",
    icon: "electricity",
    onPress: () => console.log("service 2"),
  },
  {
    title: "Card",
    icon: "card",
    onPress: () => console.log("service 2"),
  },
  {
    title: "Recharges",
    icon: "recharge",
    onPress: () => console.log("service 1"),
  },
  {
    title: "DTH",
    icon: "dth",
    onPress: () => console.log("service 2"),
  },
  {
    title: "Electricity",
    icon: "electricity",
    onPress: () => console.log("service 2"),
  },
  {
    title: "Card",
    icon: "card",
    onPress: () => console.log("service 2"),
  },
];
const images = {
  recharge: require("../../assets/recharges/recharge.png"),
  dth: require("../../assets/recharges/recharge.png"),
  electricity: require("../../assets/recharges/electricity.png"),
  card: require("../../assets/recharges/recharge.png"),
};

const RechargeContainer = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    rootcontainer: {
      textAlign: "center",
      display: "flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    innerContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: 13,
      maxWidth: 100,
      letterSpacing: 0.3,
      color: theme.primary.main,
      marginTop: theme.spacing.extraSmall,
    },
  });

  const rech_service = useMemo(() => {
    let listNew = list.map((item) => ({
      imageProps: {
        borderRadius: 4,
        overlayType: "solid",
        source: images[item.icon],
        overlayColor: Colors.rgba(Colors.$backgroundDisabled, 0.2),
      },
      title: (
        <MyText fontType="semiBold" style={styles.title} rnText={true}>
          {item.title}
        </MyText>
      ),
      titleTypography: "subtextBold",
      renderOverlay: () => {
        return (
          <Rview style={styles.rootcontainer}>
            <Rview style={styles.innerContainer}>
              <Icon
                // source={{
                //   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURs8ZHZ6scTRFQZPoEQwYAOkYBONmgRfgUg&usqp=CAU",
                // }}
                size={48}
                source={require("../../assets/recharges/electricity_icon.png")}
              />
            </Rview>
          </Rview>
        );
      },
      onPress: () => Alert.alert("My Name is " + item.title),
    }));
    return listNew;
  }, []);

  return (
    <Card title="Bill Payments">
      <View
        center
        style={{
          width: Dimensions.get("window").width,
        }}
      >
        <GridView
          // lastItemLabel={"+"}
          keepItemSize
          numColumns={4}
          items={rech_service}
          viewWidth={Dimensions.get("window").width - 10}
          // lastItemOverlayColor={Colors.rgba(
          //   Colors.$backgroundPrimaryHeavy,
          //   0.2
          // )}
        />
      </View>
    </Card>
  );
};

export default RechargeContainer;
