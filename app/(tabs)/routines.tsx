import { View, Text } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Routines() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View>
      <Text onPress={() => navigation.push("Create Routine")}>
        Create Routine
      </Text>
      <Text onPress={() => navigation.push("Routine Details")}>
        Routine Details
      </Text>
    </View>
  );
}
