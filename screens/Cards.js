import React from "react";
import { View, StyleSheet } from "react-native";

function Cards({ title, context }) {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
      <Text>{context}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: 20,
    margin: 10,
  },
});

export default Cards;
