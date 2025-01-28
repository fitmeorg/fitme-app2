import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function ChatInformation() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      style={{
        height: 35,
        width: 35,
        marginHorizontal: 16,
        borderRadius: 33,
        backgroundColor: "#aa92d6",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => navigation.goBack()}>
      <Image
        source={require("../assets/images/Chat/info.svg")}
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  );
}
