import React from "react";
import { Dimensions, Pressable } from "react-native";
import useTheme from "../../theme/useTheme";
import Card from "../cards/Card";
import ServiceCard from "../svg-components/ServiceCard";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native-ui-lib";

const list = [
  {
    title: "Money Transfer",
    subtitle: "₹45,05,000.50",
    icon: "https://img.icons8.com/?size=64&id=ZRM4NH6kHVQa&format=png",
    onPress: () => console.log("service 1"),
  },
  {
    title: "Vendor Pay",
    subtitle: "₹4,500.5",
    icon: "https://img.icons8.com/?size=64&id=89jiGTBPJ6sZ&format=png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "Mobile ATM",
    subtitle: "₹4,500.5",
    icon: "https://img.icons8.com/?size=64&id=nrkLXM8tg9HX&format=png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "AePS",
    subtitle: "₹4,500.5",
    icon: "https://img.icons8.com/?size=64&id=yw4OAk73dAKj&format=png",
    onPress: () => console.log("service 2"),
  },
];

const FrequentServices = () => {
  const theme = useTheme();

  return (
    <Card title="Frequently Used" bgColor={theme.background.default}>
      <ScrollView
        horizontal
        scrollEnabled
        // persistentScrollbar
        // indicatorStyle="black"
        // showsHorizontalScrollIndicator
        style={{
          width: Dimensions.get("window").width,
        }}
      >
        {/* <GridView
          numColumns={4}
          items={rech_service}
          lastItemLabel={"+"}
          viewWidth={Dimensions.get("window").width}
        /> */}
        {list.map((item, index) => (
          <View
            key={index}
            style={{
              marginLeft: theme.spacing.extraSmall,
              marginRight: index === list.length - 1 && theme.spacing.small,
            }}
          >
            <Pressable
              android_ripple={{ color: "#ccc" }}
              style={({ pressed }) => [pressed ? { opacity: 0.6 } : null]}
            >
              <ServiceCard
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                onPress={item.onPress}
              />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </Card>
  );
};

export default FrequentServices;
