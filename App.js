import React from "react";
// import { StyleSheet } from "react-native";

import { Screen } from "./src/utils/Screen";
import { RestaurantScreen } from "./src/components/features/restaurants/screens/restaurant.screen";

function App(props) {
  return (
    <Screen>
      <RestaurantScreen />
    </Screen>
  );
}
export default App;
