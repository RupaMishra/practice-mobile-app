import React, { useMemo } from "react";
import Card from "../cards/Card";
import { GridView, View } from "react-native-ui-lib";
import BBPSIcon from "../icon-containers/BBPSIcon";
import { Dimensions } from "react-native";

const list = [
  {
    title: "service 1",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 1"),
  },
  {
    title: "service 2",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "service 2",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "service 2",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "service 2",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "service 2",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "service 2",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "service 2",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "service 2",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 2"),
  },
  {
    title: "service 2",
    icon: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
    onPress: () => console.log("service 2"),
  },
];

const BBPSContainer = () => {
  const bbps_service = useMemo(() => {
    let listNew = list.map((item) => ({
      title: item.title,
      renderCustomItem: () => {
        return (
          <View center>
            <BBPSIcon uri={item.icon} />
          </View>
        );
      },
      onPress: item.onPress,
    }));
    return listNew;
  }, []);

  return (
    <Card title="BBPS">
      <View>
        <GridView
          items={bbps_service}
          viewWidth={Dimensions.get("window").width}
          numColumns={4}
          lastItemLabel={"+"}
          lastItemOverlayColor={"Colors.rgba(Colors.blue30)"}
        />
      </View>
    </Card>
  );
};

export default BBPSContainer;
