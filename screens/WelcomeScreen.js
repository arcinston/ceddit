import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={0}
      style={[
        styles.container,
        { justifyContent: "flex-end", alignContent: "center" },
      ]}
      source={require("../assets/login-background.jpg")}
    >
      <Ionicons
        name="logo-vue"
        style={{
          position: "absolute",
          top: 200,
          alignSelf: "center",
        }}
        size={100}
        color="silver"
      />
      <Text style={styles.caption}>Say what you feel , when you feel</Text>
      <TouchableOpacity style={[styles.sign, { backgroundColor: "#ff8080" }]}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.sign, { backgroundColor: "#99ff99" }]}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
  },
  caption: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    top: 300,
    alignSelf: "center",
    position: "absolute",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    justifyContent: "center",
    alignSelf: "center",
    paddingBottom: 30,
  },
  sign: {
    height: 100,
    width: 300,
    justifyContent: "flex-end",
    alignSelf: "center",
    borderRadius: 50,
    borderRadius: 50,
    margin: 10,
  },
});

export default WelcomeScreen;
