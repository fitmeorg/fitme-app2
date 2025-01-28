import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { Image } from "expo-image";

const Header = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ height: 40, width: 40, borderRadius: 20 }}
        source={require("../../assets/images/userExample/jake.jpg")}></Image>
      <Text
        style={{
          color: "#FFFF",
          fontSize: 21,
          fontWeight: "bold",
          marginLeft: 10,
        }}>
        Alexandro!
      </Text>
    </View>
  );
};

function TypingTransmitter() {
  let image = require("../../assets/images/Chat/avatar2.png");

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 18,
        alignSelf: "flex-start",
        marginLeft: 20,
      }}>
      <Image style={{ height: 32, width: 32 }} source={image} />
      <View
        style={{
          height: 40,
          borderRadius: 20,
          paddingHorizontal: 15,
          justifyContent: "center",
        }}>
        <Text
          style={{
            color: "#979C9E",
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
          }}>
          Typing...
        </Text>
      </View>
    </View>
  );
}

function MessageTransmitter({ text, showImage }: any) {
  let image = require("../../assets/images/Chat/avatar2.png");

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 18,
        alignSelf: "flex-start",
        marginLeft: 20,
      }}>
      {showImage ? (
        <Image
          style={{ height: 32, width: 32, marginRight: 10 }}
          source={image}
        />
      ) : (
        <View style={{ height: 32, width: 32, marginRight: 10 }}></View>
      )}
      <View
        style={{
          height: 40,
          borderRadius: 20,
          paddingHorizontal: 15,
          justifyContent: "center",
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
          }}>
          {text}
        </Text>
      </View>
    </View>
  );
}

function MessageReceiver({ text, showImage }: any) {
  let image = require("../../assets/images/Chat/avatar1.png");

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 18,
        alignSelf: "flex-end",
        marginRight: 20,
      }}>
      <View
        style={{
          backgroundColor: "#714ABB",
          height: 40,
          borderRadius: 20,
          paddingHorizontal: 15,
          justifyContent: "center",
        }}>
        <Text
          style={{
            color: "#ffff",
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
          }}>
          {text}
        </Text>
      </View>
      {showImage ? (
        <Image
          style={{ height: 32, width: 32, marginLeft: 10 }}
          source={image}
        />
      ) : (
        <View style={{ height: 32, width: 32, marginLeft: 10 }}></View>
      )}
    </View>
  );
}

export default function Chat() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerTitle: (props) => <Header /> }} />
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View
          style={{
            width: 70,
            height: 22,
            backgroundColor: "#EBEAEA",
            marginTop: 15,
            borderRadius: 7,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text>Today</Text>
        </View>
        <Text
          style={{
            color: "#979C9E",
            fontSize: 15,
            fontWeight: "400",
            marginTop: "63%",
          }}>
          09:41 AM
        </Text>
        <MessageReceiver text={"Hi, Ale"} showImage={true} />
        <MessageReceiver text={"I’ve tried the app"} sender={true} />
        <MessageTransmitter text={"Really?"} showImage={true} />
        <MessageReceiver
          text={"Yeah, It’s really good!"}
          sender={true}
          showImage={true}
        />
        <TypingTransmitter />
      </ScrollView>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View
          style={{
            backgroundColor: "#EBEAEA",
            height: 60,
            width: "70%",
            marginLeft: 20,
            marginRight: "3%",
            borderRadius: 30,
            alignItems: "center",
            flexDirection: "row",
          }}>
          <Image
            style={{ height: 30, width: 30, marginLeft: 10 }}
            source={require("../../assets/images/Chat/clip.png")}
          />
          <Text style={{ marginLeft: 10, fontSize: 16, color: "#BFBFBF" }}>
            Type a message
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#714ABB",
            height: 60,
            width: 60,
            borderRadius: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../assets/images/Chat/microphone.svg")}
          />
        </View>
      </View>
    </View>
  );
}
