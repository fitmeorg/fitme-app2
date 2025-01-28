import React from "react";
import { ScrollView, Text, View } from "react-native";
import CardGroupMember from "@/components/CardGroupMember";

export default function GroupMembers() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "400",
          marginLeft: "10%",
          marginTop: 10,
        }}>
        People in te Group
      </Text>
      <ScrollView style={{ marginLeft: "5%", marginTop: 15 }}>
        <CardGroupMember />
        <CardGroupMember />
        <CardGroupMember />
        <CardGroupMember />
      </ScrollView>
    </View>
  );
}
