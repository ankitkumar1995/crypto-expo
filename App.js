/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363636",
  },
});
