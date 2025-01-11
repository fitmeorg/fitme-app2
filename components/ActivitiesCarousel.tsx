import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Image } from "expo-image";

const imageMap: { [key: string]: any } = {
  Walking: require("../assets/images/ActivitiesCarousel/walking.jpg"),
  Cycling: require("../assets/images/ActivitiesCarousel/cycling.jpg"),
};

function ContainerActivity({ typeActivity }: any) {
  const imagePath = imageMap[typeActivity] || imageMap["Walking"];

  return (
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: "#ffff",
        borderRadius: 10,
        marginRight: 10,
        flexDirection: "row",
      }}>
      <View
        style={{
          backgroundColor: "#E44D44",
          height: 60,
          width: "4%",
          marginTop: 10,
        }}></View>
      <View
        style={{
          height: "100%",
          width: "92%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}>
        <Image style={{ height: 40, width: 40 }} source={imagePath} />
        <Text style={{ color: "#808080" }}>{typeActivity}</Text>
      </View>
    </View>
  );
}

export default function ActivitiesCarousel() {
  return (
    <View>
      <ScrollView
        horizontal
        style={{ paddingHorizontal: "5%" }}
        showsHorizontalScrollIndicator={false}>
        <ContainerActivity typeActivity={"Cycling"} />
        <ContainerActivity typeActivity={"Walking"} />
        <ContainerActivity typeActivity={"Cycling"} />
        <ContainerActivity typeActivity={"Walking"} />
        <ContainerActivity typeActivity={"Cycling"} />
        <ContainerActivity typeActivity={"Walking"} />
        <ContainerActivity typeActivity={"Cycling"} />
        <ContainerActivity typeActivity={"Walking"} />
      </ScrollView>
    </View>
  );
}
