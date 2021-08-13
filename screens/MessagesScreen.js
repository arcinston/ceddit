import React from "react";
import Cards from "./Cards";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <Cards
            title={item.title}
            context={item.description}
            onPress={() => console.log("card selected")}
            renderRightActions={() => (
              <View
                style={{
                  backgroundColor: "gold",
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="star" size={35} color="white" />
              </View>
            )}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 2,
  },
});
export default MessagesScreen;
