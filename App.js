import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "./store";

// import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import {
  useFonts,
  Dosis_400Regular,
  Dosis_500Medium,
  Dosis_600SemiBold,
  Dosis_700Bold,
  Dosis_800ExtraBold,
} from "@expo-google-fonts/dosis";
import Root from "./Root";
SplashScreen.preventAutoHideAsync();

export default function App() {
  // fonts stuff
  const [fontLoading, fontError] = useFonts({
    regular: Dosis_400Regular,
    medium: Dosis_500Medium,
    semiBold: Dosis_600SemiBold,
    bold: Dosis_700Bold,
    extraBold: Dosis_800ExtraBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoading || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoading, fontError]);

  if (!fontLoading && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.rootContainer} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

// wrap this is safe screen
