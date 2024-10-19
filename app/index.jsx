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
import React, { useEffect } from "react";
import TodoItem from "../components/TodoItem";
import AsyncStorage from '@react-native-async-storage/async-storage';

const todo = () => {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  // Load todos from AsyncStorage when the app starts
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("@todos");
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (e) {
        console.error("Failed to load todos:", e);
      }
    };
    loadTodos();
  }, []);

  // Save todos to AsyncStorage whenever they change
  useEffect(() => {
    const saveTodos = async () => {
      try {
        const jsonValue = JSON.stringify(todos);
        await AsyncStorage.setItem("@todos", jsonValue);
      } catch (e) {
        console.error("Failed to save todos:", e);
      }
    };
    saveTodos();
  }, [todos]);

  const handleAdd = () => {
    Keyboard.dismiss();

    let newTodo = {
      task: todo,
      checked: false,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this To-Do?", [
      {
        text: "OK",
        onPress: () => {
          const newTodos = [...todos];
          newTodos.splice(index, 1);
          setTodos(newTodos);
        },
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  };

  const handleChecked = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
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
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              handleDelete={handleDelete}
              handleChecked={handleChecked}
            />
          ))
        ) : (
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
        )}
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
