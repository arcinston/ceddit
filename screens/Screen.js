import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";
function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000000",
    flex: 1,
  },
});
export default Screen;
