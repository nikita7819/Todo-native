import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [modal, setModal] = useState(false);

  const handleAdd = (enteredText) => {
    setTodoList((currList) => [
      ...currList,
      { text: enteredText, id: Math.random().toString() },
    ]);
    handleModal();
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleDelete = (id) => {
    setTodoList((currList) => {
      return currList.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add New todo" color="#C9CBFF" onPress={handleModal} />
        <TodoInput
          onAdd={handleAdd}
          visible={modal}
          handleModal={handleModal}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={todoList}
            renderItem={(itemData) => {
              return (
                <TodoList
                  text={itemData.item.text}
                  onDelete={handleDelete}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#170055",
  },
  listContainer: {
    flex: 5,
    marginTop: 18,
  },
});
