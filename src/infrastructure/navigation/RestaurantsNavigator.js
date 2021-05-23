import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../../components/features/restaurants/screens/restaurant.screen";
import { RestaurantDetailsScreen } from "../../components/features/restaurants/screens/RestaurantDetailsScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="None"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
      }}
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
