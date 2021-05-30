import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { CheckoutScreen } from "../../components/features/restaurants/screens/CheckoutScreen";
import { CheckoutSuccessScreen } from "../../components/features/restaurants/screens/CheckoutSuccessScreen";
import { CheckoutErrorScreen } from "../../components/features/restaurants/screens/CheckoutErrorScreen";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator
    headerMode="none"
    screenOptions={{
      ...TransitionPresets.ModalPresentationIOS,
      gestureEnabled: true,
    }}
  >
    <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
    <CheckoutStack.Screen
      name="CheckoutSuccess"
      component={CheckoutSuccessScreen}
    />
    <CheckoutStack.Screen
      name="CheckoutError"
      component={CheckoutErrorScreen}
    />
  </CheckoutStack.Navigator>
);
