import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function LogIn() {
  return (
    <View>
      <Link push href="/(tabs)/home">
        <Text>login</Text>
      </Link>
    </View>
  );
}