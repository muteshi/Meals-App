import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { useFonts as useLato, Lato_700Bold } from "@expo-google-fonts/lato";

import { Screen } from "./src/utils/Screen";
import { RestaurantScreen } from "./src/components/features/restaurants/screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";

function App() {
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
}
export default App;
