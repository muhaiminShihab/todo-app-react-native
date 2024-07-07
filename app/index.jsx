import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TodoItem from "../components/TodoItem";

const todo = () => {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleAdd = () => {
    Keyboard.dismiss();
    console.log(todo);

    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    Alert.alert(
      "Delete Todo",
      "Are you sure you want to delete this To-Do?",
      [
        {
          text: "OK",
          onPress: () => {
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#e8ecf4] justify-center"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="m-4">
        <Text className="text-2xl font-bold">TO-DO</Text>
        <Text>Your To-Do List</Text>
      </View>

      <ScrollView>
        {
            todos.length > 0 ?
                todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    handleDelete={handleDelete}
                />
                ))
            : 
            <View className="flex items-center mt-40">
                <View className="rounded-xl bg-white mb-2 p-3">
                <Image
                    source={require("../assets/images/logo.png")}
                    resizeMethod="contain"
                    className="w-16 h-16"
                    alt="Logo"
                />
                </View>
                <Text className="text-xl font-bold">Empty List.</Text>
            </View>
        }
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="m-4 flex flex-row justify-between items-center">
          <TextInput
            className="bg-white rounded-lg py-2 px-4 border border-[#C9D3DB] w-[85%]"
            placeholder="Input Task"
            placeholderTextColor={"gray"}
            onChangeText={(text) => setTodo(text)}
            value={todo}
          ></TextInput>

          <TouchableOpacity
            className="bg-blue-500 rounded-full w-10 h-10"
            onPress={() => handleAdd()}
          >
            <Text className="text-center mt-[2px] text-white text-2xl">+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default todo;

const styles = StyleSheet.create({});
