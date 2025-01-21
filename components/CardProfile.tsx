import React from "react";
import { Card } from "react-native-paper";
import { View } from "react-native";
import { Image } from "expo-image";

export default function CardProfile({}) {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: "#ffff",
        borderRadius: 15,
        marginBottom: 10,
        height: 360,
        marginTop: 13,
      }}>
      <Card.Title
        titleStyle={{ fontSize: 16, fontWeight: 600, color: "#022150" }}
        leftStyle={{ marginRight: 20 }}
        title="Settings"
        style={{ width: "93%", margin: 0, padding: 0 }}
        left={(props) => (
          <Image
            style={{ height: 43, width: 43, marginRight: 10 }}
            source={require("../assets/images/Profile/settings.svg")}
          />
        )}
        right={(props) => (
          <Image
            source={require("../assets/images/Profile/arrow.svg")}
            style={{ height: 16, width: 8 }}
          />
        )}
      />

      <Card.Title
        titleStyle={{ fontSize: 16, fontWeight: 600, color: "#022150" }}
        leftStyle={{ marginRight: 20 }}
        title="My Statistics"
        style={{ width: "93%" }}
        left={(props) => (
          <Image
            style={{ height: 43, width: 43, marginRight: 10 }}
            source={require("../assets/images/Profile/myStatistics.svg")}
          />
        )}
        right={(props) => (
          <Image
            source={require("../assets/images/Profile/arrow.svg")}
            style={{ height: 16, width: 8 }}
          />
        )}
      />

      <Card.Title
        titleStyle={{ fontSize: 16, fontWeight: 600, color: "#022150" }}
        leftStyle={{ marginRight: 20 }}
        title="General"
        style={{ width: "93%" }}
        left={(props) => (
          <Image
            style={{ height: 43, width: 43, marginRight: 10 }}
            source={require("../assets/images/Profile/general.svg")}
          />
        )}
        right={(props) => (
          <Image
            source={require("../assets/images/Profile/arrow.svg")}
            style={{ height: 16, width: 8 }}
          />
        )}
      />

      <Card.Title
        titleStyle={{ fontSize: 16, fontWeight: 600, color: "#022150" }}
        leftStyle={{ marginRight: 20 }}
        title="Help"
        style={{ width: "93%" }}
        left={(props) => (
          <Image
            style={{ height: 43, width: 43, marginRight: 10 }}
            source={require("../assets/images/Profile/help.svg")}
          />
        )}
        right={(props) => (
          <Image
            source={require("../assets/images/Profile/arrow.svg")}
            style={{ height: 16, width: 8 }}
          />
        )}
      />

      <Card.Title
        titleStyle={{ fontSize: 16, fontWeight: 600, color: "#022150" }}
        leftStyle={{ marginRight: 20 }}
        title="Log out"
        style={{ width: "93%", alignItems: "center"}}
        left={(props) => (
          <Image
            style={{ height: 43, width: 43, marginRight: 10 }}
            source={require("../assets/images/Profile/logOut.svg")}
          />
        )}
        right={(props) => (
          <Image
            source={require("../assets/images/Profile/arrow.svg")}
            style={{ height: 16, width: 8 }}
          />
        )}
      />
    </View>
  );
}
