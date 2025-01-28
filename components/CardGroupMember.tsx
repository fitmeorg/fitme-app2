import React from "react";
import { Text, Dimensions, TouchableOpacity, View } from "react-native";
import { Card, Divider } from "react-native-paper";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export default function CardGroupMember() {
  const width = Dimensions.get("window").width;

  const widthDivider = width - 80 - width / 10;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity onPress={() => navigation.push("Chat")}>
      <Card.Title
        title="Alexandra"
        titleStyle={{ fontSize: 17, fontWeight: "700" }}
        subtitleStyle={{ fontWeight: "700" }}
        subtitle="Why did you do that?"
        leftStyle={{ marginRight: 30 }}
        left={(props) => (
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: "#F6D6A5",
              borderRadius: 20,
            }}></View>
        )}
        right={(props) => (
          <View
            style={{
              backgroundColor: "#714ABB",
              height: 31,
              width: 31,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text style={{ color: "#ffff", fontSize: 14, fontWeight: "700" }}>
              2
            </Text>
          </View>
        )}
        style={{ width: "95%" }}
      />
      <Divider style={{ width: widthDivider, marginLeft: 80 }} />
    </TouchableOpacity>
  );
}
