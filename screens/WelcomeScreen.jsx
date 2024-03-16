import React from "react";
import { Text, View } from "react-native";

const WelcomeScreen = () => {
  const userData = {
    statuscode: "1000",
    status: "Success",
    message: "User data fetched successfully",
    data: {
      id: 4774,
      name: "test user",
      gender: null,
      username: 8888888888,
      email: "test@gmail.com",
      tpin_retries: 2,
      role: "Admin",
      status: 0,
      remember_token: null,
      api_token: "bME7kBF5uDHwdZHjGPKDTYRGjeOxlrA5YJDTYYBnmMaKJ8zbBCCd5V6qc739",
      created_at: "2024-02-22T05:36:18.000000Z",
      updated_at: "2024-03-16T00:11:40.000000Z",
      user_detail: {
        id: 13,
        user_id: 4774,
        business_name: "test",
        business_type: "P",
        domain_name: "www.test.com",
        logo: "http://localhost/BBSassProject/public\\images\\logos\\4774logo.jpeg",
        squareLogo:
          "http://localhost/BBSassProject/public\\images\\logos\\4774squareLogo.jpg",
        favicon:
          "http://localhost/BBSassProject/public\\images\\logos\\4774favicon.jpg",
        created_at: "2024-02-22T05:36:18.000000Z",
        updated_at: "2024-02-23T05:21:52.000000Z",
      },
      user_service: {
        id: 15,
        user_id: 4774,
        dmt: true,
        dmt2: true,
        acc_verification: false,
        payout: false,
        mobile: false,
        dth: false,
        card_bill: false,
        wallet_transfer: false,
        bbps: false,
        aeps: true,
        utility: false,
        created_at: "2024-02-22T05:36:18.000000Z",
        updated_at: "2024-02-26T02:37:11.000000Z",
      },
      user_subscription: {
        id: 3,
        user_id: 4774,
        yearly: 0,
        monthly: 0,
        weekly: 0,
        created_at: "2024-02-22T05:36:18.000000Z",
        updated_at: "2024-02-22T05:36:18.000000Z",
      },
    },
    timestamp: "2024-03-16 11:14:13",
    environment: "Live",
  };
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

export default WelcomeScreen;
