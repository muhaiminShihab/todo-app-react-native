import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const forgot = () => {
  const handleForgot = () => {
    Keyboard.dismiss();
    Alert.alert("Error", "This feature is not yet implemented.");
  }

  return (
    <SafeAreaView className="flex-1 bg-[#e8ecf4] items-center justify-center">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="container px-4"
      >
        <View className="flex items-center mb-6">
          <View className="rounded-xl bg-white mb-2 p-3">
            <Image
              source={require("../assets/images/logo.png")}
              resizeMethod="contain"
              className="w-16 h-16"
              alt="Logo"
            />
          </View>
          <Text className="text-3xl font-bold">Xen To-Do</Text>
          <Text className="font-bold">A powerful to-do app</Text>
        </View>

        <View className="mt-4">
          <Text className="font-bold mb-1">Email:</Text>
          <TextInput
            className=" bg-white rounded-lg p-3 border border-[#C9D3DB]"
            placeholder="Enter your email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        <View className="mt-4">
          <TouchableOpacity className="bg-blue-500 rounded-lg p-3" onPress={() => handleForgot()}>
            <Text className="text-white font-bold text-center">Reset Password</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <View className="mt-4">
        <Link href="/" className="text-center">
          Remember your password? <Text className="underline text-blue-500">Login</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default forgot;
