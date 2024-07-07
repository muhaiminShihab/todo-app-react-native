import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TodoItem = ({ todo, index, handleDelete, handleChecked }) => {
  return (
    <View className="bg-blue-500 mx-4 rounded py-3 px-4 text-white flex items-center justify-btween flex-row mb-4">
      <View className="w-3/5">
        <View className="flex flex-row items-center gap-2">
          <TouchableOpacity
            onPress={() => handleChecked(index)}
            className={`w-4 h-4 rounded ${
              todo.checked ? "bg-green-500" : "bg-black"
            }`}
          ></TouchableOpacity>
          <Text className={`text-white ${ todo.checked ? "line-through" : "" }`}>{todo.task}</Text>
        </View>
      </View>
      <View className="w-2/5">
        <View className="flex flex-row justify-end gap-2">
          {/* <Text className="text-white underline" onPress={handleEdit}>Edit</Text> */}
          <Text
            className="text-white underline"
            onPress={() => handleDelete(index)}
          >
            Delete
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({});
