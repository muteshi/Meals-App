import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { useFonts as useLato, Lato_700Bold } from "@expo-google-fonts/lato";
import { theme } from "../../../../infrastructure/theme";
import { Screen } from "../../../../utils/Screen";
import { RestaurantScreen } from "./restaurant.screen";

export const HomeScreen = () => {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_700Bold,
  });

  if (!robotoLoaded || !latoLoaded) return null;
  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <RestaurantScreen />
      </Screen>
    </ThemeProvider>
  );
};
