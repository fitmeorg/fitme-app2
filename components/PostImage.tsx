import CardDescriptionPost from "@/components/CardDescriptionPost";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { Image } from "expo-image";

function IconPost({ nameIcon }: any) {
  const share = require("../assets/images/PhotosOfTheDay/share.svg");
  let image;

  if (nameIcon === "share") {
    image = share;
  }
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#3f4751",
          height: 40,
          width: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginLeft: 10,
        }}>
        <Image style={{ height: 28, width: 28 }} source={image} />
      </TouchableOpacity>
      <Text
        style={{
          color: "#FCFCFB",
          fontSize: 19,
          fontWeight: "500",
          marginLeft: 6,
          marginRight: 10,
        }}>
        11
      </Text>
    </View>
  );
}

export default function PostImage() {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <CardDescriptionPost />
        <View
          style={{
            backgroundColor: "#353D48",
            alignItems: "center",
            height: 50,
          }}>
          <Text
            style={{
              color: "#D9D9D9",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 10,
            }}>
            I love the quality of running in my 30. The moments are expansive
          </Text>
        </View>
        <View
          style={{
            height: 220,
            backgroundColor: "#353D48",
          }}>
          <PagerView style={{ flex: 1, marginTop: 19 }} initialPage={0}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
              key="1">
              <Image
                style={{
                  height: 200,
                  width: 370,
                }}
                source={require("../assets/images/welcome/woman-desk.svg")}
              />
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              key="2">
              <Image
                style={{ height: 200, width: 370 }}
                source={require("../assets/images/welcome/woman-desk.svg")}
              />
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              key="3">
              <Image
                style={{ height: 200, width: 370 }}
                source={require("../assets/images/welcome/woman-desk.svg")}
              />
            </View>
          </PagerView>
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: "#353D48",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <IconPost nameIcon={"share"} />
          <View style={{ flexDirection: "row" }}>
            <IconPost nameIcon={"share"} />
            <IconPost nameIcon={"share"} />
          </View>
        </View>
      </View>
    </View>
  );
}
