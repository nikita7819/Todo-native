import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const TodoInput = ({ onAdd, visible, handleModal }) => {
  const [enteredText, setEnteredText] = useState("");

  const textHandler = (text) => {
    setEnteredText(text);
  };

  const handleAdd = () => {
    onAdd(enteredText);
    setEnteredText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer} collapsable={true}>
        <Image style={styles.image} source={require("../assets/todo.png")} />
        <TextInput
          placeholder="✅ Enter Your TODO here.."
          style={styles.textInput}
          onChangeText={textHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleModal} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={handleAdd} color="#BC6FF1" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#170055",
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F9F9F9",
    backgroundColor: "#F9F9F9",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default TodoInput;
