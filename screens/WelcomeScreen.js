import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
function WelcomeScreen(props) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { justifyContent: "flex-end", alignContent: "center" },
      ]}
    >
      <Image
        source={require("../assets/sun.png")}
        style={{
          height: 100,
          width: 100,
          top: 200,
          alignSelf: "center",
          position: "absolute",
        }}
      ></Image>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#fff",
          top: 350,
          alignSelf: "center",
          position: "absolute",
        }}
      >
        Say what you feel , when you feel
      </Text>
      <View
        style={{
          backgroundColor: "#f52a2a",
          height: 75,
          justifyContent: "flex-end",
        }}
      >
        <Text style={styles.text}>Sign In</Text>
      </View>
      <View
        style={{
          backgroundColor: "#2eff7e",
          height: 75,
          justifyContent: "flex-end",
        }}
      >
        <Text style={styles.text}>Sign Up</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    paddingBottom: 20,
  },
});

export default WelcomeScreen;
