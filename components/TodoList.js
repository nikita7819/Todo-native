import { StyleSheet, View, Text, Pressable } from "react-native";

const TodoList = ({ text, onDelete, id }) => {
  return (
    <View style={styles.itemList}>
      <Pressable
        android_ripple={{ color: "#FF005C" }}
        onPress={onDelete.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.itemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "#D291BC",
    marginVertical: 7,
    borderRadius: 5,
    margin: 8,
  },
  itemText: {
    padding: 10,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default TodoList;
