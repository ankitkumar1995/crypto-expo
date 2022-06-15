/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetailScreen from "../Screens/CoinDetailScreen";
import HomeScreen from "../Screens/HomeScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}>
      <Stack.Navigator
        initialRouteName='Root'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Root"} component={BottomTabNavigator} />
        <Stack.Screen name={"CoinDetailScreen"} component={CoinDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
