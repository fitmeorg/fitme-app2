import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

function UserMembers({ color }: any) {
  const width = Dimensions.get("window").width;
  const size = (width - (14 * width) / 100) / 3;

  const textColor = color === "#FFFFFF" ? "#808080" : "#FFFFFF";

  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor: color,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Image
        source={require("../../assets/images/groups/users.png")}
        style={{ height: "37%", width: "37%" }}
      />
      <Text style={{ color: textColor }}>Name</Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}>
        <Text
          style={{
            color: textColor,
          }}>
          11{"  "}
        </Text>
        <Image
          source={require("../../assets/images/groups/streak.svg")}
          style={{ height: 20, width: 20 }}
        />
      </View>
    </View>
  );
}

function UserMembersRow({ colors }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        gap: 10,
      }}>
      <UserMembers color={colors[0]} />
      <UserMembers color={colors[1]} />
      <UserMembers color={colors[2]} />
    </View>
  );
}

export default function GroupDetails() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ width: "90%" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}>
            <Text style={{ fontSize: 19, fontWeight: "600" }}>
              Top Performers
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                alignSelf: "flex-end",
              }}>
              View All
            </Text>
          </View>
          <UserMembersRow colors={["#714ABB", "#FF7F61", "#FFFFFF"]} />
          <Text style={{ fontSize: 19, fontWeight: "600", marginTop: 20 }}>
            Photo of the Day
          </Text>
          <TouchableOpacity
            onPress={() => navigation.push("Photo of the Day")}
            style={{
              flexDirection: "row",
              width: "100%",
              height: 80,
              backgroundColor: "#714ABB",
              borderRadius: 11,
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#ffff",
                marginLeft: 20,
              }}>
              See Photo the Day
            </Text>
            <Image
              source={require("../../assets/images/groups/arrows.svg")}
              style={{ height: 20, width: 40, marginRight: 16 }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}>
            <Text style={{ fontSize: 19, fontWeight: "600" }}>
              Group Members
            </Text>
            <Text
              onPress={() => navigation.push("Group Members")}
              style={{
                fontSize: 16,
                fontWeight: "400",
                alignSelf: "flex-end",
              }}>
              View All
            </Text>
          </View>
          <UserMembersRow colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]} />
          <UserMembersRow colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]} />
          <UserMembersRow colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]} />
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              height: 60,
              backgroundColor: "#714ABB",
              borderRadius: 11,
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              source={require("../../assets/images/groups/iconChat.svg")}
              style={{ height: 30, width: 30 }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#ffff",
                marginLeft: 8,
              }}>
              Open Chat Window
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
