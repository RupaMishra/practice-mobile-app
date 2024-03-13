import AsyncStorage from "@react-native-async-storage/async-storage";

export const addTokenToLocalStorage = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.log("error", error);
  }
};

export const getTokenFromLocalStorage = async () => {
  try {
    const result = await AsyncStorage.getItem("token");
    const token = result ? result : null;
    return token;
  } catch (error) {
    console.log("error", error);
  }
};
