/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import WatchListProvider from "./src/Contexts/WatchlistContext";

export default function App() {
  return (
    <View style={styles.container}>
      <WatchListProvider>
        <Navigation />
      </WatchListProvider>
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
