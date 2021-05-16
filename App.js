import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { useFonts as useLato, Lato_700Bold } from "@expo-google-fonts/lato";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen } from "./src/components/features/restaurants/screens/HomeScreen";
import { MapScreen } from "./src/components/features/restaurants/screens/MapScreen";
import { SettingScreen } from "./src/components/features/restaurants/screens/SettingScreen";
import { RestaurantScreen } from "./src/components/features/restaurants/screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";
import { RestaurantContextProvider } from "./src/services/restaurants/RestaurantContext";

const Tab = createBottomTabNavigator();
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
      <RestaurantContextProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={RestaurantScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Maps"
              component={MapScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="map"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account-settings"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantContextProvider>
    </ThemeProvider>
  );
}
export default App;
