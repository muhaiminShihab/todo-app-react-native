import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
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
          <Text className="text-3xl font-bold">CODIXEN</Text>
          <Text className="font-bold">Empowering your business</Text>
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
          <Text className="font-bold mb-1">Password:</Text>
          <TextInput
            className="bg-white rounded-lg p-3 border border-[#C9D3DB]"
            placeholder="Enter your password"
            placeholderTextColor="gray"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>

        <View className="mt-4">
          <TouchableOpacity className="bg-blue-500 rounded-lg p-3">
            <Text className="text-white font-bold text-center">Login</Text>
          </TouchableOpacity>
          <Link href="/forgot" className="text-blue-500 mt-2 text-center">
            Forgot password?
          </Link>
        </View>
      </KeyboardAvoidingView>

      <View className="mt-4">
        <Link href="/register" className="text-center">
          Don't have an account? <Text className="underline text-blue-500">Register</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default index;
