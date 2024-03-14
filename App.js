import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

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
import { PersistGate } from "redux-persist/integration/react";
import { PRIMARY } from "./constants/colors";
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
      <StatusBar
        style="inverted"
        backgroundColor={PRIMARY.dark}
        // animated={false}
        // translucent={true}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </PersistGate>
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
