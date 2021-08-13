import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";

function WelcomeScreen(props) {
  const [email, setText] = useState("");
  const [password, setPass] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.signin}>Sign In</Text>
      <TextInput
        style={styles.email}
        placeholder="     Enter Email-Id"
        placeholderTextColor="grey"
        onChangeText={setText}
        value={email}
      />
      <TextInput
        style={styles.email}
        placeholder="     Password"
        placeholderTextColor="grey"
        onChangeText={setPass}
        value={password}
      />
      <TouchableOpacity style={[styles.sign, { backgroundColor: "#02dac5" }]}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.newaccount}>Want to create an account ? Sign Up</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
  },
  email: {
    color: "white",
    height: 70,
    width: "80%",
    fontSize: 20,
    position: "relative",
    paddingLeft: 10,
    top: 125,
    margin: 12,
    marginLeft: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#009486",
    justifyContent: "center",
  },
  signin: {
    position: "relative",
    top: 50,
    left: 25,
    fontSize: 60,
    fontWeight: "bold",
    color: "#7d7a7a",
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
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    paddingBottom: 12,
  },
  sign: {
    height: 50,
    width: 150,
    top: 300,
    justifyContent: "flex-end",
    alignSelf: "center",
    borderRadius: 20,
    margin: 10,
    position: "relative",
  },
  newaccount: {
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    top: 350,
    position: "relative",
  },
});

export default WelcomeScreen;
