import React from "react";
import { Avatar, Card, Text } from "react-native-paper";
import { View } from "react-native";
import { Image } from "expo-image";

export default function CardRoutine() {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: "#ffff",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
      }}>
      <View style={{ backgroundColor: "#FF7F61", height: 50, width: 4 }}></View>
      <Card.Title
        title="Morning Exercise"
        subtitle={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ height: 13, width: 10, marginRight: 2 }}
              source={require("../assets/images/RoutineLibrary/clock.svg")}
            />
            <Text style={{ color: "#888" }}>06:00 am - 07:00 am</Text>
          </View>
        }
        style={{ width: "100%" }}
        left={(props) => (
          <Image
            style={{ height: 55, width: 55, marginRight: 10 }}
            source={require("../assets/images/RoutineLibrary/MorningExercise.svg")}
          />
        )}
      />
    </View>
  );
}
