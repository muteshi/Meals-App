import React from "react";
import { ThemeProvider } from "styled-components";

import { Screen } from "./src/utils/Screen";
import { RestaurantScreen } from "./src/components/features/restaurants/screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <RestaurantScreen />
      </Screen>
    </ThemeProvider>
  );
}
export default App;
