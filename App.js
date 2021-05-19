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
import { FavoritesContextProvider } from "./src/services/favorites/FavoritesContext";

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
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </ThemeProvider>
  );
}
export default App;
