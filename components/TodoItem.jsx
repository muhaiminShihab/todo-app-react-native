import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TodoItem = ({ todo, index, handleDelete }) => {
  return (
    <View className="bg-blue-500 mx-4 rounded py-3 px-4 text-white flex items-center justify-btween flex-row mb-4">
      <View className="w-3/5">
        <View className="flex flex-row items-center gap-2">
          <TouchableOpacity className="w-4 h-4 bg-[#e8ecf4] rounded"></TouchableOpacity>
          <Text className="text-white">{todo}</Text>
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
