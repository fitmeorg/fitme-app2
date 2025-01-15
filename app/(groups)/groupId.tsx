import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import CardUser from "@/components/CardUser";

export default function GroupId() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        style={{
          height: 140,
          width: 140,
          borderRadius: 70,
          position: "absolute",
          top: -70,
          zIndex: 1,
        }}
        source={require("../../assets/images/groups/tipos-de-agarre-en-pesas.jpg")}
      />
      <Text style={{ marginTop: 80, fontSize: 18, fontWeight: 900 }}>
        The FitMe Group
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "#6A5858",
          fontWeight: "regular",
          marginTop: 6,
        }}>
        Victoria De Durango, Durango
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 18,
        }}>
        <Text style={{ fontSize: 16, color: "#7c7c7c", marginRight: 3 }}>
          120
        </Text>
        <Image
          style={{
            height: 14,
            width: 14,
          }}
          source={require("../../assets/images/header/streakFlame.png")}
        />
      </View>

      <LinearGradient
        colors={["#7850BF", "#512DA8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          height: "8%",
          width: "70%",
          backgroundColor: "#7c7c7c",
          borderRadius: 12,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}>
          <Text
            style={{
              color: "#ffff",
              fontSize: 19,
              fontWeight: "medium",
            }}>
            Join
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "Montserrat-SemiBold",
          }}>
          People in te Group
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "medium", color: "#714ABB" }}>
          See all
        </Text>
      </View>
      <CardUser />
    </View>
  );
}
