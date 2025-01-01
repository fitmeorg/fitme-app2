import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function SignUp() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View>
      <Text onPress={() => navigation.push("HomePage")}>login</Text>
    </View>
  );
}
