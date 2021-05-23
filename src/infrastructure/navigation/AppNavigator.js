import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from "../../components/features/restaurants/screens/MapScreen";
import { RestaurantsNavigator } from "./RestaurantsNavigator";
import { RestaurantContextProvider } from "../../services/restaurants/RestaurantContext";
import { LocationContextProvider } from "../../services/location/LocationContext";
import { FavoritesContextProvider } from "../../services/favorites/FavoritesContext";
import { SettingsNavigator } from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={RestaurantsNavigator}
              options={{
                tabBarIcon: ({ color = "red", size = 20 }) => (
                  <Ionicons name="md-home-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Maps"
              component={MapScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="map" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsNavigator}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
