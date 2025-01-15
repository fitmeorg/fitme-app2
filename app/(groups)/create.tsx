import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";

export default function CreateGroup() {
  const [email, onChangeEmail] = React.useState("");
  const [description, onChangeDescription] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={[style.input, { marginTop: 29 }]}>
        <Text
          style={{
            position: "absolute",
            top: -12,
            right: "60%",
            transform: [{ translateX: "-50%" }],
            backgroundColor: "#f5f5f5",
            color: "#1E263C",
          }}>
          Group Name
          <Text style={{ color: "#FF0000" }}> *</Text>
        </Text>
        <TextInput
          style={{ height: 60 }}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Enter your Group Name"
        />
      </View>
      <View style={[style.input, { marginTop: 16 }]}>
        <Text
          style={{
            position: "absolute",
            top: -12,
            right: "64%",
            transform: [{ translateX: "-50%" }],
            backgroundColor: "#f5f5f5",
            color: "#1E263C",
          }}>
          Description
          <Text style={{ color: "#FF0000" }}> *</Text>
        </Text>
        <TextInput
          style={{ height: 90 }}
          value={description}
          onChangeText={onChangeDescription}
          placeholder="Type...."
        />
      </View>
      <View
        style={[
          style.input,
          {
            justifyContent: "center",
            alignItems: "center",
            height: 160,
            marginTop: 16,
          },
        ]}>
        <Text
          style={{
            position: "absolute",
            top: -12,
            right: "60%",
            transform: [{ translateX: "-50%" }],
            backgroundColor: "#f5f5f5",
            color: "#1E263C",
          }}>
          Image Upload
        </Text>

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

export const style = StyleSheet.create({
  input: {
    width: "90%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#414142",
    borderRadius: 8,
    paddingHorizontal: 14,
  },
});
