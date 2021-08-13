import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  SwipeableListView,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
function Cards({ title, context, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor="lightgray">
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.context}>{context}</Text>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "black",
    padding: 30,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  context: {
    color: "white",
    fontSize: 12,
  },
});

export default Cards;
