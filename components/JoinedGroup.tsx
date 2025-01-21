import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";

function Group() {
  const widthScreen = Dimensions.get("window").width;

  return (
    <View style={{ flexDirection: "row", marginLeft: "5%", marginTop: "2%" }}>
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
        <TouchableOpacity
          style={{
            height: 27,
            width: 27,
            marginTop: 11,
            marginLeft: 50,
            borderRadius: 33,
            backgroundColor: "#6a6a69",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Image
            source={require("../assets/images/joinedGroup/arrow.svg")}
            style={{
              width: 19,
              height: 19,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
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
        <TouchableOpacity
          style={{
            height: 27,
            width: 27,
            marginTop: 11,
            marginLeft: 50,
            borderRadius: 33,
            backgroundColor: "#6a6a69",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Image
            source={require("../assets/images/joinedGroup/arrow.svg")}
            style={{
              width: 19,
              height: 19,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default function JoinedGroup() {
  return (
    <View>
      <Group />
      <Group />
      <Group />
    </View>
  );
}
