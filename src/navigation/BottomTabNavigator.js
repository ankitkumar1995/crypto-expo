/** @format */

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import WatchScreen from "../Screens/WatchScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#aaa",
        tabBarStyle: {
          backgroundColor: "blue",
        },
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name='home' size={focused ? 33 : 23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Watchlist'
        component={WatchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name='star' size={focused ? 33 : 23} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name='Settings' component={SttingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
