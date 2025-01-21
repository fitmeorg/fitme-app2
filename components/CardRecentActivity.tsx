import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Avatar, Card } from "react-native-paper";

function User() {
  return (
    <>
      <Card.Title
        style={{ width: "100%" }}
        titleStyle={{ fontSize: 14, fontWeight: "regular" }}
        subtitleStyle={{
          fontSize: 12,
          fontWeight: "regular",
          color: "#979797",
        }}
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
      />
    </>
  );
}

function Line() {
  return (
    <View
      style={{
        width: "90%",
        height: 1,
        backgroundColor: "#f2f2f2",
        marginLeft: "5%",
      }}></View>
  );
}
export default function CardRecentActivity() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "#ffff",
        borderRadius: 15,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <User />
        <Line />
        <User />
        <Line />
        <User />
        <Line />
        <User />
        <Line />
        <User />
      </ScrollView>
    </View>
  );
}
