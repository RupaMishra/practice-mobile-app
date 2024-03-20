import React from "react";
import MyText from "../components/texts/MyText";
import { Pressable, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Avatar } from "react-native-paper";
import { theme } from "../utils/theme";
import { AntDesign } from "@expo/vector-icons";
import { GREY, PRIMARY } from "../constants/colors";
import Screen from "../components/screen/Screen";

const MyProfile = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <Screen style={styles.container}>
      {/* profile View */}
      <View style={styles.profileView}>
        <Avatar.Image
          source={require("../assets/images/userPic.jpg")}
          size={104}
        />
        <MyText style={styles.usernameText}>{user.name}</MyText>
        <MyText style={styles.nameText}>+91 {user.username}</MyText>
        <Pressable style={styles.btnStyle}>
          <AntDesign name="edit" size={12} color="white" />
          <MyText style={styles.btnText}>Edit Profile</MyText>
        </Pressable>
      </View>

      {/* Profile view */}

      {/* account info */}
      <View style={styles.sectionHeader}>
        <MyText style={styles.txtgrey}>Overview</MyText>
        <MyText fontType={"bold"}>View More</MyText>
      </View>
      <View style={styles.sectionBody}>
        <MyText style={styles.txtgrey}>Email</MyText>
        <MyText fontType={"bold"}>{user.email ? user.email : "NA"}</MyText>
      </View>
      <View style={styles.sectionBody}>
        <MyText style={styles.txtgrey}>Alternative Mobile</MyText>
        <MyText fontType={"bold"}>{user.mobile ? user.mobile : "NA"}</MyText>
      </View>
      <View style={styles.sectionBody}>
        <MyText style={styles.txtgrey}>Address</MyText>
        <MyText fontType={"bold"}>{user.address ? user.address : "NA"}</MyText>
      </View>
      {/* account info */}

      {/* passwords */}
      <View style={styles.sectionHeader}>
        <MyText style={styles.txtgrey}>Passwords</MyText>
      </View>
      <View style={styles.sectionBody}>
        <MyText style={styles.txtgrey}>Change Password</MyText>
        <AntDesign name="right" size={16} color="black" />
      </View>
      <View style={styles.sectionBody}>
        <MyText style={styles.txtgrey}>reset MPIN</MyText>
        <AntDesign name="right" size={16} color="black" />
      </View>
      <View style={styles.sectionBody}>
        <MyText style={styles.txtgrey}>Change MPIN</MyText>
        <AntDesign name="right" size={16} color="black" />
      </View>
      {/* passwords */}
    </Screen>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  profileView: {
    padding: theme.spacing.large,
    alignItems: "center",
  },
  usernameText: {
    textTransform: "capitalize",
    fontSize: 16,
  },
  nameText: {
    textTransform: "capitalize",
    fontSize: 12,
  },
  btnStyle: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: PRIMARY.dark,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 8,
  },
  btnText: {
    fontSize: 10,
    marginLeft: 4,
    color: "white",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: PRIMARY.dark + "10",
    width: "100%",
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
  },
  sectionBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 0.4,
    borderBottomColor: GREY[300],
    width: "100%",
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
  },
  txtgrey: {
    color: GREY[700],
  },
});
