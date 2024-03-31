import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import {
  useFonts,
  Raleway_100Thin,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light_Italic,
  Raleway_400Regular_Italic,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black_Italic,
} from "@expo-google-fonts/raleway";
import Root from "./Root";
import { PersistGate } from "redux-persist/integration/react";
import { PRIMARY } from "./constants/colors";
import { ThemeProvider } from "./contexts/ThemeContext";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontLoading, fontError] = useFonts({
    thin: Raleway_100Thin,
    thinItalic: Raleway_100Thin_Italic,
    extraLight: Raleway_200ExtraLight,
    extraLightItalic: Raleway_200ExtraLight_Italic,
    light: Raleway_300Light,
    lightItalic: Raleway_300Light_Italic,
    regular: Raleway_400Regular,
    regularItalic: Raleway_400Regular_Italic,
    medium: Raleway_500Medium,
    mediumItalic: Raleway_500Medium_Italic,
    semiBold: Raleway_600SemiBold,
    semiBoldItalic: Raleway_600SemiBold_Italic,
    bold: Raleway_700Bold,
    boldItalic: Raleway_700Bold_Italic,
    extraBold: Raleway_800ExtraBold,
    extraBoldItalic: Raleway_800ExtraBold_Italic,
    bold900: Raleway_900Black,
    bold900Italic: Raleway_900Black_Italic,
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
          <ThemeProvider>
            <NavigationContainer>
              <Root />
            </NavigationContainer>
          </ThemeProvider>
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
