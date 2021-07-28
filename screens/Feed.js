import React from "react";
import { View } from "react-native";
import Cards from "./Cards";
function Feed(props) {
  return (
    <View style={{ backgroundColor: "#f8f4F4", padding: 20 }}>
      <Cards title="Hello" context="World" />
    </View>
  );
}

export default Feed;
