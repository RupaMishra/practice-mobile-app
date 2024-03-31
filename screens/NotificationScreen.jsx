import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import MyText from "../components/texts/MyText";
import { COMMON } from "../constants/colors";
import { Octicons } from "@expo/vector-icons";

const notiData = [
  {
    id: 1,
    icon: require(`../assets/images/blue-noti.png`),
    mainText: "Amount Received",
    subText: "A new notification Received",
    time: "1 hour ago",
  },
  {
    id: 2,
    icon: require(`../assets/images/red-noti.png`),
    mainText: "Amount Received",
    subText: "A new notification Received",
    time: "1 hour ago",
  },
  {
    id: 3,
    icon: require(`../assets/images/yellow-noti.png`),
    mainText: "Amount Received",
    subText: "A new notification Received",
    time: "1 hour ago",
  },
  {
    id: 4,
    icon: require(`../assets/images/blue-noti.png`),
    mainText: "Amount Received",
    subText: "A new notification Received",
    time: "1 hour ago",
  },
  {
    id: 5,
    icon: require(`../assets/images/blue-noti.png`),
    mainText: "Amount Received",
    subText: "A new notification Received",
    time: "1 hour ago",
  },
  {
    id: 6,
    icon: require(`../assets/images/blue-noti.png`),
    mainText: "Amount Received",
    subText: "A new notification Received",
    time: "1 hour ago",
  },
  {
    id: 7,
    icon: require(`../assets/images/blue-noti.png`),
    mainText: "Amount Received",
    subText: "A new notification Received",
    time: "1 hour ago",
  },
  {
    id: 8,
    icon: require(`../assets/images/yellow-noti.png`),
    mainText: "Amount Received",
    subText: "A new notification Received",
    time: "1 hour ago",
  },
  {
    id: 9,
    icon: require(`../assets/images/red-noti.png`),
    mainText: "Amount Received",
    subText: "A new notification Received",
    time: "1 hour ago",
  },
];

const NotificationCard = (itemData) => {
  const { icon, mainText, subText, time } = itemData.item;
  return (
    <View style={styles.notiCard}>
      <View style={styles.notiCardImgContainer}>
        <Image source={icon} style={styles.notiCardImg} />
      </View>
      <View style={styles.rootContainer}>
        <MyText style={styles.notiText} fontType="bold">
          {mainText} <MyText fontType="regular">{subText}</MyText>
        </MyText>
        <MyText fontType="regular">{time}</MyText>
      </View>
      <Octicons name="dot-fill" size={24} color="#0AA1EA" />
    </View>
  );
};

const NotificationScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.itemsContainer}>
        <View style={styles.headingContainer}>
          <MyText style={styles.heading} fontType="bold">
            Today
          </MyText>
        </View>
        <FlatList
          data={notiData}
          renderItem={NotificationCard}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  itemsContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#EFF0F2",
  },
  headingContainer: { marginBottom: 12 },
  heading: {
    fontSize: 20,
  },
  notiCard: {
    backgroundColor: COMMON.common.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 6,
  },
  notiCardImgContainer: {
    paddingVertical: 16,
    paddingRight: 16,
  },
  notiCardImg: {
    width: 24,
    height: 23,
  },
  notiText: { flexWrap: "wrap" },
});
