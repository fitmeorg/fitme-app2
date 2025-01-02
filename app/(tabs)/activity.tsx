import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import { View, Text } from "react-native";

export default function Activity() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View>
      <Text onPress={() => navigation.push("Quick Activity")}>
        Quick Activity
      </Text>
    </View>
  );
}
