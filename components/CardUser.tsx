import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

function User() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
          justifyContent: "space-between",
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{
              height: 55,
              width: 55,
              borderRadius: 28,
            }}
            source={require("../assets/images/groups/tipos-de-agarre-en-pesas.jpg")}
          />
          <View style={{ marginLeft: 7 }}>
            <Text style={{ fontSize: 15, fontWeight: 700 }}>Moderator</Text>
            <Text style={{ fontSize: 12, fontWeight: "regular" }}>
              Mr. Walker
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require("../assets/images/groups/arrow.svg")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: "90%",
            height: 1,
            backgroundColor: "#f2f2f2",
          }}
        />
      </View>
    </>
  );
}
export default function CardUser() {
  return (
    <View
      style={{
        width: "90%",
        height: "54%",
        backgroundColor: "#ffff",
        borderRadius: 15,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <User />
        <User />
        <User />
        <User />
        <User />
      </ScrollView>
    </View>
  );
}
