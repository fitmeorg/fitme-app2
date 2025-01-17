import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import { TextInput } from "react-native-paper";

export default function CreateGroup() {
  const [email, onChangeEmail] = React.useState("");
  const [description, onChangeDescription] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TextInput
        outlineStyle={{
          borderColor: "#414142",
          backgroundColor: "transparent",
        }}
        style={{ height: 75, width: "90%", marginTop: 20, marginBottom: 10 }}
        mode="outlined"
        label="Group Name"
        placeholder="Enter your Group Name"
      />

      <TextInput
        outlineStyle={{
          borderColor: "#414142",
          backgroundColor: "transparent",
        }}
        style={{ height: 115, width: "90%", marginBottom: 17 }}
        mode="outlined"
        label="Description"
        placeholder="Type...."
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 150,
          borderWidth: 1,
          borderColor: "#414142",
          borderRadius: 8,
          width: "90%",
        }}>
        <Feather name="upload-cloud" size={27} color="black" />
        <Text style={{ color: "#191D23", fontSize: 14, marginVertical: 8 }}>
          Browse and chose the files you want to upload{" "}
        </Text>
        <View
          style={{
            backgroundColor: "#714ABB",
            height: 37,
            width: 37,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
          }}>
          <Image
            source={require("../../assets/images/plusModal/plus.svg")}
            style={{ height: "50%", width: "50%" }}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          height: 68,
          width: "90%",
          backgroundColor: "#714ABB",
          borderRadius: 15,
          bottom: -150,
        }}>
        <Text
          style={{
            color: "#ffff",
            fontSize: 17,
            fontWeight: "semibold",
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
