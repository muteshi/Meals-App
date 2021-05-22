import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../components/features/restaurants/screens/AccountScreen";
import { LoginScreen } from "../../components/features/restaurants/screens/LoginScreen";
import { RegisterScreen } from "../../components/features/restaurants/screens/RegisterScreen";
import { Button } from "react-native";

const Stack = createStackNavigator();
export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Getting started" component={AccountScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerLeft: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
