/** @format */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "red",
    padding: 15,
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 3,
  },
  text: {
    color: "#fff",
    marginRight: 5,
  },
  rank: {
    fontWeight: "bold",
    color: "#fff",
  },
  rankContaine: {
    marginRight: 5,
    backgroundColor: "#444",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
