import NotificationCard from "@/components/NotificationCard";
import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function Notification() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          marginLeft: "5%",
          color: "#929193",
          fontSize: 17,
          marginTop: 15,
          marginBottom: 15,
        }}>
        Recent Notifications
      </Text>
      <View style={{ width: "100%", alignItems: "center", gap: 8 }}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </View>
      <Text
        style={{
          marginLeft: "5%",
          color: "#929193",
          fontSize: 17,
          marginTop: 15,
          marginBottom: 15,
        }}>
        Yesterday
      </Text>
      <View style={{ width: "100%", alignItems: "center", gap: 8 }}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </View>
    </View>
  );
}
