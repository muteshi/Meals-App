import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { useFonts as useLato, Lato_700Bold } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantContextProvider } from "./src/services/restaurants/RestaurantContext";
import { LocationContextProvider } from "./src/services/location/LocationContext";
import { Navigation } from "./src/infrastructure/navigation";

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
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Navigation />
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
export default App;
