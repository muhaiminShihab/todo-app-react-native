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
import { Link, Redirect, useNavigation } from "expo-router";

const index = () => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    Keyboard.dismiss();
    
    if (email == "yoyo@yoyo" && password == "yoyo") {
      Alert.alert("Success", "Login successful.");
      navigation.navigate("todo");
    } else {
      Alert.alert("Error", "Invalid email or password.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#e8ecf4] items-center justify-center">
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

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="container px-4"
      >
        <View className="mt-4">
          <Text className="font-bold mb-1">Email:</Text>
          <TextInput
            className=" bg-white rounded-lg p-3 border border-[#C9D3DB]"
            placeholder="Enter your email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View className="mt-4">
          <TouchableOpacity
            className="bg-blue-500 rounded-lg p-3"
            onPress={() => handleLogin()}
          >
            <Text className="text-white font-bold text-center">Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Link href="/forgot" className="text-blue-500 mt-2 text-center">
        Forgot password?
      </Link>

      <View className="mt-4">
        <Link href="/register" className="text-center">
          Don't have an account?{" "}
          <Text className="underline text-blue-500">Register</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default index;
