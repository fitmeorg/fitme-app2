import React from "react";
import { View, Text } from "react-native";
import { Avatar, Card } from "react-native-paper";

export default function NotificationCard() {
  return (
    <View style={{ backgroundColor: "#ffff", width: "90%", borderRadius: 15 }}>
      <Card.Title
        title="Card Tittle"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <Text style={{ marginRight: 12, color: "#999999", fontWeight: 600 }}>
            34m ago
          </Text>
        )}
      />
    </View>
  );
}
