import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";

export default function CreateRoutine() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, alignItems: "center" }}
      behavior="height">
      <TextInput
        outlineStyle={{
          borderColor: "#414142",
          backgroundColor: "transparent",
        }}
        textColor="#414142"
        style={{ height: 60, width: "90%", marginTop: 20, marginBottom: 10 }}
        mode="outlined"
        label="Routine Name"
        placeholder="Enter your Routine Name"
      />
      <View style={{ width: "90%", marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Add Activity</Text>
      </View>
      <SelectList
        placeholder="Exercise Name"
        setSelected={(val: any) => setSelected(val)}
        data={data}
        save="value"
        boxStyles={{
          width: "90%",
          borderColor: "#414142",
          borderRadius: 4,
          height: 60,
          alignItems: "center",
          marginTop: 25,
        }}
        inputStyles={{ color: "#1E263C", fontSize: 16 }}
      />
      <SelectList
        placeholder=" Duration"
        setSelected={(val: any) => setSelected(val)}
        data={data}
        save="value"
        boxStyles={{
          width: "90%",
          borderColor: "#414142",
          borderRadius: 4,
          height: 60,
          alignItems: "center",
          marginTop: 18,
        }}
        inputStyles={{ color: "#1E263C", fontSize: 16 }}
        search={false}
      />
      <TextInput
        outlineStyle={{
          borderColor: "#414142",
          backgroundColor: "transparent",
        }}
        style={{ height: 60, width: "90%", marginTop: 18 }}
        mode="outlined"
        label="Reps"
        placeholder="Enter Number of Repetitions"
      />

      <View
        style={{
          flex: 1,
          width: "90%",
          justifyContent: "flex-end",
          marginBottom: 55,
        }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height: 68,
            backgroundColor: "#714ABB",
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: "#ffff",
              fontSize: 17,
              fontWeight: "semibold",
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
