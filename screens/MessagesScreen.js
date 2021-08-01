import React from "react";
import Cards from "./Cards";
import { Text, StyleSheet, FlatList } from "react-native";
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
  },
];
function MessagesScreen(props) {
  return (
    <div>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <Cards title={item.title} context={item.description} />
        )}
      />
    </div>
  );
}

export default MessagesScreen;
