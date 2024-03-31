import React, { useState } from "react";
import MyText from "../components/texts/MyText";
import { Pressable, StyleSheet, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { Avatar } from "react-native-paper";
import { theme } from "../utils/theme";
import { AntDesign } from "@expo/vector-icons";
import { GREY, PRIMARY } from "../constants/colors";
import Screen from "../components/screen/Screen";
import EditData from "../components/myProfile/EditData";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Mount from "../components/Mount";

const MyProfile = () => {
  const [showEdit, setShowEdit] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dataArray = [
    {
      heading: "Overview",
      data: [
        {
          label: "Username",
          value: "+91 " + user?.username ?? "NA",
        },
        {
          label: "Email",
          value: user?.email ?? "NA",
        },
        {
          label: "Alternative Mobile",
          value: user?.user_service?.mobile ?? "NA",
        },
        {
          label: "Address",
          value: user?.user_detail?.address ?? "NA",
        },
      ],
    },
    {
      heading: "Passwords",
      data: [
        {
          label: "Change Password",
          icon: "right",
        },
        {
          label: "Reset MPIN",
          icon: "right",
        },
        {
          label: "Change MPIN",
          icon: "right",
        },
      ],
    },
    {
      heading: "Business",
      data: [
        {
          label: "Business Name",
          value: user?.user_detail?.business_name ?? "NA",
        },
        {
          label: "Business Address",
          value: user?.user_detail?.business_address ?? "NA",
        },
        {
          label: "PAN",
          value: user?.user_detail?.pan ?? "NA",
        },
        {
          label: "GSTIN",
          value: user?.user_detail?.gstin ?? "NA",
        },
      ],
    },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen style={styles.container}>
        {/* Profile View */}
        <View style={styles.profileView}>
          <Avatar.Image
            source={require("../assets/images/userPic.jpg")}
            size={104}
          />
          <MyText style={styles.usernameText}>{user?.name}</MyText>
          <MyText style={styles.nameText}>+91 {user?.username}</MyText>
          <Pressable
            style={styles.btnStyle}
            onPress={() => {
              setShowEdit(true);
            }}
          >
            <AntDesign name="edit" size={12} color="white" />
            <MyText style={styles.btnText}>Edit Profile</MyText>
          </Pressable>
        </View>
        {/* Profile view */}

        {/* Render each section */}
        <ScrollView>
          {dataArray.map((section, index) => (
            <View key={index}>
              {/* Section header */}
              <View style={styles.sectionHeader}>
                <MyText style={styles.txtgrey}>{section.heading}</MyText>
                <MyText fontType={"bold"}>View More</MyText>
              </View>
              {/* Section data */}
              {section.data.map((item, itemIndex) => (
                <View key={itemIndex} style={styles.sectionBody}>
                  <MyText style={styles.txtgrey}>{item.label}</MyText>
                  {/* Add icon if available */}
                  {item?.value ? (
                    <MyText style={styles.txtgrey}>{item.value}</MyText>
                  ) : (
                    <AntDesign name={item.icon} size={16} color="black" />
                  )}
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </Screen>
      {/* {showEdit && <EditData />} */}
      <Mount visible={showEdit}>
        <EditData setIsShow={setShowEdit} />
      </Mount>
    </GestureHandlerRootView>
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
