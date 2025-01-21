import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

function Group() {
  const widthScreen = Dimensions.get("window").width;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={{ flexDirection: "row" }}>
      <ImageBackground
        source={require("../assets/images/joinedGroup/woman.jpg")}
        style={{
          width: widthScreen * 0.44,
          height: (widthScreen * 44) / 100,
          marginRight: "2%",
          borderWidth: 2,
          borderColor: "#d2d2d2",
          borderRadius: 8,
          overflow: "hidden",
          flexDirection: "row",
        }}
        imageStyle={{ borderRadius: 8 }}
        resizeMode="cover">
        <View
          style={{
            height: 35,
            width: 7,
            backgroundColor: "#FF7F61",
            marginTop: 11,
          }}></View>
        <BlurView
          intensity={4.4}
          style={{
            overflow: "hidden",
            height: "16%",
            width: "40%",
            marginTop: 11,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}>
          <Text style={{ color: "#ffff" }}>Grupo B</Text>
        </BlurView>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => navigation.push("Group id")}
            style={{
              width: "71%",
              height: "20%",
              backgroundColor: "#ffff",
              borderRadius: 6,
              bottom: "-70%",
              left: "10%",
              borderWidth: 2,
              borderColor: "#FF7F61",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text>Join</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/images/joinedGroup/woman.jpg")}
        style={{
          width: widthScreen * 0.44,
          height: (widthScreen * 44) / 100,
          borderWidth: 2,
          borderColor: "#d2d2d2",
          borderRadius: 8,
          overflow: "hidden",
          flexDirection: "row",
        }}
        imageStyle={{ borderRadius: 8 }}
        resizeMode="cover">
        <View
          style={{
            height: 35,
            width: 7,
            backgroundColor: "#FF7F61",
            marginTop: 11,
          }}></View>
        <BlurView
          intensity={4.4}
          style={{
            overflow: "hidden",
            height: "16%",
            width: "40%",
            marginTop: 11,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}>
          <Text style={{ color: "#ffff" }}>Grupo B</Text>
        </BlurView>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => navigation.push("Group id")}
            style={{
              width: "71%",
              height: "20%",
              backgroundColor: "#ffff",
              borderRadius: 6,
              bottom: "-70%",
              left: "10%",
              borderWidth: 2,
              borderColor: "#FF7F61",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text>Join</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default function JoinGroups() {
  return (
    <View>
      <Group />
      <Group />
      <Group />
      <Group />
    </View>
  );
}
