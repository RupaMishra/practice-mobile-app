import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

// import {
//   useFonts,
//   OpenSans_300Light,
//   OpenSans_400Regular,
//   OpenSans_500Medium,
//   OpenSans_600SemiBold,
//   OpenSans_700Bold,
//   OpenSans_800ExtraBold,
//   OpenSans_300Light_Italic,
//   OpenSans_400Regular_Italic,
//   OpenSans_500Medium_Italic,
//   OpenSans_600SemiBold_Italic,
//   OpenSans_700Bold_Italic,
//   OpenSans_800ExtraBold_Italic,
// } from "@expo-google-fonts/open-sans";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import Root from "./Root";
import { PersistGate } from "redux-persist/integration/react";
import { PRIMARY } from "./constants/colors";
import { ThemeProvider } from "./contexts/ThemeContext";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme();

  // fonts stuff
  const [fontLoading, fontError] = useFonts({
    regular: Roboto_400Regular,
    medium: Roboto_500Medium,
    semiBold: Roboto_500Medium,
    bold: Roboto_700Bold,
    extraBold: Roboto_900Black,
    // regular: Dosis_400Regular,
    // medium: Dosis_500Medium,
    // semiBold: Dosis_600SemiBold,
    // bold: Dosis_700Bold,
    // extraBold: Dosis_800ExtraBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoading || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoading, fontError]);

  if (!fontLoading && !fontError) {
    return null;
  }
  console.log("colorScheme=>", colorScheme);
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
