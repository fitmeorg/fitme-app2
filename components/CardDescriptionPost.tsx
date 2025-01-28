import React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";

export default function CardDescriptionPost() {
  return (
    <Card.Title
      style={{ width: "100%", backgroundColor: "transparent" }}
      titleStyle={{ fontSize: 17, fontWeight: "700" }}
      subtitleStyle={{ fontSize: 13, fontWeight: "600", color: "#A7A7" }}
      title="jessica_jane7"
      subtitle="7 min ago"
      left={(props) => <Avatar.Icon {...props} icon="folder" />}
      right={(props) => (
        <IconButton
          {...props}
          icon="dots-vertical"
          onPress={() => {}}
          size={29}
        />
      )}
    />
  );
}
